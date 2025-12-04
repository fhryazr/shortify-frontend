"use client";

import {
  ChartLine,
  LayoutDashboard,
  LinkIcon,
  LogOut,
  QrCode,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import ProfileCard from "./profile-card";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "My Links", url: "/dashboard/my-links", icon: LinkIcon },
  { title: "Analytics", url: "/dashboard/analytics", icon: ChartLine },
  { title: "QR Codes", url: "/dashboard/qr-codes", icon: QrCode },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

const CustomSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar variant="inset" className="border-0!">
      <SidebarHeader className="bg-background w-full border-b border-border">
        <div className="flex items-center gap-2">
          <LinkIcon className="w-5 h-5" />
          <span className="text-lg font-bold">Shortify</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-background">
        <SidebarMenu className="py-2 space-y-2">
          {items.map((item) => {
            const isActive = pathname === item.url;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  className="rounded-xl h-10 hover:bg-secondary/50 hover:text-primary">
                  <Link
                    href={item.url}
                    className="flex items-center gap-2 text-lg">
                    <item.icon className="w-5! h-5!" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="bg-background border-t">
        <ProfileCard />
        <Button
          variant="ghost"
          className="w-full text-destructive hover:bg-destructive hover:text-white">
          <LogOut /> Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default CustomSidebar;
