'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { academicPerformanceData } from '@/lib/data';

export default function AcademicPerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Academic Performance</CardTitle>
        <CardDescription>Average scores across disciplines</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            internal: {
              label: 'Internal Marks',
              color: 'hsl(var(--chart-1))',
            },
            external: {
              label: 'External Marks',
              color: 'hsl(var(--chart-2))',
            },
          }}
          className="min-h-[200px] w-full"
        >
          <BarChart accessibilityLayer data={academicPerformanceData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="discipline"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="internal" fill="var(--color-internal)" radius={4} />
            <Bar dataKey="external" fill="var(--color-external)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Engineering scores are trending up by 5.2% this quarter <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing average performance for all students
        </div>
      </CardFooter>
    </Card>
  );
}
