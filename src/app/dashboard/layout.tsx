import CustomSidebar from "@/components/sidebar-app";
import CustomSidebarTrigger from "@/components/sidebar-trigger-app";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <section className="flex h-screen w-full bg-background px-2 py-2">
        <CustomSidebar />
        <main className="grow p-2 bg-white rounded-lg shadow-lg">
          <div>
            <CustomSidebarTrigger />
          </div>
          {children}
        </main>
      </section>
    </SidebarProvider>
  );
};

export default DashboardLayout;
