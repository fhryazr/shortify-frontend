import Protected from "@/components/providers/Protected";
import CustomSidebar from "@/components/shared/sidebar-app";
import CustomSidebarTrigger from "@/components/shared/sidebar-trigger-app";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Protected>
      <SidebarProvider>
        <section className="flex h-screen w-full py-2 bg-background">
          <CustomSidebar />
          <main className="w-full h-full p-2 flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
            <div>
              <CustomSidebarTrigger />
            </div>
            {children}
          </main>
        </section>
      </SidebarProvider>
    </Protected>
  );
};

export default DashboardLayout;
