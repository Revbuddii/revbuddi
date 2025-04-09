"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import { images } from "@/constant/images";
import { ChevronLeft, ChevronRight, VerifiedIcon } from "lucide-react";
import { Card, CardHeader } from "../ui/card";

export function TestimonialsCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonials = [
    {
      name: "Nolan Levin",
      role: "Verified User",
      avatar: images.devin,
      verified: true,
      content:
        "RevBuddi makes verifying businesses so easy! I love how I can check reviews and avoid scams before making any purchase.",
    },
    {
      name: "Anika Kenter",
      role: "Online Shopper",
      avatar: images.devin,
      verified: true,
      content:
        "I reported a fraudulent seller, and within hours, their account was flagged. It feels great knowing my feedback helps others.",
    },
    {
      name: "Haylie Botosh",
      role: "Business Owner",
      avatar: images.devin,
      verified: true,
      content:
        "Checking reviews before trusting a seller has saved me from multiple bad deals. This platform is a must-have for online shoppers!",
    },
    {
      name: "Brad Johnson",
      role: "Frequent User",
      avatar: images.devin,
      verified: false,
      content:
        "This platform promotes transparency. Businesses should be held accountable, and this does just that!",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex mb-6">
          <button className="swiper-button-prev w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center mr-2 focus:outline-none shadow-sm">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button className="swiper-button-next w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center focus:outline-none shadow-sm">
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {mounted && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-white rounded-lg p-6 shadow-sm h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 mr-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        layout="fill"
                        className="rounded-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-0 leading-none">
                      <div className="flex items-center">
                        <h3 className="font-medium text-[#343A40]">
                          {testimonial.name}
                        </h3>
                        {testimonial.verified && (
                          <VerifiedIcon
                            fill="#0064B2"
                            className="w-4 text-white h-3 ml-1"
                          />
                        )}
                      </div>
                      <p className="text-xs font-semibold text-gray-500">
                        {testimonial.role}
                      </p>
                    </CardHeader>
                  </div>
                  <p className="text-gray-600 text-sm flex-grow">
                    {testimonial.content}
                  </p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}