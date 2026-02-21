"use client";

import { use, useState } from "react";
import Link from "next/link";
import { T, Currency, Num, Plural, useGT } from "gt-next";
import { products } from "@/data/products";
import { reviews as allReviews } from "@/data/reviews";
import { useCart } from "@/lib/cart-context";
import StockBadge from "@/components/StockBadge";
import StarRating from "@/components/StarRating";

export default function ProductDetailPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = use(params);
  const product = products.find((p) => p.id === productId);
  const { addItem } = useCart();
  const tx = useGT();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"description" | "specs" | "reviews">("description");

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <T><h1 className="text-2xl font-bold">Product Not Found</h1></T>
      </div>
    );
  }

  const productReviews = allReviews.filter((r) => r.productId === product.id);
  const relatedProducts = product.frequentlyBoughtWith
    ? products.filter((p) => product.frequentlyBoughtWith?.includes(p.id))
    : [];

  const deptColors: Record<string, string> = {
    tools: "bg-blue-100", lumber: "bg-amber-100", plumbing: "bg-cyan-100",
    electrical: "bg-yellow-100", paint: "bg-purple-100", hardware: "bg-gray-100",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-[#6B7280] mb-6">
        <Link href="/shop" className="hover:text-[#E86C00]"><T>Shop</T></Link>
        <span className="mx-2">/</span>
        <Link href={`/shop?department=${product.departmentId}`} className="hover:text-[#E86C00]">
          {tx(product.departmentId.charAt(0).toUpperCase() + product.departmentId.slice(1))}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#2D2D2D]">{tx(product.name)}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        {/* Image placeholder */}
        <div className={`${deptColors[product.departmentId] || "bg-gray-100"} rounded-lg h-80 lg:h-[400px] flex items-center justify-center`}>
          <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-20">
            {product.departmentId === "tools" && <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />}
            {product.departmentId === "lumber" && <path d="M4 4h16v16H4z" />}
            {product.departmentId === "plumbing" && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />}
            {product.departmentId === "electrical" && <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />}
            {product.departmentId === "paint" && <><path d="M20 2H4a2 2 0 00-2 2v2a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2z" /><path d="M7 8v12a2 2 0 002 2h6a2 2 0 002-2V8" /></>}
            {product.departmentId === "hardware" && <path d="M12 8V4l8 8-8 8v-4H4V8h8z" />}
          </svg>
        </div>

        {/* Product info */}
        <div>
          <p className="text-sm text-[#6B7280] mb-1">{product.brand}</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-3">{tx(product.name)}</h1>

          <div className="flex items-center gap-3 mb-4">
            <StarRating rating={product.rating} size={18} />
            <span className="text-sm text-[#6B7280]">
              <T><Num>{product.rating}</Num> (<Plural n={product.reviewCount} singular={<><Num>{product.reviewCount}</Num> review</>} plural={<><Num>{product.reviewCount}</Num> reviews</>} />)</T>
            </span>
          </div>

          <div className="mb-4">
            {product.salePrice ? (
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-[#DC2626]"><Currency>{product.salePrice}</Currency></span>
                <span className="text-lg text-[#6B7280] line-through"><Currency>{product.price}</Currency></span>
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">
                  <T>SALE</T>
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-[#2D2D2D]"><Currency>{product.price}</Currency></span>
            )}
          </div>

          <div className="mb-6">
            <StockBadge status={product.stockStatus} qty={product.stockQty} />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 text-[#6B7280] hover:bg-gray-100">-</button>
              <span className="px-4 py-2 font-medium">{qty}</span>
              <button onClick={() => setQty(Math.min(product.stockQty, qty + 1))} className="px-3 py-2 text-[#6B7280] hover:bg-gray-100">+</button>
            </div>
            <button
              onClick={() => addItem(product.id, qty)}
              disabled={product.stockStatus === "out-of-stock"}
              className="flex-1 py-3 px-6 rounded-md font-medium bg-[#E86C00] text-white hover:bg-[#C45800] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <T>Add to Cart</T>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex gap-8">
          {(["description", "specs", "reviews"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${tab === t ? "border-[#E86C00] text-[#E86C00]" : "border-transparent text-[#6B7280] hover:text-[#2D2D2D]"}`}
            >
              <T>{t === "description" ? "Description" : t === "specs" ? "Specifications" : "Reviews"}</T>
            </button>
          ))}
        </div>
      </div>

      {tab === "description" && (
        <div className="max-w-3xl">
          <p className="text-[#6B7280] leading-relaxed">{tx(product.description)}</p>
        </div>
      )}

      {tab === "specs" && (
        <div className="max-w-2xl">
          <table className="w-full text-sm">
            <tbody>
              {Object.entries(product.specs).map(([key, val]) => (
                <tr key={key} className="border-b border-gray-100">
                  <td className="py-3 font-medium text-[#2D2D2D] w-1/3">{tx(key)}</td>
                  <td className="py-3 text-[#6B7280]">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "reviews" && (
        <div className="max-w-3xl space-y-6">
          {productReviews.length === 0 ? (
            <T><p className="text-[#6B7280]">No reviews yet.</p></T>
          ) : (
            productReviews.map((r) => (
              <div key={r.id} className="border-b border-gray-100 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <StarRating rating={r.rating} size={14} />
                  <span className="font-medium text-sm text-[#2D2D2D]">{r.title}</span>
                </div>
                <p className="text-sm text-[#6B7280] mb-2">{r.text}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>{r.author}</span>
                  <span>{r.date}</span>
                  <span><T><Num>{r.helpful}</Num> found this helpful</T></span>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Frequently bought together */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <T><h2 className="text-xl font-bold text-[#2D2D2D] mb-6">Frequently Bought Together</h2></T>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <div key={p.id} className="border border-gray-200 rounded-lg p-4">
                <Link href={`/shop/${p.id}`} className="font-medium text-sm hover:text-[#E86C00]">{tx(p.name)}</Link>
                <p className="text-sm text-[#6B7280] mt-1">{p.brand}</p>
                <p className="font-bold mt-2"><Currency>{p.salePrice || p.price}</Currency></p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
