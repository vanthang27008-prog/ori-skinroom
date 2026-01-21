import Image from "next/image";

const images = [
  { src: "/images/gallery1.jpg", alt: "Không gian spa" },
  { src: "/images/gallery2.jpg", alt: "Góc chăm sóc da" },
  { src: "/images/gallery3.jpg", alt: "Sản phẩm và dụng cụ" },
  { src: "/images/gallery4.jpg", alt: "Phòng liệu trình" },
  { src: "/images/gallery5.jpg", alt: "Vibe thư giãn" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="h2">Không gian & hình ảnh</h2>
          <p className="p-lead">
            Thay ảnh thật của spa để tăng độ tin cậy và chuyển đổi đặt lịch.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
        >
          Xem đường đi <span aria-hidden>→</span>
        </a>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-12">
        {/* Big */}
        <div className="md:col-span-7">
          <CardImage src={images[0].src} alt={images[0].alt} tall />
        </div>

        {/* Right stack */}
        <div className="md:col-span-5 grid gap-5">
          <CardImage src={images[1].src} alt={images[1].alt} />
          <CardImage src={images[2].src} alt={images[2].alt} />
        </div>

        {/* Bottom row */}
        <div className="md:col-span-6">
          <CardImage src={images[3].src} alt={images[3].alt} />
        </div>
        <div className="md:col-span-6">
          <CardImage src={images[4].src} alt={images[4].alt} />
        </div>
      </div>
    </section>
  );
}

function CardImage({
  src,
  alt,
  tall,
}: {
  src: string;
  alt: string;
  tall?: boolean;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 soft-shadow">
      <div className={`relative w-full ${tall ? "h-[420px] md:h-[520px]" : "h-64 md:h-72"}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
        />
      </div>

      {/* overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent opacity-70" />
      <div className="absolute left-5 bottom-5 right-5 flex items-center justify-between gap-3">
        <div className="glass rounded-full border border-white/30 px-4 py-2 text-xs text-white">
          {alt}
        </div>
        <div className="glass rounded-full border border-white/30 px-3 py-2 text-xs text-white">
          View
        </div>
      </div>
    </div>
  );
}