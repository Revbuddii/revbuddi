import React from "react";
import { Trophy, Award, Medal, Star, CheckCircle, Users } from "lucide-react";
import { Icon } from "../../../constant/icons";
import Image from "next/image";

import { Button } from "@/components/ui/button";
const data = [
  {
    position: 1,
    background: Icon.first,
    title: "Amazon Prime",
    paragraph: "Business",
    rating: "4.8",
    review: [
      {
        title: "Trust score",
        score: 92,
      },
      {
        title: "Verified Reviews",
        score: 156,
      },
      {
        title: "Resolution",
        score: 90,
      },
    ],
  },
  {
    position: 2,
    background: Icon.second,
    title: "S24 Ultra",
    paragraph: "Business",
    rating: "4.6",
    review: [
      {
        title: "Trust score",
        score: 85,
      },
      {
        title: "Verified Reviews",
        score: 132,
      },
      {
        title: "Resolution",
        score: 90,
      },
    ],
  },
  {
    position: 3,
    background: Icon.third,
    title: "David Raya",
    paragraph: "Individual",
    rating: "4.5",
    review: [
      {
        title: "Trust score",
        score: 78,
      },
      {
        title: "Verified Reviews",
        score: 120,
      },
      {
        title: "Resolution",
        score: 88,
      },
    ],
  },
];

const getBorderColor = (position) => {
  switch (position) {
    case 1:
      return " border-[#FF9D7C]";
    case 2:
      return " border-[#E1CFFF]";
    case 3:
      return " border-[#E1CFFF]";
    default:
      return "bg-white";
  }
};

const getOrdinalSuffix = (position) => {
  if (position === 1) return "st";
  if (position === 2) return "nd";
  if (position === 3) return "rd";
  return "th";
};
export default function LeadersCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <div
          key={item.position}
          className={`bg-white rounded-xl  shadow-md ${getBorderColor(
            item.position
          )} border-4  transition-all duration-300 hover:shadow-lg`}
        >
          <div
            style={{ backgroundImage: `url(${item.background.src})` }}
            className="bg-cover p-4 italic text-white font-bold text-2xl text-end border h-28"
          >
            {item.position}
            {getOrdinalSuffix(item.position)}
            <Image src={Icon.amazon} width={100} height={20} alt="icon" />
          </div>
          <div className="p-4 mt-5">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl">{item.title}</h1>
              <Button className="p-4 rounded-lg bg-[#0064B2]">
                <Star className="text-[#FFC857] fill-[#FFC857]" />
                {item.rating}
              </Button>
            </div>
            <p className="font-bold text-sm">{item.paragraph}</p>

            <div className="flex my-6 justify-between items-center">
              {item.review.map(({ title, score }, idx) => {
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold">{score}</h1>
                    <p className="text-xs font-bold">{title}</p>
                  </div>
                );
              })}
            </div>
            <Button className='border mt-4 font-semibold rounded-xl bg-transparent text-[#0064B2] border-[#0064B2] w-full'>
                View Profile
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
