// @ts-nocheck
'use server';

import { generateAdminInsight } from '@/ai/flows/generate-admin-insight';
import { aggregatedData } from '@/lib/data';

export async function getAIInsight() {
  try {
    // This is a server-side only check to prevent the flow from running in the browser
    if (typeof window !== 'undefined') {
      throw new Error('This action can only be run on the server');
    }

    const result = await generateAdminInsight(aggregatedData);
    if (!result || !result.insight) {
        return { error: 'The AI model did not return a valid insight.' };
    }
    return { insight: result.insight };
  } catch (error) {
    console.error('Error generating AI insight:', error);
    // Return a user-friendly error message
    return { error: 'Failed to generate AI insight. Please try again later.' };
  }
}
