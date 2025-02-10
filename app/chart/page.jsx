import React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Icon } from "../../constant/icons";
const categoryData = [
  {
    category: "Technology",
    items: [
      { title: "Smartphones", image: Icon.woman },
      { title: "Laptops", image: Icon.woman },
      { title: "Cameras", image: Icon.woman },
      { title: "Drones", image: Icon.delivery },
    ],
  },
  {
    category: "Food and Dining",
    items: [
      { title: "Restaurants", image: Icon.woman },
      { title: "Food Deliveries", image: Icon.delivery },
      { title: "Cafés", image: Icon.andriodNew },
      { title: "Drones", image: Icon.woman },
    ],
  },
];

function CategoryCard({ title, image }) {
  return (
    <Card className="w-72 flex-shrink-0  border-0">
      <CardContent className="p-0">
        <div
          className="h-48 relative rounded-t-lg bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        >
          {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
            <div className="font-bold text-2xl">TOP 50</div>
            <div className="text-lg font-medium">{title}</div>
          </div> */}

        </div>
        <div className="p-4">
          <div className="text-sm font-medium text-zinc-700">
            Top 50 - Global
          </div>
          <div className="text-sm font-semibold text-sky-700 mt-1">
            RevBuddii Data
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CategorySection({ title, data }) {
  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-2xl font-semibold text-zinc-800">{title}</h2>
        <Button
          variant="ghost"
          className=" bg-baseColor transition-all duration-300 ease-linear text-white font-medium"
        >
          View All <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="w-full  whitespace-nowrap">
        <div className="flex gap-4 pb-4">
          {data.map((item, index) => (
            <CategoryCard key={index} title={item.title} image={item.image} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hide-scroll-area" />
      </ScrollArea>
    </div>
  );
}

export default function Chart() {
  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="space-y-4">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-zinc-900">
            Revbuddi Charts
          </h1>
          <p className="text-zinc-600 text-lg max-w-5xl">
            Explore rankings based on real user reviews, trust scores, and
            fraud-resistant insights. From restaurants to tech gadgets, see
            what's trending in reliability.
          </p>
        </div>
        <div className="mt-8">
          {categoryData.map((section) => (
            <CategorySection
              key={section.category}
              title={section.category}
              data={section.items}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
