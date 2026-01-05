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
  insight: z.string().describe('A concise, professional, supportive, non-judgmental, and preventive insight for administrators focusing on early intervention. It should be 2-3 sentences long.'),
});
export type AdminInsightOutput = z.infer<typeof AdminInsightOutputSchema>;


export async function generateAdminInsight(input: AdminInsightInput): Promise<AdminInsightOutput> {
  return generateAdminInsightFlow(input);
}

const adminInsightPrompt = ai.definePrompt({
  name: 'adminInsightPrompt',
  input: {schema: AdminInsightInputSchema},
  output: {schema: AdminInsightOutputSchema},
  prompt: `You are an AI assistant for university administrators. Your task is to analyze aggregated student data and generate a concise, preventive insight. Your tone must be professional, supportive, and non-judgmental. Focus on identifying potential risks and suggesting early intervention opportunities, not on diagnosing individuals.

  Analyze the following aggregated student data trends. Pay close attention to combined indicators, such as reduced sleep hours, high study load, and fluctuations in attendance, which could signal risks like student burnout or disengagement.

  Aggregated Data:
  {{#each studentData}}
  - Student Record: Sleep: {{sleepHours}}h/night, Study: {{studyHours}}h/day, Stress: {{stressLevel}}, Attendance: {{attendance}}%
  {{/each}}

  Based on your analysis, generate a 2-3 sentence insight. The insight should highlight a potential issue and suggest a proactive, supportive measure.

  Example Insight: "A pattern of decreased sleep and high study hours among a student group may indicate a risk of burnout. Proactively offering workshops on time management and stress reduction could support their well-being and academic success."
  `,
});

const generateAdminInsightFlow = ai.defineFlow(
  {
    name: 'generateAdminInsightFlow',
    inputSchema: AdminInsightInputSchema,
    outputSchema: AdminInsightOutputSchema,
  },
  async input => {
    // Add a delay to simulate a real AI call
    await new Promise(resolve => setTimeout(resolve, 1500));
    const {output} = await adminInsightPrompt(input);
    return output!;
  }
);
