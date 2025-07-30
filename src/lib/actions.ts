'use server';

import { askKrishna, type AskKrishnaOutput } from '@/ai/flows/ask-krishna';

interface ActionResult {
    success: boolean;
    data?: AskKrishnaOutput;
    error?: string;
}

export async function handleAskKrishna(
    prevState: any,
    formData: FormData,
): Promise<ActionResult> {
    const question = formData.get('question') as string;

    if (!question || question.trim().length === 0) {
        return { success: false, error: 'Please enter a question.' };
    }

    try {
        const result = await askKrishna({ question });
        return { success: true, data: result };
    } catch (e) {
        console.error(e);
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
        return { success: false, error: errorMessage };
    }
}
