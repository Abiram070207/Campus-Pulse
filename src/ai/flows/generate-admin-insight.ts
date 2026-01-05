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
  academicData: z.string().describe('Aggregated academic data of students.'),
  wellbeingData: z.string().describe('Aggregated wellbeing data of students.'),
  financeData: z.string().describe('Aggregated finance related data of students.'),
  sustainabilityData: z.string().describe('Aggregated sustainability data of students.'),
});
export type AdminInsightInput = z.infer<typeof AdminInsightInputSchema>;

const AdminInsightOutputSchema = z.object({
  insight: z.string().describe('A concise, professional insight for administrators.'),
});
export type AdminInsightOutput = z.infer<typeof AdminInsightOutputSchema>;

export async function generateAdminInsight(input: AdminInsightInput): Promise<AdminInsightOutput> {
  return generateAdminInsightFlow(input);
}

const adminInsightPrompt = ai.definePrompt({
  name: 'adminInsightPrompt',
  input: {schema: AdminInsightInputSchema},
  output: {schema: AdminInsightOutputSchema},
  prompt: `You are an AI assistant that analyzes aggregated student data and generates concise insights for administrators.

  Analyze the following data and provide a 2-3 sentence insight that is preventive and advisory in tone.

  Academic Data: {{{academicData}}}
  Wellbeing Data: {{{wellbeingData}}}
  Finance Data: {{{financeData}}}
  Sustainability Data: {{{sustainabilityData}}}
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
