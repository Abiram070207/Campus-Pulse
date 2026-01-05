'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';

type PersonalChartProps = {
    data: { date: string, sleep: number, study: number }[];
}

export default function PersonalChart({ data }: PersonalChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Weekly Summary</CardTitle>
        <CardDescription>Sleep vs. Study Hours</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            sleep: {
              label: 'Sleep',
              color: 'hsl(var(--chart-1))',
            },
            study: {
              label: 'Study',
              color: 'hsl(var(--chart-2))',
            },
          }}
          className="min-h-[300px] w-full"
        >
          <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey="date" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="sleep" fill="var(--color-sleep)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="study" fill="var(--color-study)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
