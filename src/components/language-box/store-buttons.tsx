"use client";

import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/data";

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
    </svg>
  );
}

function GooglePlayLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.609 1.814L13.792 12.027L3.61 22.186C3.471 22.076 3.384 21.907 3.384 21.713V2.287C3.384 2.093 3.471 1.924 3.609 1.814Z"
        fill="#2196F3"
      />
      <path
        d="M17.092 8.65L14.073 11.673L13.792 11.392V12.027V12.662L14.073 12.381L17.092 15.404L17.331 15.266L20.923 13.187C21.792 12.678 21.792 11.376 20.923 10.867L17.331 8.788L17.092 8.65Z"
        fill="#FFC107"
      />
      <path
        d="M13.792 12.027L3.609 22.186C3.703 22.263 3.827 22.31 3.967 22.31C4.186 22.31 4.354 22.213 4.517 22.119L14.073 12.381L13.792 12.027Z"
        fill="#0C9D58"
      />
      <path
        d="M3.967 1.744C3.827 1.744 3.703 1.791 3.609 1.868L13.792 12.027L14.073 11.673L4.517 1.935C4.354 1.841 4.186 1.744 3.967 1.744Z"
        fill="#F44336"
      />
      <path
        d="M17.092 8.65L4.517 1.935C4.354 1.841 4.186 1.744 3.967 1.744C3.827 1.744 3.703 1.791 3.609 1.868L13.792 12.027L3.609 22.186C3.703 22.263 3.827 22.31 3.967 22.31C4.186 22.31 4.354 22.213 4.517 22.119L17.092 15.404L14.073 12.381L13.792 12.662V12.027V11.392L14.073 11.673L17.092 8.65Z"
        fill="url(#paint0_linear)"
        opacity="0.2"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="13.792"
          y1="12.027"
          x2="13.792"
          y2="12.027"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function StoreButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      {/* App Store Button */}
      <a
        href={APP_STORE_URL || undefined}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#000000] border border-[#424242] hover:border-[#6e6e6e] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/5"
      >
        <AppleLogo className="h-7 w-7 text-white shrink-0" />
        <div className="flex flex-col leading-none">
          <span className="text-[10px] font-normal text-white/70 uppercase tracking-wide">
            Download on the
          </span>
          <span className="text-base font-semibold text-white -mt-0.5">
            App Store
          </span>
        </div>
      </a>

      {/* Google Play Button */}
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#000000] border border-[#424242] hover:border-[#6e6e6e] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/5"
      >
        <GooglePlayLogo className="h-7 w-7 shrink-0" />
        <div className="flex flex-col leading-none">
          <span className="text-[10px] font-normal text-white/70 uppercase tracking-wide">
            GET IT ON
          </span>
          <span className="text-base font-semibold text-white -mt-0.5">
            Google Play
          </span>
        </div>
      </a>
    </div>
  );
}
