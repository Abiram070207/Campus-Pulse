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
import GoalTracker from './GoalTracker';
import CheckInStreak from './CheckInStreak';
import ResourceHub from './ResourceHub';
import PersonalChart from './PersonalChart';

const iconMap = {
  Academics: BookOpen,
  'Well-being': Heart,
  Finance: DollarSign,
  Sustainability: Leaf,
};

const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
}

export default function StudentDashboard({ user, setUser }: { user: User, setUser: (user: User) => void }) {
  const [insights, setInsights] = useState<StudentInsight[]>([]);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    setGreeting(getGreeting());

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
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-3xl font-bold tracking-tight">
                {greeting}, {user.name.split(' ')[0]}!
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground mt-2">
                Your daily check-in helps us help you.
              </CardDescription>
            </div>
            <CheckInStreak streak={user.data.checkInStreak} />
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
            <StudentDataForm user={user} setUser={setUser} />
            <PersonalChart data={user.data.historicalData} />
        </div>
        <div className="space-y-6">
           <Card>
            <CardHeader>
              <CardTitle>Your Insights</CardTitle>
              <CardDescription>Actionable advice based on your input.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {insights.length > 0 ? (
                insights.map((insight) => (
                  <InsightCard key={insight.id} insight={insight} />
                ))
              ) : (
                <p className="text-muted-foreground">No insights to show yet. Fill out your data to get started!</p>
              )}
            </CardContent>
           </Card>
           <GoalTracker goals={user.data.goals} current={{sleep: user.data.sleep.sleepHours, study: user.data.academics.studyHours}} />
           <ResourceHub />
        </div>
      </div>
    </div>
  );
}
