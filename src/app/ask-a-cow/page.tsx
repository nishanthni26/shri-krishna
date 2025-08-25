
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Send, MessageSquare } from 'lucide-react';
import { askCow } from '@/ai/flows/cow-chat-flow';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


type Message = {
    text: string;
    sender: 'user' | 'cow';
};

export default function AskCowPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { text: input, sender: 'user' };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await askCow(input);
            const cowMessage: Message = { text: response, sender: 'cow' };
            setMessages((prev) => [...prev, cowMessage]);
        } catch (error) {
            console.error(error);
            toast({
                variant: 'destructive',
                title: 'Something went wrong',
                description: 'Could not get a response from the cow. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-secondary/50">
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
                <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="Goshala Logo"
                            width={48}
                            height={48}
                            className="rounded-full object-cover border-2 border-primary/20"
                        />
                        <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                            Sri Krishna Goshala
                        </span>
                    </Link>
                    <Button asChild variant="ghost">
                        <Link href="/" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </header>

            <main className="flex-1 flex items-center justify-center p-4">
                <Card className="w-full max-w-2xl shadow-2xl h-[70vh] flex flex-col">
                    <CardHeader className="text-center border-b">
                        <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center justify-center gap-2">
                            <MessageSquare /> Talk to a Sacred Cow
                        </CardTitle>
                        <CardDescription>
                            Ask questions and get wisdom from our AI cow, Gomati.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                        {messages.length === 0 && (
                            <div className="text-center text-muted-foreground">
                                Ask a question to start the conversation! For example: "What is your name?"
                            </div>
                        )}
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                                {msg.sender === 'cow' && (
                                    <Avatar>
                                        <AvatarImage src="/logo.png" alt="Cow" />
                                        <AvatarFallback>🐮</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                                {msg.sender === 'user' && (
                                     <Avatar>
                                        <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="person icon" />
                                        <AvatarFallback>You</AvatarFallback>
                                    </Avatar>
                                )}
                            </div>
                        ))}
                         {isLoading && (
                             <div className="flex items-start gap-3">
                                 <Avatar>
                                     <AvatarImage src="/logo.png" alt="Cow" />
                                     <AvatarFallback>🐮</AvatarFallback>
                                 </Avatar>
                                 <div className="rounded-lg px-4 py-2 max-w-[80%] bg-muted">
                                     <p className="text-sm">Moo-ing a thought over...</p>
                                 </div>
                             </div>
                         )}
                    </CardContent>
                    <div className="border-t p-4">
                        <div className="flex items-center gap-2">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask something..."
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                disabled={isLoading}
                            />
                            <Button onClick={handleSend} disabled={isLoading}>
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </Card>
            </main>
        </div>
    );
}
