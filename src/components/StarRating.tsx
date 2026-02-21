import { getStarArray } from "@/lib/utils";

export default function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  const stars = getStarArray(rating);
  return (
    <div className="flex items-center gap-0.5">
      {stars.map((s, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={s === "empty" ? "none" : "#F59E0B"} stroke="#F59E0B" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}
