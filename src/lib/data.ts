import {
  BookOpen,
  Heart,
  DollarSign,
  Leaf,
  Users,
  TrendingUp,
  Bell,
  Lightbulb,
} from 'lucide-react';
import type { StudentInsight, AdminSummary, SystemAlert, User } from './types';

export const studentUser: User = {
  name: 'Alex Johnson',
  email: 'alex.j@university.edu',
  avatarUrl: 'avatar-student',
  role: 'student',
};

export const adminUser: User = {
  name: 'Dr. Evelyn Reed',
  email: 'e.reed@university.edu',
  avatarUrl: 'avatar-admin',
  role: 'admin',
};

export const studentInsights: StudentInsight[] = [
  {
    id: 'academics',
    category: 'Academics',
    message: 'Your library visits are up 15% this month. Keep up the great work!',
    icon: BookOpen,
    color: 'text-blue-500',
  },
  {
    id: 'well-being',
    category: 'Well-being',
    message:
      'Your sleep seems irregular. Try the campus yoga session this Wednesday for better rest.',
    icon: Heart,
    color: 'text-pink-500',
  },
  {
    id: 'finance',
    category: 'Finance',
    message:
      'You might be eligible for the "Innovator\'s Scholarship". The deadline is next Friday.',
    icon: DollarSign,
    color: 'text-green-500',
  },
  {
    id: 'sustainability',
    category: 'Sustainability',
    message:
      "You've saved 5kg of CO2 this week by using campus bikes. Great job!",
    icon: Leaf,
    color: 'text-teal-500',
  },
];

export const adminSummaries: AdminSummary[] = [
  {
    id: 'attendance',
    title: 'Attendance Risk',
    value: '12%',
    change: '+2% this week',
    icon: Users,
  },
  {
    id: 'energy',
    title: 'Avg. Energy Usage',
    value: '8.2 kWh/dorm',
    change: '-5% this week',
    icon: TrendingUp,
  },
  {
    id: 'support',
    title: 'Support Signals',
    value: '87',
    change: '+15 new signals',
    icon: Bell,
  },
  {
    id: 'interventions',
    title: 'Active Interventions',
    value: '214',
    change: '45 resolved',
    icon: Lightbulb,
  },
];

export const systemAlerts: SystemAlert[] = [
  {
    id: '1',
    message: 'Unusual drop in Engineering building attendance after 8 PM.',
    severity: 'Medium',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    message: 'High concentration of financial stress signals from graduate dorms.',
    severity: 'High',
    timestamp: '8 hours ago',
  },
  {
    id: '3',
    message: 'Library water fountains reported as offline.',
    severity: 'Low',
    timestamp: '1 day ago',
  },
  {
    id: '4',
    message: 'Spike in late-night study sessions reported across campus.',
    severity: 'Medium',
    timestamp: '2 days ago',
  },
];

// Data for AI Insight generation
export const aggregatedData = {
    academicData: 'Overall attendance is stable at 92%, but there is a 15% drop in evening classes for STEM subjects. Library usage is up by 10%.',
    wellbeingData: 'Reports of burnout and stress have increased by 5% this month, concentrated in final-year students. Sleep tracking data shows an average of 5.5 hours/night, down from 6 hours.',
    financeData: '30% increase in searches for "student loans" and "part-time jobs" on the campus portal. Scholarship applications are down 10%.',
    sustainabilityData: 'Campus energy consumption is down by 4% due to the new solar panel initiative. However, waste production in cafeterias is up by 8%.',
};
