import { T, Num } from "gt-next";

export default function StockBadge({ status, qty }: { status: "in-stock" | "low-stock" | "out-of-stock"; qty: number }) {
  if (status === "in-stock") {
    return <span className="text-xs font-medium text-[#16A34A]"><T>In Stock</T></span>;
  }
  if (status === "low-stock") {
    return (
      <span className="text-xs font-medium text-[#D97706]">
        <T>Only <Num>{qty}</Num> left!</T>
      </span>
    );
  }
  return <span className="text-xs font-medium text-[#DC2626]"><T>Out of Stock</T></span>;
}
