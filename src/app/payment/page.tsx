
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, LogIn, Sun, Calendar, HeartHandshake, Users, Leaf } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { Separator } from '@/components/ui/separator';

const sevaOptions = [
  { icon: Sun, title: "One Day's Care", description: "Feed a cow for a day", amount: 1100 },
  { icon: Calendar, title: "One Month's Care", description: "Support a cow for a month", amount: 5100 },
  { icon: HeartHandshake, title: "Gau Daan", description: "Donate a cow to the Goshala", amount: 51000 },
  { icon: Users, title: "Health Checkup", description: "Fund a veterinary checkup", amount: 2500 },
  { icon: Leaf, title: "Green Fodder", description: "Provide nutritious green fodder", amount: 3100 },
];

function PaymentFormComponent() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  useEffect(() => {
    const amountFromQuery = searchParams.get('amount');
    if (amountFromQuery) {
      const parsedAmount = parseInt(amountFromQuery, 10);
      setAmount(amountFromQuery);
      setSelectedAmount(parsedAmount);
    }
  }, [searchParams]);

  const handleAmountClick = (newAmount: number) => {
    setAmount(String(newAmount));
    setSelectedAmount(newAmount);
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue) && sevaOptions.some(o => o.amount === numericValue)) {
      setSelectedAmount(numericValue);
    } else {
      setSelectedAmount(null);
    }
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Payment Successful!',
      description: 'Thank you for your generous donation. Redirecting to your profile.',
    });
    router.push('/profile');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/gallery/logo.png?v=3"
                        alt="Goshala Logo"
                        width={56}
                        height={56}
                        className="p-1 bg-logo-background rounded-full object-cover"
                    />
                    <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                        Sri Krishna Goshala
                    </span>
                </Link>
                <nav className="flex items-center gap-2 md:gap-4">
                    <Button asChild variant="ghost" size="sm">
                        <Link href="/" className="flex items-center gap-1">
                          <ArrowLeft className="w-4 h-4" />
                          Back
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
       <section className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542233639-839c0993558a?q=80&w=2072&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">Donate for Gau Seva</h1>
            <p className="text-lg md:text-xl mt-2">Your Support Makes a Divine Difference</p>
          </div>
       </section>

        <main className="flex-1 container mx-auto p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl">
              <CardHeader className="text-center">
                 <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Choose Your Seva</CardTitle>
                 <CardDescription>Every contribution, big or small, helps us care for our sacred cows.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-6">
                    {sevaOptions.map(option => {
                        const Icon = option.icon;
                        return (
                            <button key={option.amount} onClick={() => handleAmountClick(option.amount)} className={`p-3 rounded-lg border-2 text-center transition-all duration-300 flex flex-col items-center justify-center h-full ${selectedAmount === option.amount ? 'bg-primary/10 border-primary shadow-lg' : 'bg-muted/50 hover:border-primary/50'}`}>
                               <Icon className="w-8 h-8 md:w-10 md:h-10 mb-2 text-primary" />
                               <span className="font-semibold text-sm md:text-base text-foreground">{option.title}</span>
                               <span className="font-bold text-lg md:text-xl text-primary mt-1">₹{option.amount.toLocaleString('en-IN')}</span>
                            </button>
                        )
                    })}
                </div>

                <form onSubmit={handlePayment}>
                  <div className="grid gap-6">
                    <div className="grid gap-2 text-center">
                       <Label htmlFor="amount" className="font-semibold text-lg">Or Enter a Custom Amount</Label>
                        <div className="relative max-w-xs mx-auto">
                           <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg font-semibold text-muted-foreground">₹</span>
                           <Input 
                                id="amount"
                                type="number" 
                                placeholder="Enter Amount" 
                                required 
                                value={amount}
                                onChange={handleCustomAmountChange}
                                className="text-center text-lg h-12 pl-8"
                            />
                        </div>
                    </div>

                    <Separator />
                    
                    <h3 className="text-xl font-bold text-center text-primary">Donor Information</h3>
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
                           <Input id="pan" placeholder="Your PAN" />
                        </div>
                    </div>
                  </div>
                   <CardFooter className="mt-8 p-0 flex-col gap-4">
                        <Button type="submit" className="w-full text-lg" size="lg">Proceed to Donate</Button>
                        <p className="text-xs text-muted-foreground text-center">By clicking, you agree to our terms and conditions.</p>
                    </CardFooter>
                </form>

              </CardContent>
            </Card>

            <div className="bg-dotted-pattern my-8">
              <div className="container mx-auto max-w-4xl p-6 md:p-8 bg-background/90 rounded-lg">
                <h2 className="text-2xl font-bold text-center text-primary mb-6">Direct Bank Transfer</h2>
                 <div className="grid md:grid-cols-2 gap-8 items-center">
                   <div className="space-y-3 text-base">
                      <p><b>Account Name:</b> SRI KRISHNA GOSHALA TRUST</p>
                      <p><b>Account Number:</b> 9552000100048201</p>
                      <p><b>Bank Name:</b> Karnataka Bank</p>
                      <p><b>Branch:</b> Akshya Nagar, Bangalore</p>
                      <p><b>IFSC Code:</b> KARB0000955</p>
                   </div>
                   <div className="flex justify-center">
                     <Image src="https://placehold.co/150x150.png" alt="QR Code for Donation" width={150} height={150} data-ai-hint="qr code" />
                   </div>
                 </div>
                 <p className="text-center text-sm text-muted-foreground mt-6">After making a direct transfer, please email your transaction details to srikrishnagaushalablr@gmail.com for the receipt.</p>
              </div>
            </div>

          </div>
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
