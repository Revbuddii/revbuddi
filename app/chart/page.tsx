"use client";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icon } from "@/constant/icons";
import { images } from "@/constant/images";

export default function SmartphoneDashboard() {
  return (
    <div className="bg-[#BFDAFF] ">
      <div className="wrapper py-6">
        <header className="flex justify-between items-center mb-16">
          <div className="w-10 h-10 flex items-center gap-3">
            <Image
              src={Icon.logo}
              alt="logo"
              width={24}
              height={24}
              className="w-full h-full object-cover"
            />
            <h1 className="text-xl font-bold text-gray-800">Charts</h1>
          </div>
          <div className="flex items-center bg-transparent gap-4">
            <Select defaultValue="smartphone">
              <SelectTrigger className="w-[180px] bg-transparent  border-black">
                <SelectValue placeholder="Smartphone" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="smartphone">Smartphone</SelectItem>
                <SelectItem value="tablets">Tablets</SelectItem>
                <SelectItem value="laptops">Laptops</SelectItem>
              </SelectContent>
            </Select>

            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image src={Icon.user} alt="User Avatar" width={40} height={40} />
            </div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="max-w-3xl w-full">
            <h2 className="md:text-xl lg:text-2xl text-xl font-bold text-gray-800 leading-tight mb-4">
              Explore A World Of Innovation With The Most Influential
              Smartphones Of Our Time
            </h2>
            <p className="md:text-xl text-sm text-gray-700">Top Leading Smartphones</p>
          </div>

          <div className="flex max-w-lg  justify-center">
            <Image
              src={images?.phone}
              alt="Various Smartphones"
              width={600}
              height={400}
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
