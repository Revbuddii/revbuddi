import { Icon } from "@/constant/icons";
import Image from "next/image";
import Link from "next/link";
import ReviewTabs from "./ReviewTabs";

export default function ProfilePage() {
  return (
    <section className="bg-white">
      <div className="flex flex-col sm:flex-row items-center gap-4 p-4 w-full">
        <div className="relative mb-3 sm:mb-0">
          <div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full overflow-hidden bg-gray-200 border border-gray-300">
            <Image
              src={Icon.user}
              alt="Madelyn Lipshutz"
              width={112}
              height={112}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left mb-3 sm:mb-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#343A40]">
            Madelyn Lipshutz
          </h2>
          <p className="text-[#616267] font-medium text-base sm:text-lg">
            Designer at{" "}
            <Link href="#" className="text-[#0064B2] hover:underline">
              Behira's Stitches
            </Link>
          </p>
        </div>

        <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="1"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="19"
                cy="12"
                r="1"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="5"
                cy="12"
                r="1"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
      <ReviewTabs />
    </section>
  );
}
