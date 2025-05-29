export default function TerminalAnimation({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={className}
    >
      <rect
        x="20"
        y="40"
        width="160"
        height="120"
        rx="10"
        stroke="currentColor"
        strokeWidth="4"
        className="fill-base-100"
      >
        <animate
          attributeName="opacity"
          values="1;0.95;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>

      <path d="M55 100 L75 90 L75 110 Z" fill="currentColor">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 2 0; 0 0"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>

      <rect x="85" y="92" width="10" height="15" fill="currentColor">
        <animate
          attributeName="opacity"
          values="1;0;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>

      <circle cx="115" cy="100" r="3" fill="currentColor">
        <animate
          attributeName="r"
          values="3;2;3"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="130" cy="100" r="3" fill="currentColor">
        <animate
          attributeName="r"
          values="3;2;3"
          dur="1.2s"
          begin="0.3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="145" cy="100" r="3" fill="currentColor">
        <animate
          attributeName="r"
          values="3;2;3"
          dur="1.2s"
          begin="0.6s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
