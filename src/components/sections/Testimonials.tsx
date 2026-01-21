const reviews = [
  {
    name: "Khách hàng nữ, 28 tuổi",
    service: "Facial làm sạch sâu",
    text: "Kỹ thuật nhẹ tay, không gian yên tĩnh. Da dịu rõ sau buổi đầu.",
    stars: 5,
  },
  {
    name: "Khách văn phòng",
    service: "Phục hồi da nhạy cảm",
    text: "Tư vấn rõ ràng, không chèo kéo. Trải nghiệm rất dễ chịu.",
    stars: 5,
  },
  {
    name: "Khách quen",
    service: "Massage thư giãn",
    text: "Không gian sạch, riêng tư. Sau buổi massage ngủ ngon hơn.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      {/* Heading */}
      <div className="max-w-2xl">
        <h2 className="h2">Khách nói gì</h2>
        <p className="p-lead">
          Đánh giá từ khách hàng đã trải nghiệm dịch vụ tại Ori Skinroom.
        </p>
      </div>

      {/* Reviews */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="rounded-3xl border border-slate-200 bg-white p-6 soft-shadow"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: r.stars }).map((_, idx) => (
                <span key={idx}>★</span>
              ))}
            </div>

            {/* Text */}
            <p className="mt-4 text-slate-700 leading-relaxed">
              “{r.text}”
            </p>

            {/* Divider */}
            <div className="my-5 h-px bg-slate-100" />

            {/* Meta */}
            <div className="space-y-1">
              <div className="font-semibold text-slate-900 text-sm">
                {r.name}
              </div>
              <div className="text-xs text-slate-500">
                {r.service}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
