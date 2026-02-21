"use client";

import { useSearchParams } from "next/navigation";
import { useState, useMemo, Suspense } from "react";
import { T, Num, Plural, useGT } from "gt-next";
import { products } from "@/data/products";
import { departments } from "@/data/departments";
import ProductCard from "@/components/ProductCard";

function ShopContent() {
  const tx = useGT();
  const searchParams = useSearchParams();
  const deptFilter = searchParams.get("department");

  const [sortBy, setSortBy] = useState("name-asc");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filtered = useMemo(() => {
    let result = products;
    if (deptFilter) result = result.filter((p) => p.departmentId === deptFilter);
    if (inStockOnly) result = result.filter((p) => p.stockStatus !== "out-of-stock");

    switch (sortBy) {
      case "price-asc": return [...result].sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
      case "price-desc": return [...result].sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
      case "rating": return [...result].sort((a, b) => b.rating - a.rating);
      case "name-asc": return [...result].sort((a, b) => a.name.localeCompare(b.name));
      default: return result;
    }
  }, [deptFilter, sortBy, inStockOnly]);

  const activeDept = departments.find((d) => d.id === deptFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-3xl font-bold text-[#2D2D2D] mb-2">
        {activeDept ? tx(activeDept.name) : <T>All Products</T>}
      </h1>

      {/* Filters bar */}
      <div className="flex flex-wrap items-center gap-4 mb-6 pb-4 border-b border-gray-200">
        {/* Department pills */}
        <div className="flex flex-wrap gap-2">
          <a href="/shop" className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${!deptFilter ? "bg-[#E86C00] text-white" : "bg-gray-100 text-[#6B7280] hover:bg-gray-200"}`}>
            <T>All</T>
          </a>
          {departments.map((d) => (
            <a key={d.id} href={`/shop?department=${d.id}`} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${deptFilter === d.id ? "bg-[#E86C00] text-white" : "bg-gray-100 text-[#6B7280] hover:bg-gray-200"}`}>
              {tx(d.name)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <label className="flex items-center gap-2 text-sm text-[#6B7280]">
            <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} className="rounded border-gray-300 text-[#E86C00] focus:ring-[#E86C00]" />
            <T>In Stock Only</T>
          </label>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-300 rounded-md px-3 py-1.5 text-[#6B7280] focus:ring-[#E86C00] focus:border-[#E86C00]"
          >
            <option value="name-asc">Name A-Z</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-[#6B7280] mb-4">
        <T>
          <Plural
            n={filtered.length}
            singular={<>Showing <Num>{filtered.length}</Num> product</>}
            plural={<>Showing <Num>{filtered.length}</Num> products</>}
          />
        </T>
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <T>
            <p className="text-[#6B7280] text-lg">No products found matching your filters.</p>
            <p className="text-sm text-gray-400 mt-2">Try adjusting your filters or browse all products.</p>
          </T>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense>
      <ShopContent />
    </Suspense>
  );
}
