"use client";

import Link from "next/link";
import { T, Currency, Num, useGT } from "gt-next";
import { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import StockBadge from "./StockBadge";
import StarRating from "./StarRating";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const tx = useGT();

  const deptColors: Record<string, string> = {
    tools: "bg-blue-100 text-blue-700",
    lumber: "bg-amber-100 text-amber-700",
    plumbing: "bg-cyan-100 text-cyan-700",
    electrical: "bg-yellow-100 text-yellow-700",
    paint: "bg-purple-100 text-purple-700",
    hardware: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col">
      <Link href={`/shop/${product.id}`}>
        <div className={`h-40 rounded-md mb-3 flex items-center justify-center ${deptColors[product.departmentId] || "bg-gray-100"}`}>
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-40">
            {product.departmentId === "tools" && <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />}
            {product.departmentId === "lumber" && <path d="M4 4h16v16H4z" />}
            {product.departmentId === "plumbing" && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />}
            {product.departmentId === "electrical" && <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />}
            {product.departmentId === "paint" && <><path d="M20 2H4a2 2 0 00-2 2v2a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2z" /><path d="M7 8v12a2 2 0 002 2h6a2 2 0 002-2V8" /></>}
            {product.departmentId === "hardware" && <path d="M12 8V4l8 8-8 8v-4H4V8h8z" />}
          </svg>
        </div>
      </Link>

      <div className="flex-1 flex flex-col">
        <p className="text-xs text-[#6B7280] mb-1">{product.brand}</p>
        <Link href={`/shop/${product.id}`} className="font-medium text-sm text-[#2D2D2D] hover:text-[#E86C00] transition-colors mb-2 line-clamp-2">
          {tx(product.name)}
        </Link>

        <div className="flex items-center gap-2 mb-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-[#6B7280]">(<Num>{product.reviewCount}</Num>)</span>
        </div>

        <div className="mb-2">
          {product.salePrice ? (
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#DC2626]"><Currency>{product.salePrice}</Currency></span>
              <span className="text-sm text-[#6B7280] line-through"><Currency>{product.price}</Currency></span>
            </div>
          ) : (
            <span className="font-bold text-[#2D2D2D]"><Currency>{product.price}</Currency></span>
          )}
        </div>

        <div className="mb-3">
          <StockBadge status={product.stockStatus} qty={product.stockQty} />
        </div>

        <button
          onClick={() => addItem(product.id)}
          disabled={product.stockStatus === "out-of-stock"}
          className="mt-auto w-full py-2 px-4 rounded-md text-sm font-medium transition-colors bg-[#E86C00] text-white hover:bg-[#C45800] disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <T>Add to Cart</T>
        </button>
      </div>
    </div>
  );
}
