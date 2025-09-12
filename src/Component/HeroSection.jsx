import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      title: "Fast & Secure Payments",
      desc: "Experience instant and safe transactions anytime.",
      img: "/images/slide1.jpg"
    },
    {
      id: 2,
      title: "Smart Loan Solutions",
      desc: "Get quick loan approvals with flexible EMI options.",
      img: "/images/slide2.jpg"
    },
    {
      id: 3,
      title: "Insurance Made Easy",
      desc: "Affordable and reliable insurance plans at your fingertips.",
      img: "/images/slide3.jpg"
    },
  ];

  return (
    <section className="w-full h-[400px] relative mt-20">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-[500px] flex items-center justify-center bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="bg-black/60 p-8 rounded-xl max-w-xl text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
