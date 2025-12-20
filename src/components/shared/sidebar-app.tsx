"use client";

import { LayoutDashboard, LinkIcon, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import ProfileCard from "./profile-card";
import Logo from "./logo";
import { authClient } from "@/lib/auth-client";
import { useQueryClient } from "@tanstack/react-query";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "My Links", url: "/dashboard/my-links", icon: LinkIcon },
];

const CustomSidebar = () => {
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    await authClient.signOut();
    localStorage.removeItem("authToken");
    // Clear all cached queries when logging out
    queryClient.clear();
  };

  return (
    <Sidebar variant="inset" className="border-0!">
      <SidebarHeader className="bg-background w-full border-b border-border px-2 lg:px-0">
        <Logo />
      </SidebarHeader>

      <SidebarContent className="bg-background px-2 lg:px-0">
        <SidebarMenu className="py-2">
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

      <SidebarFooter className="bg-background border-t px-2 lg:px-0">
        <ProfileCard />
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full text-destructive hover:bg-destructive hover:text-white">
          <LogOut /> Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default CustomSidebar;
