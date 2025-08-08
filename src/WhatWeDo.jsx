export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="text-center px-6">
        {/* Logo or Icon */}
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/"
            className="w-16 h-16 text-yellow-400 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold sm:text-5xl mb-3">Coming Soon 🚀</h1>

        {/* Subheading */}
        <p className="text-gray-300 max-w-md mx-auto mb-8">
          Working hard to bring something amazing into existence, I just need
          you word.
        </p>

        {/* Countdown (Optional) */}
        <div className="flex justify-center gap-4 mb-8">
          {[
            { label: "Days", value: "12" },
            { label: "Hours", value: "06" },
            { label: "Minutes", value: "45" },
            { label: "Seconds", value: "09" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-gray-800 px-4 py-2 rounded-lg shadow-lg"
            >
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-xs text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
