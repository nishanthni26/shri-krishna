
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';
import { CreditCard, LogIn, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const { toast } = useToast();
  const router = useRouter();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Payment Successful!',
      description: 'Thank you for your generous donation. Redirecting to your profile.',
    });
    router.push('/profile');
  };

  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/gallery/logo.png"
                        alt="Goshala Logo"
                        width={48}
                        height={48}
                        className="rounded-full object-cover border-2 border-primary/20"
                    />
                    <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                        Sri Krishna Goshala
                    </span>
                </Link>
                <nav className="flex items-center gap-2 md:gap-4">
                    <Button asChild variant="ghost">
                        <Link href="/" className="flex items-center gap-1 md:gap-2">
                          <ArrowLeft className="w-4 h-4" />
                          Back
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/login" className="flex items-center gap-1 md:gap-2">
                            <LogIn className="w-4 h-4 md:w-5 md:h-5" />
                            Login
                        </Link>
                    </Button>
                </nav>
            </div>
      </header>
        <main className="flex-1 flex items-center justify-center p-4">
            <Card className="w-full max-w-md shadow-2xl">
                <form onSubmit={handlePayment}>
                    <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Make a Donation</CardTitle>
                        <CardDescription>
                            Your contribution helps us care for our sacred cows.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 md:gap-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" placeholder="Krishna" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input id="last-name" placeholder="Das" required />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="devotee@example.com" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="amount">Donation Amount (₹)</Label>
                            <Input id="amount" type="number" placeholder="5100" required />
                        </div>
                         <div className="grid gap-2">
                            <Label>Payment Method</Label>
                            <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-2 md:gap-4">
                                <div>
                                    <RadioGroupItem value="card" id="card" className="peer sr-only" />
                                    <Label htmlFor="card" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 md:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                        <CreditCard className="mb-2 h-5 w-5 md:mb-3 md:h-6 md:w-6" />
                                        Card
                                    </Label>
                                </div>
                                <div>
                                    <RadioGroupItem value="upi" id="upi" className="peer sr-only" />
                                    <Label htmlFor="upi" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 md:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 h-5 w-5 md:mb-3 md:h-6 md:w-6"><path d="M3 10h18"/><path d="m16 6 4 4-4 4"/><path d="M8 18 4 14l4-4"/></svg>
                                        UPI
                                    </Label>
                                </div>
                                <div>
                                    <RadioGroupItem value="netbanking" id="netbanking" className="peer sr-only" />
                                    <Label htmlFor="netbanking" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 md:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 h-5 w-5 md:mb-3 md:h-6 md:w-6"><path d="M12 21V3"/><path d="m5 12 7-7 7 7"/></svg>
                                        NetBanking
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">Pay Now</Button>
                    </CardFooter>
                </form>
            </Card>
        </main>
    </div>
  );
}
