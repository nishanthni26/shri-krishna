
/**
 * @fileoverview This file is the Genkit API route for Next.js.
 */
import { nextHandler } from '@genkit-ai/next';
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

import '@/ai/flows/cow-chat-flow';

export const ai = genkit({
    plugins: [
        googleAI(),
    ],
    logLevel: 'debug',
    enableTracingAndMetrics: true,
});


export const { GET, POST } = nextHandler(ai);
