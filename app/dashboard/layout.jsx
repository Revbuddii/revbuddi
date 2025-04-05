"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { pageTitles, sidebarNavItems,HomeIcons } from "../../constant/data";
import { Icon } from "../../constant/icons";
import DashBoardHeader from "./Header";






export default function AdminDashboard({ children }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const currentPageTitle = pageTitles[pathname] || "Dashboard";

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {isSidebarOpen && isMobile && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`fixed h-screen z-30 bg-white shadow-lg flex flex-col transition-transform duration-300 
          ${isMobile ? "rounded-none" : "md:rounded-r-3xl"} 
          ${
            isSidebarOpen
              ? "translate-x-0 w-64"
              : "md:w-16 md:translate-x-0 -translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          {isSidebarOpen && (
            <h2 className="font-bold text-lg">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src={Icon?.logo}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </Link>
              </div>
            </h2>
          )}
          {isMobile && (
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={toggleSidebar}
            >
              <X size={20} />
            </button>
          )}
        </div>

        <div className="flex-1 py-2 flex flex-col overflow-hidden">
          {sidebarNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={item.label}
                className={`flex items-center text-sm font-medium mb-2 ${
                  isSidebarOpen ? "px-4 py-2" : "justify-center py-3"
                } mx-2 rounded-lg transition-colors ${
                  isActive ? "bg-baseColor text-white" : "hover:bg-accent"
                }`}
                onClick={() => isMobile && toggleSidebar()}
              >
                <item.icon
                  className={`${isSidebarOpen ? "mr-3" : ""} h-4 w-4`}
                />
                {isSidebarOpen && <span>{item.label}</span>}
              </Link>
            );
          })}
        </div>

        <div className="border-t p-4 flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            JP
          </div>
          {isSidebarOpen && (
            <div className="ml-3">
              <div className="font-medium text-sm">John Peterson</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>
          )}
        </div>
      </aside>

      <div
        className={`flex-1 flex flex-col w-full transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : "md:ml-16"
        }`}
      >
        <header className="bg-white shadow sticky top-0 z-10">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center">
              <button
                className="p-2 rounded-md hover:bg-gray-100"
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
              >
                <Menu size={20} />
              </button>
            </div>
            <DashBoardHeader />
          </div>
        </header>

        <main className=" w-full p-4 overflow-y-auto pb-20 md:pb-4">
          <div className="mb-7">
            <h1 className="text-3xl text-black font-semibold">
              {currentPageTitle}
            </h1>
          </div>
          {children}
        </main>

        {isMobile && (
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-20">
            <div className="flex justify-around items-center h-16">
              {HomeIcons.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <Link
                    href={item.url}
                    key={item.label}
                    className={`flex flex-col items-center justify-center w-1/5 h-full ${
                      isActive ? "text-baseColor" : "text-gray-500"
                    }`}
                  >
                    <div className="w-6 h-6 mb-1">
                      <Image
                        src={item.logo}
                        alt={item.label}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}