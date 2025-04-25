import { Button } from "@/components/ui/button";
import { FacebookIcon, Instagram, Linkedin, Star, XIcon } from "lucide-react";
import React from "react";
import { Icon } from "@/constant/icons";
import Image from "next/image";
import Link from "next/link";
import { US, GB, DE, FR, JP, CN, IN, BR } from "country-flag-icons/react/3x2";
import { reviews } from "@/constant/data";
import { ReviewCard } from "../Main";
export default function Profile() {
  return (
    <main className="bg-[#EBF1FF]">
      <div className="wrapper pt-6 ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Profile</h1>
          <Button className="rounded-2xl bg-baseColor text-sm">
            Exit Profile
          </Button>
        </div>
        <RatingCard />
        <ContactDetails />
        {reviews.map((review, idx) => (
          <div className="mb-2">
            <ReviewCard key={idx} review={review} />
          </div>
        ))}
      </div>
    </main>
  );
}

export function RatingCard() {
  return (
    <div className="my-4">
      <div className="flex flex-col md:flex-row items-start rounded-lg shadow-sm overflow-hidden">
        <div className="relative w-full border md:w-1/4 h-60 md:h-80">
          <Image
            src={Icon.tesla}
            alt="Tesla background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col w-full md:w-2/4 p-0 md:p-6">
          <div className="flex flex-col mb-6">
            <div className="flex items-center mb-1">
              <span className="text-[#0064B2] font-bold mr-2">#5</span>
            </div>
            <h2 className="text-4xl font-bold text-[#404044] mb-2">Tesla</h2>
            <div className="flex flex-wrap items-center gap-2">
              <Link href="" className="text-blue-500 underline">
                Website
              </Link>
              <span className="text-[#494A50]">•</span>
              <span className="text-[#494A50]">San Francisco, CA</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center px-6 py-2 rounded-full border border-gray-200">
              <Star
                className="text-yellow-400 fill-yellow-400 mr-2"
                size={20}
              />
              <span className="text-xl font-semibold">4.8</span>
            </div>
            <div className="flex items-center px-6 py-2 rounded-full border border-gray-200">
              <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center mr-2">
                <span className="text-white text-xs">🏆</span>
              </div>
              <div>
                <span className="text-base font-semibold">Top 1%</span>
                <span className="text-amber-500 text-sm ml-1">2024</span>
              </div>
            </div>

            <div className="flex items-center px-6 py-2 rounded-full border border-gray-200">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-2">
                <span className="text-white text-xs">✓</span>
              </div>
              <div>
                <span className="text-base font-semibold">Top 5</span>
                <span className="text-green-500 text-sm ml-1">Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex text-black gap-8  flex-row md:w-1/4 p-4 md:p-6 justify-between items-center">
          <div className="text-center ">
            <div className="text-3xl md:text-4xl font-bold">120k</div>
            <div className="text-xs text-[#494A50]  md:text-sm ">
              Verified Reviews
            </div>
          </div>
          <div className="text-center ">
            <div className="text-3xl md:text-4xl font-bold">583k</div>
            <div className="text-xs text-[#494A50] md:text-sm ">
              Trust Score
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactDetails() {
  return (
    <div className=" my-6">
      <h2 className="text-3xl font-medium text-gray-600 mb-6">
        Contact Details
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col">
          <Link
            href="mailto:tesla@email.com"
            className="text-xl font-medium text-[#0064B2] hover:underline"
          >
            tesla@email.com
          </Link>
          <span className="text-[#616267] font-semibold text-sm uppercase tracking-wide mt-1">
            EMAIL ADDRESS
          </span>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <span className="text-xl font-medium text-gray-800">
            123-567-8914
          </span>
          <span className="text-[#616267] font-semibold text-sm uppercase tracking-wide mt-1">
            PHONE NUMBER
          </span>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-3 mb-1">
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              <FacebookIcon />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              <Instagram />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              <XIcon />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              <Linkedin />
            </Link>
          </div>
          <span className="text-[#616267] font-semibold text-sm uppercase tracking-wide mt-1">
            SOCIAL LINKS
          </span>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-2 mb-1">
            <US className="w-6 rounded-full h-6" />
            <GB className="w-6 rounded-full h-6" />
            <DE className="w-6 rounded-full h-6" />
            <JP className="w-6 rounded-full h-6" />
          </div>
          <span className="text-[#616267] font-semibold text-sm uppercase tracking-wide mt-1">
            POPULAR REGION
          </span>
        </div>
      </div>
    </div>
  );
}
