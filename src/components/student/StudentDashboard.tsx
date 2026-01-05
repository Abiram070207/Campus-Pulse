'use client'
import { getStudentInsights } from '@/app/actions';
import {
  BookOpen,
  DollarSign,
  Heart,
  Leaf
} from 'lucide-react';
import type { StudentInsight, User } from '@/lib/types';
import InsightCard from './InsightCard';
import StudentDataForm from './StudentDataForm';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const iconMap = {
  Academics: BookOpen,
  'Well-being': Heart,
  Finance: DollarSign,
  Sustainability: Leaf,
};

export default function StudentDashboard({ user, setUser }: { user: User, setUser: (user: User) => void }) {
  const [insights, setInsights] = useState<StudentInsight[]>([]);

  useEffect(() => {
    async function fetchInsights() {
      const studentInsights = await getStudentInsights(user);
      const mappedInsights = studentInsights.map((insight: any) => ({
        ...insight,
        icon: iconMap[insight.category as keyof typeof iconMap]
      }));
      setInsights(mappedInsights);
    }
    fetchInsights();
  }, [user]);


  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-br from-primary/10 to-background shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">
            Welcome back, {user.name.split(' ')[0]}!
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground mt-2">
            Your daily check-in helps us help you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Share your progress to get personalized insights and thrive.</p>
        </CardContent>
      </Card>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <StudentDataForm user={user} setUser={setUser} />
        </div>
        <div className="space-y-6">
           <Card>
            <CardHeader>
              <CardTitle>Your Insights</CardTitle>
              <CardDescription>Actionable advice based on your input.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {insights.length > 0 ? (
                insights.map((insight) => (
                  <InsightCard key={insight.id} insight={insight} />
                ))
              ) : (
                <p className="text-muted-foreground">No insights to show yet. Fill out your data to get started!</p>
              )}
            </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
