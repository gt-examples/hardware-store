"use client";

import Link from "next/link";
import { T, LocaleSelector } from "gt-next";
import { useCart } from "@/lib/cart-context";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#E86C00] rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="white" stroke="white" strokeWidth="1">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <span className="font-bold text-lg text-[#2D2D2D] hidden sm:inline">
              <T>BuildRight Hardware</T>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#6B7280]">
            <Link href="/shop" className="hover:text-[#E86C00] transition-colors"><T>Shop</T></Link>
            <Link href="/guides" className="hover:text-[#E86C00] transition-colors"><T>Project Guides</T></Link>
            <Link href="/rentals" className="hover:text-[#E86C00] transition-colors"><T>Tool Rental</T></Link>
          </nav>

          <div className="flex items-center gap-3">
            <LocaleSelector />
            <a
              href="https://github.com/gt-examples/hardware-store"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] hover:text-[#2D2D2D] transition-colors"
            >
              <GitHubIcon />
            </a>
            <Link href="/cart" className="relative text-[#6B7280] hover:text-[#E86C00] transition-colors">
              <CartIcon />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E86C00] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-gray-100">
        <div className="flex justify-around py-2 text-xs font-medium text-[#6B7280]">
          <Link href="/shop" className="hover:text-[#E86C00]"><T>Shop</T></Link>
          <Link href="/guides" className="hover:text-[#E86C00]"><T>Guides</T></Link>
          <Link href="/rentals" className="hover:text-[#E86C00]"><T>Rentals</T></Link>
        </div>
      </div>
    </header>
  );
}
