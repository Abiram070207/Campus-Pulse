'use client';

import { useEffect, useState, useTransition } from 'react';
import { Lightbulb, AlertTriangle, RefreshCw } from 'lucide-react';
import { getAIInsight } from '@/app/actions';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { studentData as allStudentData } from '@/lib/data';
import type { StudentData } from '@/lib/types';
import { Button } from '../ui/button';
import { toast } from '@/hooks/use-toast';

export default function AIInsight() {
  const [insight, setInsight] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const fetchInsight = () => {
    startTransition(async () => {
      setError('');
      setInsight('');
      const data: Omit<StudentData, 'id' | 'name' | 'cgpa'>[] = allStudentData.map(d => ({
        sleepHours: d.sleepHours,
        studyHours: d.studyHours,
        stressLevel: d.stressLevel,
        attendance: d.attendance,
      }));
      const result = await getAIInsight(data);
      if (result.error) {
        setError(result.error);
      } else if (result.insight) {
        setInsight(result.insight);
      }
    });
  }

  useEffect(() => {
    fetchInsight();
  }, []);

  const handleRefresh = () => {
    toast({
      title: 'Refreshing Insight...',
      description: 'New AI-powered analysis is on its way.'
    })
    fetchInsight();
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-1.5">
          <CardTitle className="text-base font-medium">AI Insight Summary</CardTitle>
        </div>
        <Lightbulb className="h-5 w-5 text-accent" />
      </CardHeader>
      <CardContent className="flex-1">
        {isPending ? (
          <div className="space-y-2 pt-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : error ? (
          <Alert variant="destructive" className="mt-2">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <p className="text-sm text-muted-foreground pt-2">{insight}</p>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleRefresh} disabled={isPending} size="sm" className="w-full">
            <RefreshCw className={`mr-2 h-4 w-4 ${isPending ? 'animate-spin' : ''}`} />
            {isPending ? 'Generating...' : 'Refresh Insight'}
        </Button>
      </CardFooter>
    </Card>
  );
}
