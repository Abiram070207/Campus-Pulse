import {
  BookOpen,
  Heart,
  DollarSign,
  Leaf,
  Users,
  TrendingUp,
  Bell,
  Activity,
  BarChart,
  Target,
  Smile,
  Zap,
} from 'lucide-react';
import type { StudentInsight, AdminSummary, SystemAlert, User } from './types';

export const studentUser: User = {
  name: 'Alex Johnson',
  email: 'alex.j@university.edu',
  avatarUrl: 'avatar-student',
  role: 'student',
  data: {
    academics: {
      internalMarks: 82,
      externalMarks: 75,
      attendance: 91,
    },
    wellbeing: {
      sleep: 6.5, // hours per night
      stressLevel: 4, // out of 10
    },
    finance: {
      scholarshipApplied: true,
      partTimeHours: 8,
    },
    health: {
      exercise: 3, // times per week
      yoga: 1, // times per week
    },
  },
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
    message: 'Your internal assessment scores are strong! Focus on external exams to boost your overall grade.',
    icon: Target,
    color: 'text-blue-500',
    isFocus: true,
  },
  {
    id: 'well-being',
    category: 'Well-being',
    message:
      'Average sleep is 6.5 hours. Aiming for 7-8 hours can improve focus and reduce stress.',
    icon: Smile,
    color: 'text-pink-500',
  },
  {
    id: 'finance',
    category: 'Finance',
    message:
      'Great job on securing a part-time job! Explore the new "Earn & Learn" grant for working students.',
    icon: DollarSign,
    color: 'text-green-500',
  },
  {
    id: 'health',
    category: 'Health',
    message:
      'You are exercising 3 times a week. Join the campus running club to stay motivated.',
    icon: Activity,
    color: 'text-orange-500',
  },
];

export const adminSummaries: AdminSummary[] = [
  {
    id: 'student_engagement',
    title: 'Student Engagement',
    value: '78%',
    change: '+3% this week',
    icon: Users,
  },
  {
    id: 'academic_performance',
    title: 'Academic Performance',
    value: '8.1/10',
    change: '+0.2 this month',
    icon: BarChart,
  },
  {
    id: 'wellness_score',
    title: 'Avg. Wellness Score',
    value: '6.7/10',
    change: '-0.5 this month',
    icon: Heart,
  },
  {
    id: 'interventions_triggered',
    title: 'Interventions Triggered',
    value: '42',
    change: '+8 this week',
    icon: Zap,
  },
];

export const systemAlerts: SystemAlert[] = [
  {
    id: '1',
    message: 'Significant increase in stress levels reported among first-year Computer Science students.',
    severity: 'High',
    timestamp: '3 hours ago',
  },
  {
    id: '2',
    message: 'Drop in attendance for early morning lectures in the Arts faculty.',
    severity: 'Medium',
    timestamp: '1 day ago',
  },
  {
    id: '3',
    message: 'Campus gym usage is down 15% compared to last month.',
    severity: 'Low',
    timestamp: '2 days ago',
  },
];

export const aggregatedData = {
  academicData:
    'Average internal marks are at 85%, but external marks are lagging at 72%. STEM students show higher attendance than Arts students.',
  wellbeingData:
    'Average sleep duration has dropped to 6.2 hours/night. Stress levels are highest among students with low academic performance.',
  financeData:
    '45% of students have applied for scholarships. There is a 20% increase in applications for on-campus jobs.',
  healthData:
    'Only 40% of students meet the recommended 3 exercise sessions per week. Yoga and meditation class attendance is up by 15%.',
};

export const academicPerformanceData = [
    { discipline: "Engineering", internal: 85, external: 78 },
    { discipline: "Arts", internal: 88, external: 82 },
    { discipline: "Science", internal: 82, external: 75 },
    { discipline: "Business", internal: 90, external: 85 },
    { discipline: "Medicine", internal: 81, external: 74 },
];

export const wellnessData = [
    { name: "Sleep", value: 35, label: "Sleep" },
    { name: "Exercise", value: 45, label: "Exercise" },
    { name: "Social", value: 20, label: "Social" },
];
