export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Top */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-slate-900 text-white grid place-items-center font-semibold soft-shadow text-2xl">
              O
            </div>
            <div className="text-2xl font-semibold tracking-tight">
              Ori Skinroom
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center gap-8 text-lg font-semibold text-slate-700">
            <a className="hover:text-slate-900" href="#services">
              Dịch vụ
            </a>
            <a className="hover:text-slate-900" href="#pricing">
              Bảng giá
            </a>
            <a className="hover:text-slate-900" href="#gallery">
              Hình ảnh
            </a>
            <a className="hover:text-slate-900" href="#contact">
              Liên hệ
            </a>
          </nav>

          {/* CTA */}
          <a
            href="https://zalo.me/0901234567" // 🔴 đổi số Zalo
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-base font-semibold text-white hover:bg-slate-800 transition soft-shadow"
          >
            Đặt lịch Zalo
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-t border-slate-200/70 pt-6">
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Ori Skinroom
          </div>

          <div className="text-sm text-slate-500">
            09:00 – 20:00 • 62 Trần Đăng Ninh, Mỹ Xuân, Tân Thành, Bà Rịa - Vũng Tàu, Việt Nam
          </div>
        </div>
      </div>
    </footer>
  );
}
