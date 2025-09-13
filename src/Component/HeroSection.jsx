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
      img: "/images/slide1.jpg",
    },
    {
      id: 2,
      title: "Smart Loan Solutions",
      desc: "Get quick loan approvals with flexible EMI options.",
      img: "/images/slide2.jpg",
    },
    {
      id: 3,
      title: "Insurance Made Easy",
      desc: "Affordable and reliable insurance plans at your fingertips.",
      img: "/images/slide3.jpg",
    },
    {
      id: 4,
      title: "Smart Credit Cards",
      desc: "Get rewards, cashback, and secure transactions with every swipe.",
      img: "/images/slide4.jpg",
    },
  ];

  return (
    <section className="w-full relative mt-20 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-[300px] md:h-[500px]" 
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full h-full"> 
            <div
              className="w-full h-full flex items-center justify-center bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="bg-black/60 px-4 py-6 md:p-10 rounded-xl max-w-xs md:max-w-xl text-center">
                <h1 className="text-xl md:text-5xl font-bold mb-2 md:mb-4">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-lg">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
