import { studentInsights, studentUser } from '@/lib/data';
import InsightCard from './InsightCard';

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Hello, {studentUser.name.split(' ')[0]}!
        </h1>
        <p className="text-muted-foreground">
          Here are your personalized insights for today.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {studentInsights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  );
}
