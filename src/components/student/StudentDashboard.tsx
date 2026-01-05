import { studentInsights, studentUser } from '@/lib/data';
import InsightCard from './InsightCard';
import TodaysFocus from './TodaysFocus';

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      <div className="p-6 bg-card border rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {studentUser.name.split(' ')[0]}!
        </h1>
        <p className="text-muted-foreground mt-2">
          Here are your personalized insights to help you thrive.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {studentInsights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <TodaysFocus />
        </div>
      </div>
    </div>
  );
}
