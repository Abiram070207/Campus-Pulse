import { Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { SystemAlert } from '@/lib/types';
import { cn } from '@/lib/utils';

const severityMap = {
  Low: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  High: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
};

export default function Alerts({ alerts }: { alerts: SystemAlert[] }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base font-medium">
          <Bell className="h-5 w-5" />
          System Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {alerts.map((alert) => (
            <li key={alert.id} className="flex items-start gap-4">
              <div
                className={cn(
                  'mt-1 h-2 w-2 rounded-full',
                  alert.severity === 'High' && 'bg-destructive',
                  alert.severity === 'Medium' && 'bg-accent',
                  alert.severity === 'Low' && 'bg-primary/50'
                )}
              />
              <div className="flex-1">
                <p className="text-sm">{alert.message}</p>
                <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{alert.timestamp}</span>
                  <span className="text-xs">&bull;</span>
                  <Badge
                    variant="outline"
                    className={cn(
                      'border text-xs font-normal',
                      severityMap[alert.severity]
                    )}
                  >
                    {alert.severity}
                  </Badge>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
