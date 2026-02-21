"use client";

import { use } from "react";
import Link from "next/link";
import { T, Currency, Num, useGT } from "gt-next";
import { guides } from "@/data/guides";
import PaintCalculator from "@/components/PaintCalculator";

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors = {
    beginner: "bg-green-100 text-green-700",
    intermediate: "bg-amber-100 text-amber-700",
    advanced: "bg-red-100 text-red-700",
  };
  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colors[difficulty as keyof typeof colors] || "bg-gray-100"}`}>
      <T>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</T>
    </span>
  );
}

export default function GuideDetailPage({ params }: { params: Promise<{ guideId: string }> }) {
  const { guideId } = use(params);
  const tx = useGT();
  const guide = guides.find((g) => g.id === guideId);

  if (!guide) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <T><h1 className="text-2xl font-bold">Guide Not Found</h1></T>
      </div>
    );
  }

  const totalCost = guide.materials.reduce((sum, m) => sum + m.estimatedCost * m.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-[#6B7280] mb-6">
        <Link href="/guides" className="hover:text-[#E86C00]"><T>Project Guides</T></Link>
        <span className="mx-2">/</span>
        <span className="text-[#2D2D2D]">{tx(guide.title)}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <DifficultyBadge difficulty={guide.difficulty} />
          <span className="text-sm text-[#6B7280]">{tx(guide.category)}</span>
          <span className="text-sm text-gray-400"><T><Num>{guide.estimatedTime}</Num> hours</T></span>
        </div>
        <h1 className="text-3xl font-bold text-[#2D2D2D] mb-3">{tx(guide.title)}</h1>
        <p className="text-[#6B7280] leading-relaxed">{tx(guide.description)}</p>
      </div>

      {/* Materials */}
      <section className="mb-10">
        <T><h2 className="text-xl font-bold text-[#2D2D2D] mb-4">Materials Needed</h2></T>
        <div className="bg-[#FFF3E6] rounded-lg p-6">
          <div className="space-y-3">
            {guide.materials.map((m, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#2D2D2D] font-medium">
                    {m.productId ? (
                      <Link href={`/shop/${m.productId}`} className="text-[#E86C00] hover:underline">{m.name}</Link>
                    ) : m.name}
                  </span>
                  <span className="text-[#6B7280]">x<Num>{m.quantity}</Num> {m.unit}</span>
                </div>
                <span className="text-[#2D2D2D] font-medium"><Currency>{m.estimatedCost * m.quantity}</Currency></span>
              </div>
            ))}
          </div>
          <div className="border-t border-orange-200 mt-4 pt-4 flex justify-between font-bold text-[#2D2D2D]">
            <T><span>Estimated Total</span></T>
            <Currency>{totalCost}</Currency>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="mb-10">
        <T><h2 className="text-xl font-bold text-[#2D2D2D] mb-4">Tools Needed</h2></T>
        <div className="flex flex-wrap gap-2">
          {guide.tools.map((tool) => (
            <span key={tool} className="bg-gray-100 text-[#6B7280] text-sm px-3 py-1.5 rounded-full">
              {tx(tool)}
            </span>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="mb-10">
        <T><h2 className="text-xl font-bold text-[#2D2D2D] mb-6">Step-by-Step Instructions</h2></T>
        <div className="space-y-8">
          {guide.steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#E86C00] text-white rounded-full flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#2D2D2D] mb-2">{tx(step.title)}</h3>
                <p className="text-[#6B7280] leading-relaxed mb-3">{tx(step.instruction)}</p>
                {step.tip && (
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-md">
                    <p className="text-sm text-blue-800"><T><span className="font-semibold">Tip:</span></T> {tx(step.tip)}</p>
                  </div>
                )}
                {step.warning && (
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-md">
                    <p className="text-sm text-red-800"><T><span className="font-semibold">Warning:</span></T> {tx(step.warning)}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Paint Calculator */}
      {guide.calculatorType === "paint" && (
        <section className="mb-10">
          <PaintCalculator />
        </section>
      )}
    </div>
  );
}
