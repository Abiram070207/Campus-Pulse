'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type Role = 'student' | 'admin';

export function useAuth(requiredRole: Role) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let storedRole: string | null = null;
    try {
      storedRole = localStorage.getItem('userRole');
    } catch (e) {
      console.error('Could not access localStorage.');
      router.push('/login');
      return;
    }

    if (!storedRole) {
      router.push('/login');
    } else if (storedRole !== requiredRole) {
      // Redirect to the correct dashboard if the role is mismatched
      const targetPath = storedRole === 'student' ? '/student' : '/admin';
      if (pathname !== targetPath) {
        router.push(targetPath);
      }
    } else {
      setIsAuthorized(true);
    }
    setIsLoading(false);
  }, [router, pathname, requiredRole]);

  return { isLoading, isAuthorized };
}
