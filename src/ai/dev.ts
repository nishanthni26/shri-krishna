/**
 * @fileoverview This file is the development entry point for Genkit.
 */
import { ai } from '@/app/api/genkit/[...flow]/route';
import { run } from 'genkit/dev';

run(ai, {
    // Other options here...
})
