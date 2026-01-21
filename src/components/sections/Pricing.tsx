const zaloLink = "https://zalo.me/0372831840";

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      {/* Heading */}
      <div className="max-w-3xl">
        <h2 className="h2">Bảng giá dịch vụ</h2>
        <p className="p-lead">
          Gợi ý liệu trình theo tình trạng da. Không upsale – không ép mua gói.
        </p>
      </div>

     <div className="mt-10 grid gap-8 md:grid-cols-2">
        {/* GROUP 1 */}
        <Group
          title="Nặn mụn & làm sạch da"
          note="Phù hợp da mụn, da dầu, da bít tắc. Làm nhẹ tay, không giới hạn thời gian."
          items={[
            { name: "Nặn mụn cơ bản", price: "199k" },
            { name: "Nặn mụn + phục hồi", price: "270k" },
            { name: "⭐ Nặn mụn kháng khuẩn chuyên sâu", price: "350k", best: true },
            { name: "Nặn mụn + Detox CO2", price: "390k" },
          ]}
        />

        {/* GROUP 2 */}
        <Group
          title="Chăm sóc da & thư giãn"
          note="Dành cho da ít mụn, da stress. Đã bao gồm làm sạch nhẹ & massage."
          items={[
            { name: "Chăm sóc da chuyên sâu", price: "290k" },
            { name: "Detox tảo lạnh Christina", price: "390k" },
            { name: "⭐ Glow & Bright Skin", price: "450k", best: true },
            { name: "⭐ Detox Orgahue (dòng cao cấp)", price: "490k", best: true },
          ]}
        />

        {/* GROUP 3 */}
        <Group
          title="Tái tạo da – xử lý thâm, sắc tố"
          note="Thực hiện sau khi thăm khám. Không áp dụng cho da viêm nặng."
          items={[
            { name: "Peel hỗ trợ trị mụn", price: "550k" },
            { name: "Peel mờ thâm, đều màu da", price: "600k" },
            { name: "Peel căng bóng, sáng da", price: "550k" },
            { name: "⭐ Peel đa nhiệm (Layer Peel)", price: "700k", best: true },
          ]}
        />

        {/* GROUP 4 */}
        <Group
          title="Body care & gội đầu"
          note="Dịch vụ thư giãn, hỗ trợ chăm sóc toàn diện."
          items={[
            { name: "Nặn mụn lưng", price: "300k" },
            { name: "Peel thâm / mụn lưng", price: "1100k" },
            { name: "Gội đầu sạch 30 phút", price: "59k" },
            { name: "Gội đầu thư giãn 50 phút", price: "119k" },
            { name: "⭐ Gội đầu chuyên sâu 70 phút", price: "179k", best: true },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-12 flex justify-center">
        <a
          href={zaloLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white hover:bg-slate-800 transition soft-shadow"
        >
          Nhắn Zalo để được tư vấn & đặt lịch
        </a>
      </div>
    </section>
  );
}

function Group({
  title,
  note,
  items,
}: {
  title: string;
  note?: string;
  items: {
    name: string;
    price: string;
    best?: boolean;
  }[];
}) {
  return (
    <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 md:p-8 soft-shadow flex flex-col">
      <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
        {title}
      </h3>

      {note && (
        <p className="mt-2 text-sm text-slate-600">
          {note}
        </p>
      )}

      <div className="mt-5 divide-y divide-slate-100 flex-1">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center gap-2">
              <span className="text-slate-900 font-medium">
                {item.name}
              </span>
              {item.best && (
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
                  Best seller
                </span>
              )}
            </div>

            <div className="font-semibold text-slate-900">
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
