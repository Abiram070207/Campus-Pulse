'use client';

import { useAuth } from '@/hooks/use-auth';
import { adminUser } from '@/lib/data';
import DashboardLayout from '@/components/DashboardLayout';
import AdminDashboard from '@/components/admin/AdminDashboard';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminPage() {
  const { isLoading, isAuthorized } = useAuth('admin');

  if (isLoading || !isAuthorized) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout user={adminUser}>
      <AdminDashboard />
    </DashboardLayout>
  );
}
