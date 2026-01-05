'use client';

import { useAuth } from '@/hooks/use-auth';
import { studentUser } from '@/lib/data';
import DashboardLayout from '@/components/DashboardLayout';
import StudentDashboard from '@/components/student/StudentDashboard';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';
import type { User } from '@/lib/types';


export default function StudentPage() {
  const { isLoading, isAuthorized }_ = useAuth('student');
  const [user, setUser] = useState<User>(studentUser);

  // In a real app, you'd likely have a single `useAuth` hook that returns the user object.
  // We are using a local state here to simulate data updates.
  const isUserDataLoading = !user;


  if (isLoading || isUserDataLoading) {
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
    <DashboardLayout user={user}>
      <StudentDashboard user={user} setUser={setUser}/>
    </DashboardLayout>
  );
}
