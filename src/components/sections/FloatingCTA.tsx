export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* ZALO */}
      <a
        href="https://zalo.me/0372831840" // 🔴 đổi số Zalo của bạn
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn Zalo"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/5 transition hover:scale-105"
      >
        {/* Pulse */}
        <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping" />

        <img
          src="/icons/zalo.svg"
          alt="Zalo"
          className="relative h-8 w-8"
        />

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-black px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
          Nhắn Zalo tư vấn
        </span>
      </a>

      {/* MESSENGER */}
      <a
        href="https://www.facebook.com/profile.php?id=61585265953776&locale=vi_VN" // 🔴 đổi username fanpage Facebook
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn Messenger"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/5 transition hover:scale-105"
      >
        {/* Pulse */}
        <span className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping" />

        <img
          src="/icons/messenger.png"
          alt="Messenger"
          className="relative h-8 w-8"
        />

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-black px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
          Nhắn Messenger
        </span>
      </a>
    </div>
  );
}
