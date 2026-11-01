export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="berry" viewBox="0 0 100 110">
        <path
          d="M50 102C20 92 6 62 13 42c6-15 27-12 37-8 10-4 31-7 37 8 7 20-7 50-37 60z"
          fill="var(--bf,#c8202f)"
          stroke="var(--st,#3b231c)"
          strokeWidth="5"
        />
        <path
          d="M50 36 36 14l12 9 2-17 4 17 12-9z"
          fill="var(--lf,#5c9a46)"
          stroke="var(--st,#3b231c)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <g fill="var(--sd,#fff)">
          <ellipse cx="32" cy="52" rx="3" ry="4.5" />
          <ellipse cx="50" cy="48" rx="3" ry="4.5" />
          <ellipse cx="68" cy="52" rx="3" ry="4.5" />
          <ellipse cx="40" cy="70" rx="3" ry="4.5" />
          <ellipse cx="60" cy="70" rx="3" ry="4.5" />
          <ellipse cx="50" cy="88" rx="3" ry="4.5" />
        </g>
      </symbol>
      <symbol id="cone" viewBox="0 0 80 120">
        <path
          d="M14 62 66 62 40 116Z"
          fill="var(--wf,#4a2a1f)"
          stroke="var(--st,#3b231c)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M26 74 48 70M30 86 44 82M34 98 42 95" stroke="#fff8" strokeWidth="2.5" strokeLinecap="round" />
        <path
          d="M14 62Q8 50 24 46Q16 36 30 32Q28 20 40 8Q52 20 50 32Q64 36 56 46Q72 50 66 62Z"
          fill="var(--sw,#e8899f)"
          stroke="var(--st,#3b231c)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="star" viewBox="0 0 100 100">
        <path
          d="M50 6l13 29 31 3-23 21 7 31-28-16-28 16 7-31L6 38l31-3z"
          fill="var(--sf,#f5c043)"
          stroke="var(--st,#3b231c)"
          strokeWidth="6"
          strokeLinejoin="round"
        />
      </symbol>
    </svg>
  );
}