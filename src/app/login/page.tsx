'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Building2, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ThemeToggle from '@/components/ThemeToggle';

export default function LoginPage() {
  const [role, setRole] = useState<'student' | 'admin' | ''>('');
  const router = useRouter();

  const handleLogin = () => {
    if (!role) return;
    try {
      localStorage.setItem('userRole', role);
      router.push(`/${role}`);
    } catch (e) {
      console.error('Could not access localStorage.');
      // Handle error, maybe show a toast
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center justify-end px-6">
        <ThemeToggle />
      </header>
      <main className="flex flex-1 items-center justify-center p-4">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Building2 className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl">Welcome to Campus Pulse</CardTitle>
            <CardDescription>Select your role to sign in</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="role-select">Role</Label>
                <Select
                  onValueChange={(value: 'student' | 'admin') => setRole(value)}
                  value={role}
                >
                  <SelectTrigger id="role-select">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleLogin} disabled={!role} className="w-full">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
