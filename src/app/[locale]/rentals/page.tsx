"use client";

import { useState, useMemo } from "react";
import { T, Currency, Num, Plural, useGT } from "gt-next";
import { rentalEquipment } from "@/data/rentals";

function AvailabilityBadge({ status }: { status: string }) {
  if (status === "available") return <span className="text-xs font-medium text-[#16A34A] bg-green-50 px-2 py-1 rounded-full"><T>Available</T></span>;
  if (status === "reserved") return <span className="text-xs font-medium text-[#DC2626] bg-red-50 px-2 py-1 rounded-full"><T>Reserved</T></span>;
  return <span className="text-xs font-medium text-[#6B7280] bg-gray-100 px-2 py-1 rounded-full"><T>Under Maintenance</T></span>;
}

export default function RentalsPage() {
  const tx = useGT();
  const [catFilter, setCatFilter] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const categories = useMemo(() => [...new Set(rentalEquipment.map((e) => e.category))], []);

  const filtered = useMemo(() => {
    if (catFilter === "all") return rentalEquipment;
    return rentalEquipment.filter((e) => e.category === catFilter);
  }, [catFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <T>
        <h1 className="text-3xl font-bold text-[#2D2D2D] mb-2">Tool Rental</h1>
        <p className="text-[#6B7280] mb-8">Rent professional-grade equipment for your next project. Daily, weekly, and monthly rates available.</p>
      </T>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setCatFilter("all")}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${catFilter === "all" ? "bg-[#E86C00] text-white" : "bg-gray-100 text-[#6B7280] hover:bg-gray-200"}`}
        >
          <T>All Equipment</T>
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCatFilter(c)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${catFilter === c ? "bg-[#E86C00] text-white" : "bg-gray-100 text-[#6B7280] hover:bg-gray-200"}`}
          >
            {tx(c)}
          </button>
        ))}
      </div>

      <p className="text-sm text-[#6B7280] mb-4">
        <T>
          <Plural
            n={filtered.length}
            singular={<><Num>{filtered.length}</Num> item available</>}
            plural={<><Num>{filtered.length}</Num> items available</>}
          />
        </T>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((equip) => (
          <div key={equip.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            {/* Card header */}
            <div className="bg-gray-50 h-36 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#9CA3AF" strokeWidth="1.5">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
              </svg>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[#6B7280]">{tx(equip.category)}</span>
                <AvailabilityBadge status={equip.availability} />
              </div>

              <h3 className="font-bold text-[#2D2D2D] mb-2">{tx(equip.name)}</h3>
              <p className="text-sm text-[#6B7280] mb-4 line-clamp-2">{tx(equip.description)}</p>

              {/* Rates */}
              <div className="grid grid-cols-2 gap-2 text-center mb-4">
                <div className="bg-gray-50 rounded p-2">
                  <p className="text-xs text-[#6B7280]"><T>4 Hours</T></p>
                  <p className="font-bold text-sm text-[#2D2D2D]"><Currency>{equip.rates.fourHour}</Currency></p>
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <p className="text-xs text-[#6B7280]"><T>Daily</T></p>
                  <p className="font-bold text-sm text-[#2D2D2D]"><Currency>{equip.rates.daily}</Currency></p>
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <p className="text-xs text-[#6B7280]"><T>Weekly</T></p>
                  <p className="font-bold text-sm text-[#2D2D2D]"><Currency>{equip.rates.weekly}</Currency></p>
                </div>
                <div className="bg-gray-50 rounded p-2">
                  <p className="text-xs text-[#6B7280]"><T>Monthly</T></p>
                  <p className="font-bold text-sm text-[#2D2D2D]"><Currency>{equip.rates.monthly}</Currency></p>
                </div>
              </div>

              {/* Expand/collapse details */}
              <button
                onClick={() => setExpanded(expanded === equip.id ? null : equip.id)}
                className="w-full text-sm text-[#E86C00] font-medium hover:underline"
              >
                <T>{expanded === equip.id ? "Hide Details" : "View Details"}</T>
              </button>

              {expanded === equip.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <T><h4 className="text-sm font-semibold text-[#2D2D2D] mb-2">Specifications</h4></T>
                  <div className="space-y-1 text-sm mb-3">
                    {Object.entries(equip.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span className="text-[#6B7280]">{tx(k)}</span>
                        <span className="text-[#2D2D2D]">{v}</span>
                      </div>
                    ))}
                  </div>

                  {equip.includedAccessories.length > 0 && (
                    <>
                      <T><h4 className="text-sm font-semibold text-[#2D2D2D] mb-2">Included Accessories</h4></T>
                      <ul className="text-sm text-[#6B7280] list-disc list-inside mb-3">
                        {equip.includedAccessories.map((a) => (
                          <li key={a}>{tx(a)}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {equip.safetyNotes && (
                    <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r-md">
                      <p className="text-xs text-red-800"><T><span className="font-semibold">Safety:</span></T> {tx(equip.safetyNotes)}</p>
                    </div>
                  )}

                  <button
                    disabled={equip.availability !== "available"}
                    className="mt-4 w-full py-2 px-4 rounded-md text-sm font-medium bg-[#E86C00] text-white hover:bg-[#C45800] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    <T>Reserve Equipment</T>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
