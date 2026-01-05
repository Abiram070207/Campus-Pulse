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
      sleepHours: 7.5,
      lateNightStudy: 2,
      sleepQuality: 'good',
    },
    academics: {
      cgpa: 3.5,
      attendance: 92,
      studyHours: 3,
    },
    wellbeing: {
      stressLevel: 'low',
      physicalHealth: 'good',
      exhaustionFrequency: 'rarely',
    },
    social: {
      interactionFrequency: 5,
      clubParticipation: true,
      isolationFeeling: 'no',
    },
    finance: {
      feeStress: false,
      partTimeWorkHours: 8,
      scholarshipAwareness: true,
    },
    sustainability: {
      recyclingFrequency: 'always',
      awareOfInitiatives: true,
    },
    goals: {
      studyHours: 5,
      sleepHours: 8,
    },
    checkInStreak: 7,
    historicalData: [
      { date: 'Mon', sleep: 7, study: 3 },
      { date: 'Tue', sleep: 6.5, study: 4 },
      { date: 'Wed', sleep: 8, study: 2 },
      { date: 'Thu', sleep: 7, study: 5 },
      { date: 'Fri', sleep: 6, study: 3 },
      { date: 'Sat', sleep: 9, study: 1 },
      { date: 'Sun', sleep: 7.5, study: 2 },
    ]
  },
};

export const adminUser: User = {
  name: 'Dr. Evelyn Reed',
  email: 'e.reed@university.edu',
  avatarUrl: 'avatar-admin',
  role: 'admin',
};

export const studentData: StudentData[] = [
  { id: 1, name: 'Alex Johnson', sleepHours: 7.5, studyHours: 3, stressLevel: 'low', attendance: 92, cgpa: 3.5 },
  { id: 2, name: 'Ben Carter', sleepHours: 6, studyHours: 5, stressLevel: 'medium', attendance: 85, cgpa: 3.1 },
  { id: 3, name: 'Chloe Davis', sleepHours: 5, studyHours: 7, stressLevel: 'high', attendance: 78, cgpa: 2.9 },
  { id: 4, name: 'David Evans', sleepHours: 8, studyHours: 2, stressLevel: 'low', attendance: 98, cgpa: 3.8 },
  { id: 5, name: 'Emily Frank', sleepHours: 6.5, studyHours: 4, stressLevel: 'medium', attendance: 89, cgpa: 3.3 },
];

export const adminSummaries: AdminSummary[] = [
  {
    id: 'student_engagement',
    title: 'Student Engagement',
    value: '88%',
    change: '+5% this week',
    icon: Users,
    changeType: 'positive',
  },
  {
    id: 'academic_performance',
    title: 'Avg. CGPA',
    value: '3.32',
    change: '+0.1 this month',
    icon: BarChart,
    changeType: 'positive',
  },
  {
    id: 'wellness_score',
    title: 'Avg. Wellness Score',
    value: '7.1/10',
    change: '-0.2 this month',
    icon: Heart,
    changeType: 'negative',
  },
  {
    id: 'interventions_triggered',
    title: 'Interventions Triggered',
    value: '47',
    change: '+5 this week',
    icon: Zap,
    changeType: 'negative',
  },
];

export const systemAlerts: SystemAlert[] = [
  {
    id: '1',
    message: 'High correlation found between low sleep hours and decreased academic performance.',
    severity: 'High',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    message: 'A subset of Business students are reporting high stress and low social interaction.',
    severity: 'Medium',
    timestamp: '22 hours ago',
  },
  {
    id: '3',
    message: 'Positive trend in sustainability awareness across all faculties.',
    severity: 'Low',
    timestamp: '2 days ago',
  },
];


export const academicPerformanceData = [
    { discipline: "Engineering", internal: 87, external: 80 },
    { discipline: "Arts", internal: 89, external: 84 },
    { discipline: "Science", internal: 84, external: 78 },
    { discipline: "Business", internal: 92, external: 87 },
    { discipline: "Medicine", internal: 83, external: 76 },
];

export const wellnessData = [
    { name: "Sleep", value: 40, label: "Sleep" },
    { name: "Exercise", value: 35, label: "Exercise" },
    { name: "Social", value: 25, label: "Social" },
];

export const universityResources = [
  { id: 'counseling', name: 'Counseling Services', url: '#' },
  { id: 'advising', name: 'Academic Advising', url: '#' },
  { id: 'financial_aid', name: 'Financial Aid Office', url: '#' },
  { id: 'career', name: 'Career Services', url: '#' },
];
