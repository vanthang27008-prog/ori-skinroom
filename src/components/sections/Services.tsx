import Image from "next/image";

const items = [
  {
    title: "Facial làm sạch sâu",
    desc: "Giảm bí tắc, làm sạch nhẹ, cân bằng dầu – nước cho da.",
    img: "/images/facial.jpg",
    tag: "Best seller",
  },
  {
    title: "Phục hồi da nhạy cảm",
    desc: "Dịu da, cấp ẩm, hỗ trợ hàng rào bảo vệ – phù hợp da yếu.",
    img: "/images/clinic.jpg",
    tag: "Repair",
  },
  {
    title: "Massage thư giãn",
    desc: "Thả lỏng, giảm căng cơ mặt – giúp ngủ ngon và dễ chịu hơn.",
    img: "/images/massage.jpg",
    tag: "Relax",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="h2">Dịch vụ nổi bật</h2>
          <p className="p-lead">
            Liệu trình tối ưu theo nhu cầu thật. Làm kỹ nhưng vẫn êm nhẹ.
          </p>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
        >
          Nhắn để tư vấn <span aria-hidden>→</span>
        </a>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {items.map((s) => (
          <div
            key={s.title}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white soft-shadow transition hover:-translate-y-0.5"
          >
            <div className="relative h-48">
              <Image src={s.img} alt={s.title} fill className="object-cover" />
              <div className="absolute left-4 top-4">
                <span className="glass inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700">
                  {s.tag}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                <div className="mt-1 h-8 w-8 rounded-full border border-slate-200 grid place-items-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition">
                  →
                </div>
              </div>

              <p className="mt-2 text-slate-600 leading-relaxed">{s.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Riêng tư", "Sạch sẽ", "Nhẹ tay"].map((b) => (
                  <span
                    key={b}
                    className="inline-flex rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-600"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <a
                href="#pricing"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline"
              >
                Xem bảng giá <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
