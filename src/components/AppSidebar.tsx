'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, LayoutDashboard } from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter
} from '@/components/ui/sidebar';
import type { User } from '@/lib/types';
import { cn } from '@/lib/utils';


export default function AppSidebar({ user }: { user: User }) {
  const pathname = usePathname();
  const dashboardPath = `/${user.role}`;

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href={dashboardPath} className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          <h1 className="text-lg font-semibold">Campus Pulse</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname.startsWith(dashboardPath)}
              className={cn(
                'group-data-[collapsible=icon]:justify-center'
              )}
            >
              <Link href={dashboardPath}>
                <LayoutDashboard />
                <span className="group-data-[collapsible=icon]:hidden">
                  Dashboard
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="group-data-[collapsible=icon]:hidden">
         <div className="text-xs text-center text-muted-foreground">
            &copy; 2024 Campus Pulse
         </div>
      </SidebarFooter>
    </Sidebar>
  );
}
