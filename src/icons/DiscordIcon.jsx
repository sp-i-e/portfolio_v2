export default function DiscordIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 24 24"
      className={className}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M9 3q-2.5.5-5 2q-3 5-3 12q2 2.5 6 4q1-1.5 1.5-3.5M7 17q5 2 10 0m-1.5.5q.5 2 1.5 3.5q4-1.5 6-4q0-7-3-12q-2.5-1.5-5-2l-1 2q-2-.5-4 0L9 3"></path>
        <circle cx={8} cy={12} r={1}></circle>
        <circle cx={16} cy={12} r={1}></circle>
      </g>
    </svg>
  );
}
