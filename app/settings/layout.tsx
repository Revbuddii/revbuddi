import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../../components/AppSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

<p>hello</p>
    // <SidebarProvider className="  wrapper">
    //   <AppSidebar />
    //   <main className="w-full">
    //     <SidebarTrigger />
    //     {children}
    //   </main>
    // </SidebarProvider>
  );
}
