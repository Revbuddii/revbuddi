import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Icon } from "../../../constant/icons";
import Image from "next/image";
import { categoryData } from "../../../constant/data";



function CategoryCard({ title, image }) {
  return (
    <div>
      <Card className="min-w-44 flex-shrink-0 relative overflow-hidden rounded-lg hover:shadow-lg transition-shadow h-40">
        {image && (
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={image}
              alt={title}
              width={100}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white font-medium text-center">
          {title}
        </div>
      </Card>
      <div className="p-2">
        <h1 className="text-sm font-bold py-1">Top 50 - {title} </h1>
        <p className="text-[#0064B2] text-xs font-bold">RevBuddii Data</p>
      </div>
    </div>
  );
}

function CategorySection({ title, data }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Button
          size="sm"
          className="text-white bg-[#0064B2] hover:bg-blue-50 hover:text-black"
        >
          View All <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="w-full">
        <div className="flex space-x-4 pb-4">
          {data.map((item, index) => (
            <CategoryCard key={index} title={item.title} image={item.image} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="opacity-100" />
      </ScrollArea>
    </div>
  );
}

export default function Chart() {
  return (
    <div className="">
      {categoryData.map((section, index) => (
        <CategorySection
          key={index}
          title={section.category}
          data={section.items}
        />
      ))}
    </div>
  );
}
