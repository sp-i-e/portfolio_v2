export default function ThemeSwitcher() {
  return (
    <label className="swap swap-rotate w-full h-full">
      <input type="checkbox" className="theme-controller" value="garden" />
      {/* moon icon */}
      <svg
        className="swap-off h-9 w-9 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeDasharray="4"
          strokeDashoffset="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        >
          <path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
            <animate
              id="lineMdMoonAltLoop0"
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.7s;lineMdMoonAltLoop0.begin+6s"
              dur="0.4s"
              values="4;0"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="lineMdMoonAltLoop0.begin+2s;lineMdMoonAltLoop0.begin+4s"
              dur="0.4s"
              values="4;0"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="lineMdMoonAltLoop0.begin+1.2s;lineMdMoonAltLoop0.begin+3.2s;lineMdMoonAltLoop0.begin+5.2s"
              dur="0.4s"
              values="0;4"
            />
            <set
              fill="freeze"
              attributeName="d"
              begin="lineMdMoonAltLoop0.begin+1.8s"
              to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"
            />
            <set
              fill="freeze"
              attributeName="d"
              begin="lineMdMoonAltLoop0.begin+3.8s"
              to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"
            />
            <set
              fill="freeze"
              attributeName="d"
              begin="lineMdMoonAltLoop0.begin+5.8s"
              to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"
            />
          </path>
          <path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
            <animate
              id="lineMdMoonAltLoop1"
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="1.1s;lineMdMoonAltLoop1.begin+6s"
              dur="0.4s"
              values="4;0"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="lineMdMoonAltLoop1.begin+2s;lineMdMoonAltLoop1.begin+4s"
              dur="0.4s"
              values="4;0"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="lineMdMoonAltLoop1.begin+1.2s;lineMdMoonAltLoop1.begin+3.2s;lineMdMoonAltLoop1.begin+5.2s"
              dur="0.4s"
              values="0;4"
            />
            <set
              fill="freeze"
              attributeName="d"
              begin="lineMdMoonAltLoop1.begin+1.8s"
              to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"
            />
            <set
              fill="freeze"
              attributeName="d"
              begin="lineMdMoonAltLoop1.begin+3.8s"
              to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"
            />
            <set
              fill="freeze"
              attributeName="d"
              begin="lineMdMoonAltLoop1.begin+5.8s"
              to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"
            />
          </path>
          <path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
            <animate
              id="lineMdMoonAltLoop2"
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="2s;lineMdMoonAltLoop2.begin+6s"
              dur="0.4s"
              values="4;0"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="lineMdMoonAltLoop2.begin+2s"
              dur="0.4s"
              values="4;0"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="lineMdMoonAltLoop2.begin+1.2s;lineMdMoonAltLoop2.begin+3.2s"
              dur="0.4s"
              values="0;4"
            />
            <set
              fill="freeze"
              attributeName="d"
              begin="lineMdMoonAltLoop2.begin+1.8s"
              to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"
            />
            <set
              fill="freeze"
              attributeName="d"
              begin="lineMdMoonAltLoop2.begin+5.8s"
              to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"
            />
          </path>
        </g>
        <path
          fill="none"
          stroke="currentColor"
          strokeDasharray="56"
          strokeDashoffset="56"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="56;0"
          />
        </path>
      </svg>
      {/* sun icon */}
      {/* <svg
        className="swap-on h-6 w-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg> */}
      <svg
        className="swap-on h-9 w-9 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <circle cx="12" cy="32" r="6">
            <animate
              fill="freeze"
              attributeName="cy"
              dur="0.6s"
              values="32;12"
            />
          </circle>
          <g>
            <path
              strokeDasharray="2"
              strokeDashoffset="2"
              d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
            >
              <animate
                fill="freeze"
                attributeName="d"
                begin="0.7s"
                dur="0.2s"
                values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
              />
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.7s"
                dur="0.2s"
                values="2;0"
              />
            </path>
            <path
              strokeDasharray="2"
              strokeDashoffset="2"
              d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
            >
              <animate
                fill="freeze"
                attributeName="d"
                begin="0.9s"
                dur="0.2s"
                values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
              />
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.9s"
                dur="0.2s"
                values="2;0"
              />
            </path>
            <animateTransform
              attributeName="transform"
              dur="30s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </g>
        </g>
      </svg>
    </label>
  );
}
