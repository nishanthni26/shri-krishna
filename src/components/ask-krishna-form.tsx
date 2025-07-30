'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleAskKrishna } from '@/lib/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
import { LotusIcon } from './icons/lotus-icon';
import { Loader2 } from 'lucide-react';

const initialState = {
    success: false,
    data: undefined,
    error: undefined,
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={pending} className="w-full sm:w-auto text-base">
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Asking Krishna...
                </>
            ) : (
                'Ask Krishna'
            )}
        </Button>
    );
}

export function AskKrishnaForm() {
    const [state, formAction] = useFormState(handleAskKrishna, initialState);
    const formRef = useRef<HTMLFormElement>(null);
    const resultRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (state.success) {
            formRef.current?.reset();
        }
        if (state.success || state.error) {
            setTimeout(() => {
                resultRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [state.success, state.error]);

    return (
        <div className="space-y-8">
            <Card className="max-w-3xl mx-auto border-primary/50 shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-center">Pose Your Question</CardTitle>
                    <CardDescription className="text-center">
                        Seek wisdom about the sacred cow from Krishna himself.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form ref={formRef} action={formAction} className="space-y-4">
                        <Textarea
                            name="question"
                            placeholder="What is the significance of the cow in our scriptures?"
                            required
                            rows={4}
                            className="text-base"
                        />
                        <div className="flex justify-center pt-2">
                            <SubmitButton />
                        </div>
                    </form>
                </CardContent>
            </Card>

            <div ref={resultRef} className="scroll-mt-24">
                {state.error && 
                    <Card className="max-w-3xl mx-auto border-destructive/50 bg-destructive/10">
                        <CardHeader>
                            <CardTitle className="text-destructive text-center">An Error Occurred</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-destructive text-center">{state.error}</p>
                        </CardContent>
                    </Card>
                }

                {state.data?.answer && (
                    <Card className="max-w-3xl mx-auto bg-primary/10 border-primary/20">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <LotusIcon className="w-10 h-10 text-primary flex-shrink-0" />
                            <div>
                                <CardTitle className="font-headline text-2xl text-primary">Krishna's Wisdom</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="prose text-lg leading-relaxed">
                                {state.data.answer.split('\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
