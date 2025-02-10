import React from "react";
import Image from "next/image";
import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  BadgeCheck,
  Star,
} from "lucide-react";
import { formatDate, reviews } from "../constant/data";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ReviewCard = ({ review }) => {
  return (
    <Card className="shadow-sm ">
      <CardHeader className="space-y-0 pb-4">
        <div className="flex justify-between items-center">
          {review.user.isVerified && (
            <Badge variant="secondary" className="gap-1">
              <BadgeCheck className="w-4 h-4 text-blue-500" />
              Verified Review
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center">
          <Avatar className="h-12 w-12">
            <AvatarImage 
              src={review.user.profilePicture} 
              alt={review.user.name} 
            />
            <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-lg font-semibold leading-none">{review.user.name}</p>
            <time className="text-sm text-muted-foreground" dateTime={review.review.createdAt}>
              {formatDate(review.review.createdAt)}
            </time>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <h3 className="font-bold text-baseColor">{review.product.name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                fill="currentColor"
                className={`w-5 h-5 ${
                  index < review.review.rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {review.review.content}
        </p>

        {review.product.icons.length > 0 && (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {review.product.icons.map((icon, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={icon}
                  alt={`Product image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter>
        <div className="flex gap-6">
          <Button variant="ghost" size="sm" className="hover:text-blue-500">
            <ThumbsUp className="w-4 h-4 mr-2" />
            {review.engagement.likes}
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-red-500">
            <ThumbsDown className="w-4 h-4 mr-2" />
            {review.engagement.dislikes}
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-green-500">
            <MessageCircle className="w-4 h-4 mr-2" />
            {review.engagement.comments}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default function Main() {
  return (
    <main className="container mx-auto ">
      <div className="space-y-6">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} review={review} />
        ))}
      </div>
    </main>
  );
}