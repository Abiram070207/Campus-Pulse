import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { StudentInsight } from '@/lib/types';
import { cn } from '@/lib/utils';

type InsightCardProps = {
  insight: StudentInsight;
};

export default function InsightCard({ insight }: InsightCardProps) {
  return (
    <Card className="flex h-full flex-col transition-transform hover:scale-[1.02] hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{insight.category}</CardTitle>
        <insight.icon className={cn('h-5 w-5 text-muted-foreground', insight.color)} />
      </CardHeader>
      <CardContent className="flex flex-1 items-center">
        <p className="text-sm text-muted-foreground">{insight.message}</p>
      </CardContent>
    </Card>
  );
}
