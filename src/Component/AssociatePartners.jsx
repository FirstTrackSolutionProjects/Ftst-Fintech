import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


export default function AssociatePartners() {
  const partners = [
    { id: 1, img: "/images/hdfc.png", name: "HDFC Bank" },
    { id: 2, img: "/images/axis.png", name: "Axis Bank" },
    { id: 3, img: "/images/kotak.png", name: "Kotak Bank" },
    { id: 4, img: "/images/icici.png", name: "ICICI Bank" },
    { id: 5, img: "/images/yes.png", name: "Yes Bank" },
    { id: 6, img: "/images/tata.png", name: "TATA Capital" },
    { id: 7, img: "/images/standard.png", name: "Standard Chartered" },
    { id: 8, img: "/images/induslnd.png", name: "IndusInd Bank" },
    { id: 9, img: "/images/federal.png", name: "Federal Bank" },
    { id: 10, img: "/images/idfc.png", name: "IDFC Bank" },
    // { id: 11, img: "/images/BOM.png", name: "Bank of Maharashtra" },
    // { id: 12, img: "/images/BOI.png", name: "Bank of India" },
    // { id: 13, img: "/images/CBOI.png", name: "Central Bank of India" },
    // { id: 14, img: "/images/PNB.png", name: "Punjab National Bank" },
    // { id: 15, img: "/images/indian.png", name: "Indian Bank" },
    // { id: 16, img: "/images/BOB.png", name: "Bank of Baroda" },
    // { id: 17, img: "/images/SBI.png", name: "State Bank of India" },
    { id: 18, img: "/images/bajaj.png", name: "BAJAJ Finance LTD" },
    { id: 19, img: "/images/poonawalla.png", name: "Poonawalla Fincorp" },
    { id: 20, img: "/images/pnbhousing.png", name: "PNB Housing Finance" },
    { id: 21, img: "/images/birla.png", name: "Aditya Birla Finance" },
    { id: 22, img: "/images/smfg.png", name: "SMFG IndiaCredit" },
    { id: 23, img: "/images/piramal.png", name: "Piramal Housing Finance" },
    { id: 24, img: "/images/L&T.png", name: "L&T Financial Services" },
    { id: 25, img: "/images/incred.png", name: "INCRED" },
    { id: 26, img: "/images/ugro.png", name: "UGRO Capital" },
    { id: 27, img: "/images/icicihome.png", name: "ICICI Home Finance" },
    { id: 28, img: "/images/chola.png", name: "Chola" },
  ];

  
    return (
    <div className="bg-gray-200 py-10 mt-5">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Our Associate Partners</h2>
      <div className="max-w-5xl mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white rounded-lg shadow-md">
                <img src={partner.img} alt={partner.name} className="w-32 h-20 object-contain rounded-md bg-white p-2" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};