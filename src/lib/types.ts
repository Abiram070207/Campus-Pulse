import type { LucideIcon } from 'lucide-react';

export interface StudentInsight {
  id: string;
  category: 'Academics' | 'Well-being' | 'Finance' | 'Sustainability';
  message: string;
  icon: LucideIcon;
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
  data?: any;
}

export interface StudentData {
  sleepHours: number;
  studyHours: number;
  stressLevel: 'low' | 'medium' | 'high';
  attendance: number;
}
