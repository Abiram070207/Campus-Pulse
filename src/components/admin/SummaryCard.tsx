import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { AdminSummary } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ArrowDownRight, ArrowUpRight, LucideIcon } from 'lucide-react';

type SummaryCardProps = {
  summary: AdminSummary;
};

export default function SummaryCard({ summary }: SummaryCardProps) {
  const isPositive = summary.changeType ? summary.changeType === 'positive' : summary.change.startsWith('+');
  const Icon: LucideIcon = summary.icon;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{summary.title}</CardTitle>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{summary.value}</div>
        <div className="flex items-center text-xs text-muted-foreground">
          <span className={cn('flex items-center gap-1', isPositive ? 'text-green-600' : 'text-red-600')}>
            {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
            {summary.change}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
