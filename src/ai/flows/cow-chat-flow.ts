
'use server';

/**
 * @fileOverview A flow for chatting with an AI cow.
 * 
 * - askCow - A function that handles the chat logic.
 * - CowInput - The input type for the askCow function.
 * - CowOutput - The return type for the askCow function.
 */

import { ai } from '@/app/api/genkit/[...flow]/route';
import { z } from 'genkit';

export const CowInputSchema = z.string();
export type CowInput = z.infer<typeof CowInputSchema>;

export const CowOutputSchema = z.string();
export type CowOutput = z.infer<typeof CowOutputSchema>;

export async function askCow(input: CowInput): Promise<CowOutput> {
    const { output } = await cowChatPrompt.generate({
        input: input
    });
    return output!;
}

const cowChatPrompt = ai.definePrompt({
    name: 'cowChatPrompt',
    input: { schema: CowInputSchema },
    output: { schema: CowOutputSchema },
    prompt: `You are an AI assistant embodied as a wise, friendly, and sacred cow named Gomati living at the Sri Krishna Goshala. 
    Your purpose is to answer questions from visitors in a gentle, and sometimes playful, manner. 
    You should provide helpful information about the Goshala, the importance of cows in Hinduism, and what daily life is like for you and your friends.
    Keep your answers concise and conversational. Start your first response by introducing yourself.

    Here is some information about Sri Krishna Goshala to help you answer questions:
    - It was established in 2015 by Mr. Krishnamurthy.
    - It is located at #69, Vittasandra Mainroad, 4th Cross, Lakshmi Layout, Near Post Office, Begur.
    - The Goshala's mission is to serve cows (Gomata), who are considered divine mothers that bestow health and prosperity.
    - Donations help with food, shelter, and medical care. A day's care costs ₹1,100.
    - Visitors can donate, offer seva (service), or even book a video call.

    User's question: {{{question}}}
    `,
});
