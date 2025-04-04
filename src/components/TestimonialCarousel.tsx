import React from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content:
      "InnoBoost has transformed our marketing operations. The analytics and automation features have saved us countless hours.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Michael Chen",
    role: "CMO",
    company: "GrowthLabs",
    content:
      "The best marketing platform we've used. The interface is intuitive and the features are exactly what we needed.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    company: "ScaleUp Inc",
    content:
      "Outstanding platform and even better support team. They've helped us achieve our marketing goals consistently.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "David Kim",
    role: "Digital Marketing Lead",
    company: "InnovateNow",
    content:
      "The automation capabilities have revolutionized our workflow. Highly recommend for any serious marketing team.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Lisa Thompson",
    role: "Growth Manager",
    company: "DigitalFirst",
    content:
      "The platform's analytics capabilities have given us insights we never had before. It's been a game-changer for our marketing strategy.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "James Wilson",
    role: "Marketing Operations",
    company: "TechGrowth",
    content:
      "InnoBoost's automation features have helped us scale our marketing efforts without increasing headcount. Excellent ROI.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Anna Martinez",
    role: "Digital Marketing Director",
    company: "MarketPro",
    content:
      "The integration capabilities are fantastic. We've connected all our tools and the workflow is seamless now.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Robert Taylor",
    role: "Head of Marketing",
    company: "GrowthGenius",
    content:
      "Customer support is exceptional. They're always there when we need them and go above and beyond to help.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const TestimonialCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="testimonial-carousel !pb-16"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="h-full">
          <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col">
            <div className="flex text-primary mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-slate-700 mb-6 flex-grow">
              {testimonial.content}
            </p>
            <div className="flex items-center space-x-4 mt-auto">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-slate-900">
                  {testimonial.name}
                </p>
                <p className="text-slate-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;
