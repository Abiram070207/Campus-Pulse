'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { studentInsights } from '@/lib/data';

export default function TodaysFocus() {
    const focusInsight = studentInsights.find(i => i.isFocus) ?? studentInsights[0];

    return (
        <Card className="h-full bg-primary/10 border-primary/20 flex flex-col">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Star className="text-accent" />
                    Today's Focus
                </CardTitle>
                <CardDescription>Your top recommendation for today.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 justify-between">
                <div>
                    <h3 className="font-semibold text-lg text-primary">{focusInsight.category}</h3>
                    <p className="text-muted-foreground mt-2 text-base">
                        {focusInsight.message}
                    </p>
                </div>
                <Button className="w-full mt-6">
                    Learn More <ArrowRight className="ml-2" />
                </Button>
            </CardContent>
        </Card>
    )
}
