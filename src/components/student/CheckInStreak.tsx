import { Flame } from "lucide-react";
import { Card } from "../ui/card";

export default function CheckInStreak({ streak }: { streak: number }) {
  return (
    <div className="flex items-center gap-2 text-orange-500">
        <Flame className="h-8 w-8"/>
        <div className="text-center">
            <p className="text-2xl font-bold">{streak}</p>
            <p className="text-xs font-medium -mt-1">Day Streak</p>
        </div>
    </div>
  );
}
