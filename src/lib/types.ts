import type { LucideIcon } from 'lucide-react';

export interface StudentInsight {
  id: string;
  category: 'Academics' | 'Well-being' | 'Finance' | 'Health';
  message: string;
  icon: LucideIcon;
  color: string;
  isFocus?: boolean;
}

export interface AdminSummary {
  id:string;
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export interface SystemAlert {
  id: string;
  message: string;
  severity: 'Low' | 'Medium' | 'High';
  timestamp: string;
}

export interface User {
  name: string;
  email: string;
  avatarUrl: string;
  role: 'student' | 'admin';
  data?: {
    academics: {
      internalMarks: number;
      externalMarks: number;
      attendance: number;
    },
    wellbeing: {
      sleep: number;
      stressLevel: number;
    },
    finance: {
      scholarshipApplied: boolean;
      partTimeHours: number;
    },
    health: {
      exercise: number;
      yoga: number;
    }
  }
}
