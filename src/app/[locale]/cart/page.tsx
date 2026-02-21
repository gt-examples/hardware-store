"use client";

import { useState } from "react";
import Link from "next/link";
import { T, Currency, Num, Plural } from "gt-next";
import { products } from "@/data/products";
import { useCart } from "@/lib/cart-context";

const TAX_RATE = 0.085;

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, totalItems } = useCart();
  const [ordered, setOrdered] = useState(false);

  const cartProducts = items.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...item, product };
  }).filter((i) => i.product);

  const subtotal = cartProducts.reduce((sum, i) => {
    const price = i.product!.salePrice || i.product!.price;
    return sum + price * i.quantity;
  }, 0);

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  if (ordered) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <T>
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#16A34A" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <h1 className="text-2xl font-bold text-[#2D2D2D] mb-2">Order Confirmed!</h1>
            <p className="text-[#6B7280] mb-1">Order #BRH-{Math.floor(Math.random() * 90000 + 10000)}</p>
            <p className="text-[#6B7280] mb-6">Thank you for your order. Your items will be ready for pickup.</p>
          </div>
        </T>
        <Link href="/shop" className="inline-block mt-6 bg-[#E86C00] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#C45800]">
          <T>Continue Shopping</T>
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <T>
          <h1 className="text-2xl font-bold text-[#2D2D2D] mb-4">Your Cart is Empty</h1>
          <p className="text-[#6B7280] mb-6">Looks like you have not added any items to your cart yet.</p>
        </T>
        <Link href="/shop" className="inline-block bg-[#E86C00] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#C45800]">
          <T>Start Shopping</T>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <T>
        <h1 className="text-3xl font-bold text-[#2D2D2D] mb-2">Shopping Cart</h1>
        <p className="text-[#6B7280] mb-8">
          <Plural n={totalItems} singular={<><Num>{totalItems}</Num> item</>} plural={<><Num>{totalItems}</Num> items</>} />
        </p>
      </T>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-4">
          {cartProducts.map((item) => {
            const product = item.product!;
            const price = product.salePrice || product.price;
            return (
              <div key={item.productId} className="flex gap-4 border border-gray-200 rounded-lg p-4">
                <div className="w-20 h-20 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl opacity-30">
                    {product.departmentId === "tools" ? "\u{1F527}" : product.departmentId === "lumber" ? "\u{1FAB5}" : product.departmentId === "plumbing" ? "\u{1F4A7}" : product.departmentId === "electrical" ? "\u{26A1}" : product.departmentId === "paint" ? "\u{1F3A8}" : "\u{1F529}"}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={`/shop/${product.id}`} className="font-medium text-sm text-[#2D2D2D] hover:text-[#E86C00]">{product.name}</Link>
                  <p className="text-xs text-[#6B7280] mt-0.5">{product.brand}</p>
                  <p className="font-bold text-sm mt-1"><Currency>{price}</Currency></p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button onClick={() => updateQuantity(product.id, item.quantity - 1)} className="px-2 py-1 text-sm text-[#6B7280] hover:bg-gray-100">-</button>
                    <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(product.id, item.quantity + 1)} className="px-2 py-1 text-sm text-[#6B7280] hover:bg-gray-100">+</button>
                  </div>
                  <p className="font-bold text-sm"><Currency>{price * item.quantity}</Currency></p>
                  <button onClick={() => removeItem(product.id)} className="text-xs text-[#DC2626] hover:underline"><T>Remove</T></button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="bg-[#F3F4F6] rounded-lg p-6 h-fit">
          <T><h2 className="text-lg font-bold text-[#2D2D2D] mb-4">Order Summary</h2></T>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <T><span className="text-[#6B7280]">Subtotal</span></T>
              <span className="font-medium"><Currency>{subtotal}</Currency></span>
            </div>
            <div className="flex justify-between">
              <T><span className="text-[#6B7280]">Tax (8.5%)</span></T>
              <span className="font-medium"><Currency>{tax}</Currency></span>
            </div>
            <div className="border-t border-gray-300 pt-3 flex justify-between text-base font-bold">
              <T><span>Total</span></T>
              <Currency>{total}</Currency>
            </div>
          </div>

          <button
            onClick={() => { setOrdered(true); clearCart(); }}
            className="mt-6 w-full py-3 bg-[#E86C00] text-white font-semibold rounded-lg hover:bg-[#C45800] transition-colors"
          >
            <T>Place Order</T>
          </button>

          <Link href="/shop" className="block text-center mt-3 text-sm text-[#E86C00] hover:underline">
            <T>Continue Shopping</T>
          </Link>
        </div>
      </div>
    </div>
  );
}
