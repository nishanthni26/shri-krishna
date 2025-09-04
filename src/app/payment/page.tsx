
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, LogIn } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

function PaymentFormComponent() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const amountFromQuery = searchParams.get('amount');
    if (amountFromQuery) {
      setAmount(amountFromQuery);
    }
  }, [searchParams]);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseInt(amount) <= 0) {
         toast({
            variant: 'destructive',
            title: 'Invalid Amount',
            description: 'Please enter a valid donation amount.',
        });
        return;
    }
    toast({
      title: 'Payment Successful!',
      description: 'Thank you for your generous donation. Redirecting to your profile.',
    });
    router.push('/profile');
  };

  return (
    <div className="flex flex-col min-h-screen bg-secondary/10">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/gallery/logo.png?v=6"
                        alt="Goshala Logo"
                        width={56}
                        height={56}
                        className="object-contain"
                    />
                    <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                        Sri Krishna Goshala
                    </span>
                </Link>
                <nav className="flex items-center gap-2 md:gap-4">
                    <Button asChild variant="ghost" size="sm">
                        <Link href="/#seva" className="flex items-center gap-1">
                          <ArrowLeft className="w-4 h-4" />
                          Back to Sevas
                        </Link>
                    </Button>
                    <Button variant="outline" asChild size="sm">
                        <Link href="/login" className="flex items-center gap-1">
                            <LogIn className="w-4 h-4" />
                            Login
                        </Link>
                    </Button>
                </nav>
            </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
          <Card className="w-full max-w-lg shadow-2xl">
            <form onSubmit={handlePayment}>
              <CardHeader className="text-center">
                 <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Confirm Your Donation</CardTitle>
                 <CardDescription>Please provide your details to complete the donation.</CardDescription>
              </CardHeader>
              <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-2 text-center">
                       <Label htmlFor="amount" className="font-semibold text-lg">Donation Amount</Label>
                        <div className="relative max-w-xs mx-auto">
                           <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg font-semibold text-muted-foreground">₹</span>
                           <Input 
                                id="amount"
                                type="number" 
                                placeholder="Enter Amount" 
                                required 
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="text-center text-lg h-12 pl-8 font-bold"
                            />
                        </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                           <Label htmlFor="name">Full Name</Label>
                           <Input id="name" placeholder="Your Name" required />
                        </div>
                        <div className="grid gap-2">
                           <Label htmlFor="email">Email Address</Label>
                           <Input id="email" type="email" placeholder="your.email@example.com" required />
                        </div>
                    </div>
                     <div className="grid sm:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                           <Label htmlFor="phone">Phone Number</Label>
                           <Input id="phone" type="tel" placeholder="Your Phone Number" required />
                        </div>
                        <div className="grid gap-2">
                           <Label htmlFor="pan">PAN Number (Optional)</Label>
                           <Input id="pan" placeholder="For tax exemption" />
                        </div>
                    </div>
                  </div>
              </CardContent>
               <CardFooter className="mt-2 p-6 flex-col gap-4">
                    <Button type="submit" className="w-full text-lg" size="lg">Proceed to Pay ₹{amount || 0}</Button>
                    <p className="text-xs text-muted-foreground text-center">By clicking, you agree to our terms and conditions.</p>
                </CardFooter>
            </form>
          </Card>
        </main>
    </div>
  );
}

export default function PaymentPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PaymentFormComponent />
        </Suspense>
    )
}
