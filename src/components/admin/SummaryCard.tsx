import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { AdminSummary } from '@/lib/types';

type SummaryCardProps = {
  summary: AdminSummary;
};

export default function SummaryCard({ summary }: SummaryCardProps) {
  const isPositiveChange = summary.change.startsWith('+');

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{summary.title}</CardTitle>
        <summary.icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{summary.value}</div>
        <p className="text-xs text-muted-foreground">{summary.change}</p>
      </CardContent>
    </Card>
  );
}
