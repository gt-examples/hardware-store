"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { T, Num, Plural } from "gt-next";
import { guides } from "@/data/guides";

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

export default function GuidesPage() {
  const [diffFilter, setDiffFilter] = useState<string>("all");
  const [catFilter, setCatFilter] = useState<string>("all");

  const categories = useMemo(() => [...new Set(guides.map((g) => g.category))], []);

  const filtered = useMemo(() => {
    let result = guides;
    if (diffFilter !== "all") result = result.filter((g) => g.difficulty === diffFilter);
    if (catFilter !== "all") result = result.filter((g) => g.category === catFilter);
    return result;
  }, [diffFilter, catFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <T>
        <h1 className="text-3xl font-bold text-[#2D2D2D] mb-2">Project Guides</h1>
        <p className="text-[#6B7280] mb-8">Step-by-step instructions for your next DIY project, from beginner to advanced.</p>
      </T>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2">
          <T><span className="text-sm font-medium text-[#2D2D2D]">Difficulty:</span></T>
          {["all", "beginner", "intermediate", "advanced"].map((d) => (
            <button
              key={d}
              onClick={() => setDiffFilter(d)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${diffFilter === d ? "bg-[#E86C00] text-white" : "bg-gray-100 text-[#6B7280] hover:bg-gray-200"}`}
            >
              <T>{d === "all" ? "All" : d.charAt(0).toUpperCase() + d.slice(1)}</T>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <T><span className="text-sm font-medium text-[#2D2D2D]">Category:</span></T>
          <button
            onClick={() => setCatFilter("all")}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${catFilter === "all" ? "bg-[#E86C00] text-white" : "bg-gray-100 text-[#6B7280] hover:bg-gray-200"}`}
          >
            <T>All</T>
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCatFilter(c)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${catFilter === c ? "bg-[#E86C00] text-white" : "bg-gray-100 text-[#6B7280] hover:bg-gray-200"}`}
            >
              <T>{c}</T>
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-[#6B7280] mb-4">
        <T>
          <Plural
            n={filtered.length}
            singular={<><Num>{filtered.length}</Num> guide</>}
            plural={<><Num>{filtered.length}</Num> guides</>}
          />
        </T>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((guide) => (
          <Link
            key={guide.id}
            href={`/guides/${guide.id}`}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center gap-2 mb-3">
              <DifficultyBadge difficulty={guide.difficulty} />
              <span className="text-xs text-[#6B7280]"><T>{guide.category}</T></span>
            </div>
            <T><h3 className="text-lg font-bold text-[#2D2D2D] group-hover:text-[#E86C00] transition-colors mb-2">{guide.title}</h3></T>
            <T><p className="text-sm text-[#6B7280] line-clamp-2 mb-4">{guide.description}</p></T>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span><T><Num>{guide.estimatedTime}</Num> hours</T></span>
              <span><T><Num>{guide.steps.length}</Num> steps</T></span>
              <span><T><Num>{guide.materials.length}</Num> materials</T></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
