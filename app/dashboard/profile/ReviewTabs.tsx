"use client"

import { ReviewCard } from "@/app/Main"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { reviews } from "@/constant/data"

export default function ReviewTabs() {
  return (
    <Tabs defaultValue="verified" className="w-full">
      <TabsList className="h-auto p-0 bg-transparent border-b border-gray-200 w-full flex justify-start rounded-none">
        <TabsTrigger 
          value="reviews" 
          className="rounded-none border-b-2 border-transparent px-4 py-2 text-gray-600 hover:text-gray-900 focus-visible:ring-0 data-[state=active]:shadow-none data-[state=active]:border-transparent"
        >
          Reviews
        </TabsTrigger>
        
        <TabsTrigger 
          value="verified" 
          className="rounded-none border-b-2 border-transparent px-4 py-2 text-gray-600 hover:text-gray-900 focus-visible:ring-0 data-[state=active]:text-blue-600 data-[state=active]:shadow-none data-[state=active]:border-blue-600"
        >
          Verified Reviews
        </TabsTrigger>
        
        <TabsTrigger 
          value="overview" 
          className="rounded-none border-b-2 border-transparent px-4 py-2 text-gray-600 hover:text-gray-900 focus-visible:ring-0 data-[state=active]:shadow-none data-[state=active]:border-transparent"
        >
          Overview
        </TabsTrigger>
        
        <TabsTrigger 
          value="blacklists" 
          className="rounded-none border-b-2 border-transparent px-4 py-2 text-gray-600 hover:text-gray-900 focus-visible:ring-0 data-[state=active]:shadow-none data-[state=active]:border-transparent"
        >
          Blacklists
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="reviews">
      {reviews.map((review, idx) => (
          <div key={idx} className="mb-2">
            <ReviewCard key={idx} review={review} />
          </div>
        ))}
      </TabsContent>
      
      <TabsContent value="verified">
      {reviews.map((review, idx) => (
          <div key={idx} className="mb-2">
            <ReviewCard key={idx} review={review} />
          </div>
        ))}
      </TabsContent>
      
      <TabsContent value="overview">
        <div className="py-4">Overview content here</div>
      </TabsContent>
      
      <TabsContent value="blacklists">
        <div className="py-4">Blacklists content here</div>
      </TabsContent>
    </Tabs>
  )
}