'use server';

/**
 * @fileOverview A resume customization AI agent.
 *
 * - customizeResume - A function that handles the resume customization process.
 * - CustomizeResumeInput - The input type for the customizeResume function.
 * - CustomizeResumeOutput - The return type for the customizeResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CustomizeResumeInputSchema = z.object({
  resumeText: z.string().describe('The original text of Arya M\'s resume.'),
  companyDescription: z
    .string()
    .describe('A description of the company viewing the resume.'),
  jobDescription: z.string().describe('The description of the job being applied for.'),
});
export type CustomizeResumeInput = z.infer<typeof CustomizeResumeInputSchema>;

const CustomizeResumeOutputSchema = z.object({
  customizedResume: z
    .string()
    .describe('The customized resume text tailored to the company.'),
});
export type CustomizeResumeOutput = z.infer<typeof CustomizeResumeOutputSchema>;

export async function customizeResume(input: CustomizeResumeInput): Promise<CustomizeResumeOutput> {
  return customizeResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'customizeResumePrompt',
  input: {schema: CustomizeResumeInputSchema},
  output: {schema: CustomizeResumeOutputSchema},
  prompt: `You are an expert resume writer, skilled at tailoring resumes to specific companies and job descriptions.

You will be provided with the original resume text, a description of the company viewing the resume, and the description of the job being applied for.

Your task is to rewrite the resume to highlight the skills and experience that are most relevant to the company and the job, using the company and job descriptions as context.

Original Resume:
{{resumeText}}

Company Description:
{{companyDescription}}

Job Description:
{{jobDescription}}

Customized Resume:
`,
});

const customizeResumeFlow = ai.defineFlow(
  {
    name: 'customizeResumeFlow',
    inputSchema: CustomizeResumeInputSchema,
    outputSchema: CustomizeResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
