"use client";

import { useMemo, useState } from "react";

const ZALO_PHONE = "0372831840";
const ZALO_LINK = `https://zalo.me/${ZALO_PHONE}`;

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Facial làm sạch sâu");
  const [timeSlot, setTimeSlot] = useState("Sáng (09:00–12:00)");
  const [note, setNote] = useState("");

  const message = useMemo(() => {
    const lines = [
      "📅 ĐẶT LỊCH ORI SKINROOM",
      `👤 Họ và tên: ${name || "(chưa nhập)"}`,
      `📞 Số điện thoại: ${phone || "(chưa nhập)"}`,
      `💆 Dịch vụ: ${service}`,
      `⏰ Khung giờ: ${timeSlot}`,
      `📝 Ghi chú: ${note?.trim() ? note.trim() : "(không)"}`,
      "",
      "— Gửi từ website",
    ];
    return lines.join("\n");
  }, [name, phone, service, timeSlot, note]);

  const handleSendToZalo = async () => {
    if (!name.trim() || !phone.trim()) {
      alert("Bạn vui lòng nhập Họ và tên + Số điện thoại để đặt lịch nhé.");
      return;
    }

    // Copy message so user can paste into Zalo quickly
    try {
      await navigator.clipboard.writeText(message);
      alert("Đã copy nội dung đặt lịch ✅ Mình sẽ mở Zalo, bạn chỉ cần dán và gửi nhé!");
    } catch {
      alert("Không copy tự động được. Mình vẫn mở Zalo — bạn hãy copy nội dung trong ô 'Nội dung đặt lịch' rồi dán vào Zalo nhé!");
    }

    window.open(ZALO_LINK, "_blank", "noopener,noreferrer");
  };

  const handleCopyOnly = async () => {
    try {
      await navigator.clipboard.writeText(message);
      alert("Đã copy nội dung đặt lịch ✅");
    } catch {
      alert("Không copy tự động được. Bạn hãy bôi đen nội dung và copy thủ công nhé.");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Left: booking card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-8 soft-shadow">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Đặt lịch nhanh • phản hồi trong ngày
          </div>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
            Liên hệ & đặt lịch
          </h2>
          <p className="mt-2 text-slate-600 leading-relaxed">
            Điền thông tin, website sẽ copy nội dung đặt lịch và mở Zalo để bạn dán và gửi nhanh.
          </p>

          <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Họ và tên">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-400"
                  placeholder="Ví dụ: Ngọc Anh"
                />
              </Field>

              <Field label="Số điện thoại">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-400"
                  placeholder="Ví dụ: 09xx xxx xxx"
                />
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Dịch vụ quan tâm">
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-400"
                >
                  <option>Facial làm sạch sâu</option>
                  <option>Phục hồi da nhạy cảm</option>
                  <option>Massage thư giãn</option>
                  <option>Tư vấn tình trạng da</option>
                </select>
              </Field>

              <Field label="Khung giờ mong muốn">
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-400"
                >
                  <option>Sáng (09:00–12:00)</option>
                  <option>Chiều (13:00–17:00)</option>
                  <option>Tối (17:00–20:00)</option>
                </select>
              </Field>
            </div>

            <Field label="Ghi chú (tuỳ chọn)">
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="min-h-[110px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-400"
                placeholder="Ví dụ: da nhạy cảm / dễ đỏ / muốn phục hồi..."
              />
            </Field>

            {/* Preview message */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-2 flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-slate-900">
                  Nội dung đặt lịch
                </div>
                <button
                  type="button"
                  onClick={handleCopyOnly}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 transition"
                >
                  Copy nội dung
                </button>
              </div>

              <pre className="whitespace-pre-wrap text-sm text-slate-700 leading-relaxed">
                {message}
              </pre>
            </div>

            <div className="mt-1 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleSendToZalo}
                className="rounded-full bg-slate-900 px-6 py-3 text-white text-sm hover:bg-slate-800 transition"
              >
                Gửi qua Zalo
              </button>

              <a
                href={ZALO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm hover:bg-slate-50 transition"
              >
                Mở Zalo
              </a>
            </div>

            <p className="text-xs text-slate-500">
              *Zalo cá nhân không hỗ trợ website gửi tự động. Website sẽ copy nội dung để bạn dán và gửi nhanh.
            </p>
          </form>
        </div>

        {/* Right: info + map */}
        <div className="rounded-3xl border border-slate-200 bg-white soft-shadow overflow-hidden">
          <div className="p-7 md:p-8 border-b border-slate-200">
            <h3 className="text-lg font-semibold tracking-tight">Thông tin spa</h3>

            <div className="mt-4 grid gap-3 text-sm">
              <InfoRow title="Zalo" value={ZALO_PHONE} />
              <InfoRow
                title="Địa chỉ"
                value="62 Trần Đăng Ninh, Mỹ Xuân, Tân Thành, Bà Rịa - Vũng Tàu, Việt Nam"
              />
              <InfoRow title="Giờ mở cửa" value="09:00 – 20:00 (T2–CN)" />
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={ZALO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-900 px-5 py-2.5 text-white text-sm hover:bg-slate-800 transition"
              >
                Nhắn Zalo
              </a>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCopyOnly();
                }}
                className="rounded-full border border-slate-200 px-5 py-2.5 text-sm hover:bg-slate-50 transition"
              >
                Copy nội dung đặt lịch
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[360px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.612701307532!2d107.05817739999999!3d10.609423399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175110011796c7f%3A0x13e359a3223fae08!2sORI%20SKINROOM!5e0!3m2!1svi!2s!4v1768979984483!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ ORI SKINROOM"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      {children}
    </label>
  );
}

function InfoRow({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="text-slate-500">{title}</div>
      <div className="font-semibold text-slate-900 text-right">{value}</div>
    </div>
  );
}
