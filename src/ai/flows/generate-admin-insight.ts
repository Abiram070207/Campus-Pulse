'use server';

/**
 * @fileOverview A Genkit flow for generating admin insights based on aggregated student data.
 *
 * - generateAdminInsight - A function that generates a concise insight for administrators.
 * - AdminInsightInput - The input type for the generateAdminInsight function.
 * - AdminInsightOutput - The return type for the generateAdminInsight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import type { StudentData } from '@/lib/types';

const AdminInsightInputSchema = z.object({
  studentData: z.array(z.object({
    sleepHours: z.number(),
    studyHours: z.number(),
    stressLevel: z.enum(["low", "medium", "high"]),
    attendance: z.number(),
  })).describe('Aggregated student data including sleep, study hours, stress, and attendance.')
});

export type AdminInsightInput = z.infer<typeof AdminInsightInputSchema>;


const AdminInsightOutputSchema = z.object({
  insight: z.string().describe('A concise, professional, supportive, non-judgmental, and preventive insight for administrators focusing on early intervention.'),
});
export type AdminInsightOutput = z.infer<typeof AdminInsightOutputSchema>;


export async function generateAdminInsight(input: AdminInsightInput): Promise<AdminInsightOutput> {
  return generateAdminInsightFlow(input);
}

const adminInsightPrompt = ai.definePrompt({
  name: 'adminInsightPrompt',
  input: {schema: AdminInsightInputSchema},
  output: {schema: AdminInsightOutputSchema},
  prompt: `You are an AI assistant that analyzes aggregated student data and generates concise, preventive insights for university administrators. Your tone must be professional, supportive, and non-judgmental. Focus on early intervention opportunities, not diagnosis.

  Analyze the following aggregated student data trends. Look for combined indicators like reduced sleep, rising academic load, and attendance fluctuations to identify potential risks like student burnout.

  Data:
  {{#each studentData}}
  - Student: Sleep: {{sleepHours}}h/night, Study: {{studyHours}}h/day, Stress: {{stressLevel}}, Attendance: {{attendance}}%
  {{/each}}

  Based on your analysis, generate a 2-3 sentence insight.
  Example Insight: "Combined indicators of reduced sleep, rising academic load, and attendance fluctuations suggest early burnout risk. Introducing structured recovery breaks and flexible deadlines may improve student well-being and performance."
  `,
});

const generateAdminInsightFlow = ai.defineFlow(
  {
    name: 'generateAdminInsightFlow',
    inputSchema: AdminInsightInputSchema,
    outputSchema: AdminInsightOutputSchema,
  },
  async input => {
    const {output} = await adminInsightPrompt(input);
    return output!;
  }
);
