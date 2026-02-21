"use client";

import { useState } from "react";
import { T, Num, Currency } from "gt-next";

const COVERAGE_SQFT = 350;
const DOOR_SQFT = 21;
const WINDOW_SQFT = 15;
const PRICE_PER_GALLON = 34.98;

// Conversion factors
const SQFT_TO_SQM = 0.0929;
const FT_TO_M = 0.3048;
const GAL_TO_L = 3.785;

export default function PaintCalculator() {
  const [unit, setUnit] = useState<"imperial" | "metric">("imperial");
  const [length, setLength] = useState(12);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(8);
  const [doors, setDoors] = useState(1);
  const [windows, setWindows] = useState(2);
  const [coats, setCoats] = useState(2);

  // Convert inputs to feet for calculation
  const lengthFt = unit === "metric" ? length / FT_TO_M : length;
  const widthFt = unit === "metric" ? width / FT_TO_M : width;
  const heightFt = unit === "metric" ? height / FT_TO_M : height;

  const totalWallArea = 2 * (lengthFt + widthFt) * heightFt;
  const paintableArea = totalWallArea - doors * DOOR_SQFT - windows * WINDOW_SQFT;
  const gallonsNeeded = Math.ceil((paintableArea * coats) / COVERAGE_SQFT);
  const estimatedCost = gallonsNeeded * PRICE_PER_GALLON;

  // Display values
  const displayArea = unit === "metric" ? paintableArea * SQFT_TO_SQM : paintableArea;
  const displayVolume = unit === "metric" ? gallonsNeeded * GAL_TO_L : gallonsNeeded;

  return (
    <div className="bg-[#FFF3E6] border-2 border-[#E86C00] rounded-lg p-6">
      <T><h2 className="text-xl font-bold text-[#2D2D2D] mb-2">Paint Calculator</h2></T>
      <T><p className="text-sm text-[#6B7280] mb-6">Calculate how much paint you need for your room.</p></T>

      {/* Unit toggle */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setUnit("imperial")}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${unit === "imperial" ? "bg-[#E86C00] text-white" : "bg-white text-[#6B7280] border border-gray-300"}`}
        >
          <T>Imperial (ft)</T>
        </button>
        <button
          onClick={() => setUnit("metric")}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${unit === "metric" ? "bg-[#E86C00] text-white" : "bg-white text-[#6B7280] border border-gray-300"}`}
        >
          <T>Metric (m)</T>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[#2D2D2D] mb-1">
            <T>Room Length ({unit === "imperial" ? "ft" : "m"})</T>
          </label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            min={1}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#E86C00] focus:border-[#E86C00]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2D2D2D] mb-1">
            <T>Room Width ({unit === "imperial" ? "ft" : "m"})</T>
          </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            min={1}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#E86C00] focus:border-[#E86C00]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2D2D2D] mb-1">
            <T>Ceiling Height ({unit === "imperial" ? "ft" : "m"})</T>
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            min={1}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-[#E86C00] focus:border-[#E86C00]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[#2D2D2D] mb-1"><T>Doors</T></label>
          <input type="number" value={doors} onChange={(e) => setDoors(Number(e.target.value))} min={0} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2D2D2D] mb-1"><T>Windows</T></label>
          <input type="number" value={windows} onChange={(e) => setWindows(Number(e.target.value))} min={0} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2D2D2D] mb-1"><T>Coats</T></label>
          <select value={coats} onChange={(e) => setCoats(Number(e.target.value))} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-lg p-4 border border-orange-200">
        <T><h3 className="font-bold text-[#2D2D2D] mb-3">Results</h3></T>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-[#E86C00]">
              <Num>{Math.round(displayArea)}</Num> {unit === "imperial" ? "sq ft" : "sq m"}
            </p>
            <T><p className="text-xs text-[#6B7280] mt-1">Paintable Area</p></T>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#E86C00]">
              <Num>{unit === "metric" ? Math.round(displayVolume * 10) / 10 : gallonsNeeded}</Num> {unit === "imperial" ? "gal" : "L"}
            </p>
            <T><p className="text-xs text-[#6B7280] mt-1">Paint Needed</p></T>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#E86C00]"><Currency>{estimatedCost}</Currency></p>
            <T><p className="text-xs text-[#6B7280] mt-1">Estimated Cost</p></T>
          </div>
        </div>
      </div>
    </div>
  );
}
