import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, DollarSign, Heart, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { StudentInsight } from '@/lib/types';


const iconMap = {
  Academics: BookOpen,
  'Well-being': Heart,
  Finance: DollarSign,
  Sustainability: Leaf,
};

const colorMap = {
  Academics: 'text-blue-500',
  'Well-being': 'text-pink-500',
  Finance: 'text-green-500',
  Sustainability: 'text-teal-500',
}

type InsightCardProps = {
  insight: StudentInsight;
};

export default function InsightCard({ insight }: InsightCardProps) {
  const Icon = iconMap[insight.category] || BookOpen;
  const color = colorMap[insight.category] || 'text-muted-foreground';

  return (
    <Card className="flex h-full flex-col transition-transform hover:scale-[1.02] hover:shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{insight.category}</CardTitle>
        <Icon className={cn('h-5 w-5 text-muted-foreground', color)} />
      </CardHeader>
      <CardContent className="flex flex-1 items-center">
        <p className="text-sm text-muted-foreground">{insight.message}</p>
      </CardContent>
    </Card>
  );
}
