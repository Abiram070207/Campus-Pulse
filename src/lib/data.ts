import {
  Users,
  BarChart,
  Heart,
  Zap,
} from 'lucide-react';
import type { AdminSummary, SystemAlert, User, StudentData } from './types';

export const studentUser: User = {
  name: 'Alex Johnson',
  email: 'alex.j@university.edu',
  avatarUrl: 'avatar-student',
  role: 'student',
  data: {
    sleep: {
      sleepHours: 6.5,
      lateNightStudy: 3,
      sleepQuality: 'average',
    },
    academics: {
      cgpa: 3.2,
      attendance: 85,
      studyHours: 4,
    },
    wellbeing: {
      stressLevel: 'medium',
      physicalHealth: 'average',
      exhaustionFrequency: 'sometimes',
    },
    social: {
      interactionFrequency: 3,
      clubParticipation: true,
      isolationFeeling: 'sometimes',
    },
    finance: {
      feeStress: true,
      partTimeWorkHours: 10,
      scholarshipAwareness: true,
    },
    sustainability: {
      recyclingFrequency: 'sometimes',
      awareOfInitiatives: false,
    }
  },
};

export const adminUser: User = {
  name: 'Dr. Evelyn Reed',
  email: 'e.reed@university.edu',
  avatarUrl: 'avatar-admin',
  role: 'admin',
};

export const studentData: StudentData[] = [
  {
    sleepHours: 6.5,
    studyHours: 4,
    stressLevel: 'medium',
    attendance: 85,
  },
  {
    sleepHours: 5,
    studyHours: 6,
    stressLevel: 'high',
    attendance: 75,
  },
  {
    sleepHours: 8,
    studyHours: 3,
    stressLevel: 'low',
    attendance: 95,
  }
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
