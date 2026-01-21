import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft premium background */}
      <div className="absolute inset-0 bg-soft" />
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/70 blur-2xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/60 blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-10 md:pt-16 md:pb-14">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 glass">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Đặt lịch nhanh • tư vấn 1:1 • riêng tư
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Spa chăm sóc da hiện đại, vibe nhẹ nhàng, làm kỹ từng bước.
            </h1>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Ori Skinroom tập trung trải nghiệm sạch sẽ, thư giãn và tối ưu theo tình trạng da.
              Phù hợp da nhạy cảm, da yếu cần phục hồi, và cả những ngày bạn muốn “reset” tinh thần.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-slate-900 px-6 py-3 text-white text-sm hover:bg-slate-800 transition"
              >
                Đặt lịch ngay
              </a>
              <a
                href="#services"
                className="rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-sm hover:bg-white transition glass"
              >
                Xem dịch vụ
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { k: "45–90p", v: "Liệu trình" },
                { k: "Sạch sâu", v: "Facial" },
                { k: "Êm nhẹ", v: "Phục hồi" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-center glass"
                >
                  <div className="text-lg font-semibold">{x.k}</div>
                  <div className="mt-1 text-xs text-slate-500">{x.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-white/60 blur-xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <div className="relative h-[380px] md:h-[520px]">
                <Image
                  src="/images/hero-spa.png"
                  alt="Không gian spa"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* floating card */}
              <div className="absolute left-4 bottom-4 right-4">
                <div className="glass rounded-2xl border border-slate-200 p-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-slate-500">Giờ mở cửa</div>
                    <div className="font-semibold">09:00 – 20:00 (T2–CN)</div>
                  </div>
                  <a
                    href="#contact"
                    className="shrink-0 rounded-full bg-slate-900 px-4 py-2 text-white text-xs hover:bg-slate-800 transition"
                  >
                    Nhắn để đặt lịch
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              *Hình ảnh minh hoạ — bạn thay ảnh thật của spa để tăng độ tin cậy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
