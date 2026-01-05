'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Bed, BookOpen } from "lucide-react";

type GoalTrackerProps = {
    goals: {
        sleepHours: number;
        studyHours: number;
    };
    current: {
        sleep: number;
        study: number;
    }
}

export default function GoalTracker({ goals, current }: GoalTrackerProps) {
    const sleepProgress = Math.min((current.sleep / goals.sleepHours) * 100, 100);
    const studyProgress = Math.min((current.study / goals.studyHours) * 100, 100);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Weekly Goals
                </CardTitle>
                <CardDescription>Your progress towards your weekly goals.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                        <p className="flex items-center gap-2"><Bed className="h-4 w-4 text-muted-foreground"/>Sleep</p>
                        <p className="font-medium">{current.sleep} / <span className="text-muted-foreground">{goals.sleepHours} hrs</span></p>
                    </div>
                    <Progress value={sleepProgress} />
                </div>
                 <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                        <p className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-muted-foreground"/>Study</p>
                        <p className="font-medium">{current.study} / <span className="text-muted-foreground">{goals.studyHours} hrs</span></p>
                    </div>
                    <Progress value={studyProgress} indicatorClassName="bg-chart-2" />
                </div>
            </CardContent>
        </Card>
    )
}
