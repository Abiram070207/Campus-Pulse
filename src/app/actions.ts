'use server';

import { generateAdminInsight } from '@/ai/flows/generate-admin-insight';
import { studentData } from '@/lib/data';
import type { StudentData as StudentDataType, User } from '@/lib/types';

export async function getAIInsight(data: StudentDataType[]) {
  try {
    if (typeof window !== 'undefined') {
      throw new Error('This action can only be run on the server');
    }

    const result = await generateAdminInsight({ studentData: data });
    if (!result || !result.insight) {
      return { error: 'The AI model did not return a valid insight.' };
    }
    return { insight: result.insight };
  } catch (error) {
    console.error('Error generating AI insight:', error);
    return { error: 'Failed to generate AI insight. Please try again later.' };
  }
}

export async function getStudentInsights(user: User) {
  // In a real app, this would be a more complex logic to generate insights
  // based on the user's data. For now, we'll return a few based on some rules.
  const insights = [];

  if (user.data.academics.cgpa < 3.0) {
    insights.push({
      id: 'academics_cgpa',
      category: 'Academics',
      message:
        'Your current CGPA is a bit low. Let\'s work on bringing it up. Have you considered forming a study group?',
      icon: 'BookOpen',
    });
  } else {
    insights.push({
      id: 'academics_cgpa_ok',
      category: 'Academics',
      message: 'You are doing great academically! Keep up the hard work.',
      icon: 'BookOpen',
    });
  }

  if (user.data.wellbeing.sleepHours < 6) {
    insights.push({
      id: 'wellbeing_sleep',
      category: 'Well-being',
      message:
        'Getting less than 6 hours of sleep can affect your studies. Try to get a bit more rest.',
      icon: 'Heart',
    });
  } else {
     insights.push({
      id: 'wellbeing_sleep_ok',
      category: 'Well-being',
      message:
        'You\'re getting a good amount of sleep. This is great for your well-being and academic performance.',
      icon: 'Heart',
    });
  }

  if (user.data.finance.feeStress) {
     insights.push({
      id: 'finance_stress',
      category: 'Finance',
      message:
        'Fee-related stress is common. The university has resources to help. Would you like to learn more?',
      icon: 'DollarSign',
    });
  }

  if (!user.data.sustainability.awareOfInitiatives) {
    insights.push({
      id: 'sustainability_awareness',
      category: 'Sustainability',
      message: 'Did you know about our campus sustainability initiatives? Check them out and get involved!',
      icon: 'Leaf'
    });
  }

  return insights.slice(0, 4);
}
