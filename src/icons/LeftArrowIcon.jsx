export default function LeftArrowIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M31 36L19 24l12-12"
      >
        <animate
          attributeName="d"
          dur="1.9s"
          repeatCount="indefinite"
          values="M31 36L19 24l12-12; M25 36L13 24l12-12; M31 36L19 24l12-12"
        />
      </path>
    </svg>
  );
}
