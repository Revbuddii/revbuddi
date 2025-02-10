"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
} from "@/components/ui/sidebar";
import {
  User,
  Settings,
  CreditCard,
  Home,
  Trophy,
  ClipboardList,
  ShieldCheck,
  GraduationCap,
  Bookmark,
  FileText,
  BookOpen,
  LifeBuoy,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
const sidebarNavItems = [
  {
    group: "Account",
    items: [
      {
        icon: <Home className="mr-2 h-4 w-4" />,
        label: "Home",
        href: "/",
      },
      {
        icon: <Bookmark className="mr-2 h-4 w-4" />,
        label: "Saved Review",
        href: "/reviews",
      },
      {
        icon: <FileText className="mr-2 h-4 w-4" />,
        label: "My Reviews",
        href: "/my-reviews",
      },
      {
        icon: <Trophy className="mr-2 h-4 w-4" />,
        label: "LeadersBoard",
        href: "/leadersboard",
      },
      {
        icon: <ClipboardList className="mr-2 h-4 w-4" />,
        label: "Review Management",
        href: "/management",
      },
      {
        icon: <ShieldCheck className="mr-2 h-4 w-4" />,
        label: "Trust & Safety Hub",
        href: "/safety",
      },
      {
        icon: <GraduationCap className="mr-2 h-4 w-4" />,
        label: "Educational Shortcuts",
        href: "/education",
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        icon: <Settings className="mr-2 h-4 w-4" />,
        label: "Settings",
        href: "/settings",
      },
      {
        icon: <User className="mr-2 h-4 w-4" />,
        label: "Profile",
        href: "/settings/profile",
      },
      {
        icon: <BookOpen className="mr-2 h-4 w-4" />,
        label: "Guidelines",
        href: "/settings/guidelines",
      },
      {
        icon: <LifeBuoy className="mr-2 h-4 w-4" />,
        label: "Support",
        href: "/settings/support",
      },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="shadow-lg p-2 rounded-3xl ">
      <SidebarContent className="text-sm p-2 font-medium">
        {sidebarNavItems.map((group, index) => (
          <SidebarGroup
            key={group.group}
            title={<VisuallyHidden>{group.group}</VisuallyHidden>}
          >
            {group.items.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className={`flex font-medium items-center p-3 mb-2 rounded-2xl  cursor-pointer transition-all
                    ${
                      isActive ? "bg-baseColor text-white" : "hover:bg-accent"
                    }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
