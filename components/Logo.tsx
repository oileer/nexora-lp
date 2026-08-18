export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nexoraGrad" x1="8" y1="56" x2="56" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1D6FF2" />
          <stop offset="1" stopColor="#3B9EFF" />
        </linearGradient>
      </defs>
      {/* "N" estilizado em ziguezague */}
      <path
        d="M18 52 L18 22 L30 40 L30 12 L38 12 L38 42 L26 24 L26 52 Z"
        fill="url(#nexoraGrad)"
      />
      <path
        d="M40 10 L48 10 L48 40 L40 40 Z"
        fill="url(#nexoraGrad)"
        opacity="0.9"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoMark />
      <span className="text-lg font-semibold tracking-tight text-white">
        Nexora<span className="align-super text-[9px] text-slate-500">™</span>
      </span>
    </div>
  );
}
