'use client';

import { useAuth } from '@/hooks/use-auth';
import { studentUser as initialStudentUser } from '@/lib/data';
import DashboardLayout from '@/components/DashboardLayout';
import StudentDashboard from '@/components/student/StudentDashboard';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';
import type { User } from '@/lib/types';


export default function StudentPage() {
  const { isLoading, isAuthorized } = useAuth('student');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulate fetching user data. In a real app this might be an API call.
    // We use a try-catch block for localStorage to avoid issues during server-side rendering.
    try {
      const storedUser = localStorage.getItem('studentUserData');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(initialStudentUser);
      }
    } catch (e) {
      setUser(initialStudentUser);
    }
  }, []);

  const handleSetUser = (updatedUser: User) => {
    setUser(updatedUser);
    try {
      localStorage.setItem('studentUserData', JSON.stringify(updatedUser));
    } catch (e) {
      console.error("Could not save user data to localStorage", e);
    }
  }

  if (isLoading || !isAuthorized || !user) {
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
      <StudentDashboard user={user} setUser={handleSetUser}/>
    </DashboardLayout>
  );
}
