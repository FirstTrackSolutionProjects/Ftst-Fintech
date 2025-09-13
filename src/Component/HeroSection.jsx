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
    <section className="w-full mt-20">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0} 
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-[400px] sm:h-[400px] md:h-[500px]" 
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.img})`, backgroundSize: "cover",  
              backgroundPosition: "center", }}
            >
              <div className="bg-black/60 p-6 sm:p-8 md:p-10 rounded-lg text-center max-w-xl mx-4 sm:mx-0">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-white text-base sm:text-lg md:text-xl">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
