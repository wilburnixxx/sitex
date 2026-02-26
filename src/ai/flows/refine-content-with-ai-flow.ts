'use server';
/**
 * @fileOverview An AI content refiner agent.
 *
 * - refineContentWithAI - A function that refines content for conciseness and impact.
 * - RefineContentWithAIInput - The input type for the refineContentWithAI function.
 * - RefineContentWithAIOutput - The return type for the refineContentWithAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineContentWithAIInputSchema = z.object({
  content: z.string().describe('The content to be refined.'),
  context: z
    .string()
    .optional()
    .describe(
      'Optional context for refinement (e.g., "project description", "About Me section").'
    ),
});
export type RefineContentWithAIInput = z.infer<
  typeof RefineContentWithAIInputSchema
>;

const RefineContentWithAIOutputSchema = z.object({
  refinedContent: z.string().describe('The refined and improved content.'),
});
export type RefineContentWithAIOutput = z.infer<
  typeof RefineContentWithAIOutputSchema
>;

export async function refineContentWithAI(
  input: RefineContentWithAIInput
): Promise<RefineContentWithAIOutput> {
  return refineContentWithAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'refineContentWithAIPrompt',
  input: {schema: RefineContentWithAIInputSchema},
  output: {schema: RefineContentWithAIOutputSchema},
  prompt: `You are an AI content refiner. Your goal is to improve the provided text for conciseness and impact, making it more engaging and professional.

${'{{#if context}}'}The content is part of a ${'{{{context}}}'}.${'{{/if}}'}

Refine the following content:

---
${'{{{content}}}'}
---

Provide the refined content in the 'refinedContent' field.
`,
});

const refineContentWithAIFlow = ai.defineFlow(
  {
    name: 'refineContentWithAIFlow',
    inputSchema: RefineContentWithAIInputSchema,
    outputSchema: RefineContentWithAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
