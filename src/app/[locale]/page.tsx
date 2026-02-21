import { T, Currency } from "gt-next";
import { getGT } from "gt-next/server";
import Link from "next/link";
import { departments } from "@/data/departments";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const deptIcons: Record<string, string> = {
  tools: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  lumber: "M4 4h16v16H4z",
  plumbing: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
  electrical: "M13 2L3 14h9l-1 10 10-12h-9l1-10z",
  paint: "M20 2H4a2 2 0 00-2 2v2a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM7 8v12a2 2 0 002 2h6a2 2 0 002-2V8",
  hardware: "M12 8V4l8 8-8 8v-4H4V8h8z",
};

export default async function HomePage() {
  const tx = await getGT();
  const featured = products.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#E86C00] to-[#C45800] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <T>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">Spring Project Sale</h1>
            <p className="text-lg sm:text-xl mb-2 text-orange-100">20% Off Paint & Stain - This Weekend Only</p>
            <p className="text-orange-200 mb-8">Everything you need to bring your project to life.</p>
          </T>
          <Link href="/shop" className="inline-block bg-white text-[#E86C00] font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors">
            <T>Shop Now</T>
          </Link>
        </div>
      </section>

      {/* Departments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <T><h2 className="text-2xl font-bold mb-8 text-[#2D2D2D]">Shop by Department</h2></T>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {departments.map((dept) => (
            <Link
              key={dept.id}
              href={`/shop?department=${dept.id}`}
              className="group border border-gray-200 rounded-lg p-4 text-center hover:border-[#E86C00] hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-[#FFF3E6] rounded-full flex items-center justify-center group-hover:bg-[#E86C00] transition-colors">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#E86C00] group-hover:text-white transition-colors">
                  <path d={deptIcons[dept.id]} />
                </svg>
              </div>
              <span className="text-sm font-medium text-[#2D2D2D]">{tx(dept.name)}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <T><h2 className="text-2xl font-bold text-[#2D2D2D]">Featured Products</h2></T>
          <Link href="/shop" className="text-[#E86C00] text-sm font-medium hover:underline"><T>View All</T></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Project Guides CTA */}
      <section className="bg-[#F3F4F6] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <T>
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">Weekend Project Ideas</h2>
            <p className="text-[#6B7280] mb-6 max-w-2xl">
              Get inspired with our step-by-step project guides. From building floating shelves to painting a room like a pro, we have guides for every skill level.
            </p>
          </T>
          <Link href="/guides" className="inline-block bg-[#E86C00] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#C45800] transition-colors">
            <T>Browse Project Guides</T>
          </Link>
        </div>
      </section>
    </div>
  );
}
