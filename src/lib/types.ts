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
  changeType?: 'positive' | 'negative';
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
  id: number;
  name: string;
  sleepHours: number;
  studyHours: number;
  stressLevel: 'low' | 'medium' | 'high';
  attendance: number;
  cgpa: number;
}

export interface Goal {
  type: 'sleep' | 'study';
  value: number;
}