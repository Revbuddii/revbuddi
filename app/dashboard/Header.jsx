"use client";
import { Icon } from "../../constant/icons";
import React, { useState } from "react";
import Image from "next/image";
import { Pen, Search } from "lucide-react";
import { Button } from '@/components/ui/button';

const DashBoardHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="hidden md:block sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <div className="hidden md:flex bg-transparent flex-1 max-w-4xl mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block   w-full outline-none bg-transparent pl-10 pr-3 py-2 border border-[#D2D3D5] rounded-3xl
                         bg-gray-50 placeholder:text-xs focus:bg-white focus:ring-2 focus:ring-blue-500
                         focus:border-transparent transition-colors duration-200"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="hidden md:flex gap-4 items-center">
            <Button className="bg-baseColor flex items-center gap-2 p-5 rounded-3xl text-secondary text-xs">
              <Pen size={12} /> Post Review
            </Button>
            <div className="w-10 ring-baseColor h-10 rounded-full">
              <Image
                src={Icon?.user}
                alt="user image"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>


        </div>


        <div className="md:hidden px-4 py-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full outline-none bg-transparent pl-10 pr-3 py-2 border border-[#D2D3D5] rounded-3xl
                       bg-gray-50 placeholder:text-xs focus:bg-white focus:ring-2 focus:ring-blue-500
                       focus:border-transparent transition-colors duration-200"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashBoardHeader;