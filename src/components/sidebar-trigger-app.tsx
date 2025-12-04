"use client";

import { SidebarTrigger } from "./ui/sidebar";
import { usePathname } from "next/navigation";
import BreadcrumbApp from "./breadcrumb-app";

const CustomSidebarTrigger = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  return (
    <div className="flex items-center gap-2">
      <SidebarTrigger />
      <BreadcrumbApp pathSegments={pathSegments} />
    </div>
  );
};

export default CustomSidebarTrigger;
