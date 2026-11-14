export default function RootLoading() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary, #f0f7ff)",
        color: "var(--text-main, #0c2340)",
      }}
    >
      {/* Background Soft Glow */}
      <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-sky-400/15 via-emerald-400/10 to-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* Modern Frosted Glass Loading Card */}
      <div
        className="relative z-10 flex flex-col items-center justify-center p-8 sm:p-10 rounded-3xl border shadow-2xl backdrop-blur-xl max-w-sm w-full mx-4 text-center"
        style={{
          backgroundColor: "var(--bg-glass, rgba(255, 255, 255, 0.85))",
          borderColor: "var(--border-subtle, rgba(2, 132, 199, 0.16))",
        }}
      >
        {/* Animated Double-Ring Spinner */}
        <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-sky-400/20" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-sky-500 border-r-emerald-400 animate-spin" />
          <div
            className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md animate-pulse"
          >
            W
          </div>
        </div>

        {/* Text Details */}
        <h3
          className="text-lg font-bold tracking-tight mb-2"
          style={{ color: "var(--text-main, #0c2340)" }}
        >
          Wixtory Ekosistemi
        </h3>
        <p
          className="text-xs sm:text-sm font-medium opacity-70 mb-5 leading-relaxed"
          style={{ color: "var(--text-secondary, #33557a)" }}
        >
          Sayfa ve bileşenler hazırlanıyor...
        </p>

        {/* Shimmering Progress Bar Placeholder */}
        <div className="w-full h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-gradient-to-r from-sky-500 via-teal-400 to-indigo-500 rounded-full animate-[shimmer_1.5s_infinite]" />
        </div>
      </div>
    </div>
  );
}

