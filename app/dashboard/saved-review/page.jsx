
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Widget } from "../page";
import MainContent from "./MainContent";



export default function Feed() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-4 max-w-screen-2xl mx-auto h-[calc(100vh-64px)]">
      <div className="h-full  overflow-hidden">
        <ScrollArea className="h-full">
          <MainContent />
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





