export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-5 md:py-6 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-slate-900 text-white grid place-items-center font-semibold soft-shadow text-2xl">
              O
            </div>
            <div className="text-2xl md:text-3xl font-semibold tracking-tight">
              Ori Skinroom
            </div>
          </a>

          {/* Nav - TO + ĐẸP */}
          <nav className="hidden lg:flex items-center gap-10">
            {[
              { href: "#services", label: "Dịch vụ" },
              { href: "#pricing", label: "Bảng giá" },
              { href: "#gallery", label: "Hình ảnh" },
              { href: "#contact", label: "Liên hệ" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  relative text-lg font-semibold tracking-wide text-slate-800
                  transition hover:text-slate-900
                  after:absolute after:-bottom-2 after:left-0
                  after:h-[2px] after:w-0 after:bg-slate-900
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-base font-medium text-slate-800 hover:bg-white transition glass"
            >
              Nhận tư vấn
            </a>

            <a
              href="https://zalo.me/0901234567" // 🔴 đổi số Zalo của bạn
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-base font-semibold text-white hover:bg-slate-800 transition soft-shadow"
            >
              Đặt lịch ngay
            </a>
          </div>
        </div>

        {/* Mobile quick links - TO HƠN */}
        <div className="lg:hidden">
          <div className="mx-auto max-w-6xl px-6 pb-5 flex gap-3 overflow-x-auto">
            {[
              { href: "#services", label: "Dịch vụ" },
              { href: "#pricing", label: "Bảng giá" },
              { href: "#gallery", label: "Hình ảnh" },
              { href: "#contact", label: "Liên hệ" },
            ].map((x) => (
              <a
                key={x.href}
                href={x.href}
                className="
                  shrink-0 rounded-full border border-slate-200
                  bg-white/70 px-6 py-3
                  text-base font-medium text-slate-800
                  hover:bg-white transition glass
                "
              >
                {x.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
