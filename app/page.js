import Image from "next/image";
import { AlertCircle, Bookmark, Star, Bell, ThumbsUp } from "lucide-react";
import React from "react";
import Main from "./Main";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { images } from "../constant/images";

export default function Feed() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-4 max-w-screen-2xl mx-auto h-[calc(100vh-64px)]">
      <div className="h-full  overflow-hidden">
        <ScrollArea className="h-full">
          <Main />
        </ScrollArea>
      </div>

      <div className="h-full overflow-hidden hidden lg:block">
        <ScrollArea className="h-full">
          <Widget />
        </ScrollArea>
      </div>
    </section>
  );
}

const Widget = () => {
  return (
    <section className="hidden lg:block space-y-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Trending in Restaurants</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.map((item, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-none">
              <div className="relative h-64">
                <Image
                  src={item.image.src}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/0 p-4 text-white">
                  <h2 className="font-semibold text-lg lg:text-2xl mb-2">
                    {item.title}
                  </h2>
                  <p className="text-xs line-clamp-2 mb-2 text-gray-200">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1">
                    {Array(item.star).fill(null).map((_, i) => (
                      <Star key={i} size={16} fill="yellow" color="yellow" />
                    ))}
                    <span className="text-xs ml-1">{item.number.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </CardContent>
      </Card>
      <Notification />
    </section>
  );
};

const Notification = () => {
  const getIconConfig = (type) => {
    const configs = {
      bookmark: {
        Icon: Bookmark,
        bg: "bg-[#FF6229]",
        color: "text-white",
      },
      alert: {
        Icon: AlertCircle,
        bg: "bg-[#FFCD29]",
        color: "text-white",
      },
      thumbsUp: {
        Icon: ThumbsUp,
        bg: "bg-[#6229FF]",
        color: "text-white",
      },
    };

    return configs[type] || { Icon: Bell, bg: "bg-gray-100", color: "text-gray-600" };
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 12 New Notifications</CardDescription>
          </div>
          <Bell className="text-muted-foreground h-6 w-6" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {notificationData.map((item, index) => {
          const { Icon, bg, color } = getIconConfig(item.type);
          return (
            <Card key={index} className="hover:bg-accent transition-colors">
              <CardContent className="flex items-center gap-4 p-3">
                <div className={`p-2 rounded-full ${bg}`}>
                  <Icon className={color} size={16} />
                </div>
                <p className="text-sm text-muted-foreground flex-1">
                  {item.review}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="default" size="sm" className="bg-baseColor text-secondary rounded-2xl">
          See More
        </Button>
      </CardFooter>
    </Card>
  );
};

const notificationData = [
  { type: "bookmark", review: "Your item was bookmarked!" },
  { type: "alert", review: "New security alert!" },
  { type: "thumbsUp", review: "Someone liked your post!" },
];

const data = [
  {
    title: "McDonalds",
    image: images.chips,
    star: 5,
    number: 489959,
    description:
      "McDonalds is a global fast food founded in 1940,serving iconic Burgers, Fries and other affordable meals to millions worldwide ",
  },
  {
    title: "KFC",
    image: images.chips,
    star: 2,
    number: 489959,
    description:
      "KFC is a global fast food founded in 1940,serving iconic Burgers, Fries and other affordable meals to millions worldwide ",
  },
];