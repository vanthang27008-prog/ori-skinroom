const plans = [
  { name: "Cơ bản", price: "299k", list: ["Làm sạch + cân bằng", "Đắp mask", "Tư vấn 1:1"] },
  { name: "Phục hồi", price: "499k", list: ["Làm sạch dịu nhẹ", "Serum phục hồi", "Massage thư giãn"] },
  { name: "Chuyên sâu", price: "699k", list: ["Chăm sóc chuyên sâu", "Tập trung vấn đề da", "Theo dõi routine"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold">Bảng giá tham khảo</h2>
      <p className="mt-2 text-slate-600">
        Giá có thể thay đổi theo tình trạng da. Nhắn để được tư vấn đúng gói.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {plans.map((p, idx) => (
          <div
            key={p.name}
            className={`rounded-3xl border p-6 bg-white ${idx === 1 ? "ring-1 ring-slate-900/10 shadow-sm" : ""}`}
          >
            <div className="flex items-baseline justify-between">
              <div className="text-lg font-semibold">{p.name}</div>
              <div className="text-2xl font-semibold">{p.price}</div>
            </div>
            <ul className="mt-4 space-y-2 text-slate-600 text-sm">
              {p.list.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex w-full justify-center rounded-full bg-slate-900 px-5 py-3 text-white text-sm hover:bg-slate-800"
            >
              Chọn gói này
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
