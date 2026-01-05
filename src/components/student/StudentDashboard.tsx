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
      <div className="p-6 bg-card border rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {user.name.split(' ')[0]}!
        </h1>
        <p className="text-muted-foreground mt-2">
          Share your progress to get personalized insights and thrive.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <StudentDataForm user={user} setUser={setUser} />
        </div>
        <div className="space-y-6">
           <h2 className="text-xl font-semibold">Your Insights</h2>
           {insights.length > 0 ? (
            insights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))
           ) : (
            <p className="text-muted-foreground">No insights to show yet. Fill out your data to get started!</p>
           )}
        </div>
      </div>
    </div>
  );
}
