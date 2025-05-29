export default function LinkedinIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <circle cx="4" cy="4" r="2" fill="currentColor" fillOpacity="0">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="4s"
          values="0;10;0"
          repeatCount="indefinite"
        />
      </circle>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path strokeDasharray="12" strokeDashoffset="12" d="M4 10v10">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.15s"
            dur="0.2s"
            values="12;0"
          />
        </path>
        <path strokeDasharray="12" strokeDashoffset="12" d="M10 10v10">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.45s"
            dur="0.2s"
            values="12;0"
          />
        </path>
        <path
          strokeDasharray="24"
          strokeDashoffset="24"
          d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.65s"
            dur="0.2s"
            values="24;0"
          />
        </path>
      </g>
    </svg>
  );
}
