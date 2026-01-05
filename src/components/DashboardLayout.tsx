import type { User } from '@/lib/types';
import { SidebarProvider, SidebarInset, SidebarRail } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';
import AppHeader from '@/components/AppHeader';

type DashboardLayoutProps = {
  user: User;
  children: React.ReactNode;
};

export default function DashboardLayout({ user, children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
        <AppSidebar user={user} />
        <SidebarRail />
        <SidebarInset>
          <AppHeader user={user} />
          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </SidebarInset>
    </SidebarProvider>
  );
}
