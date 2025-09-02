
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const sevaOptions = [
    { title: "A cow’s expenditure per day", amount: 1100, img: "https://picsum.photos/400/300", aiHint: "cow eating" },
    { title: "Monthly expense of a cow", amount: 5100, img: "https://picsum.photos/400/300", aiHint: "happy cow" },
    { title: "Annual cost of a cow", amount: 21000, img: "https://picsum.photos/400/300", aiHint: "cow family" },
    { title: "Donation of a cow (Gau Daan)", amount: 51000, img: "https://picsum.photos/400/300", aiHint: "person donating cow" },
    { title: "Cow’s Health Checkup", amount: 2500, img: "https://picsum.photos/400/300", aiHint: "cow medicine" },
    { title: "Green Grass Contribution", amount: 3100, img: "https://picsum.photos/400/300", aiHint: "green grass" },
    { title: "Dry Cake Seeds 30 kg", amount: 650, img: "https://picsum.photos/400/300", aiHint: "seeds donation" },
    { title: "Jaggery 40 Kg", amount: 1000, img: "https://picsum.photos/400/300", aiHint: "jaggery blocks" },
    { title: "Barley Flour 100 kg", amount: 2000, img: "https://picsum.photos/400/300", aiHint: "flour sack" },
];

export default function SevaPage() {
    const router = useRouter();

    const handleDonation = (amount: number) => {
        router.push(`/payment?amount=${amount}`);
    };

    const SevaCard = ({ title, amount, img, aiHint }: { title: string; amount: number; img: string; aiHint: string; }) => (
        <Card className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 group bg-card flex flex-col">
            <div className="aspect-[4/3] overflow-hidden">
                <Image src={img} alt={title} width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-ai-hint={aiHint} />
            </div>
            <CardHeader className="flex-grow">
                <CardTitle className="text-xl text-primary">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <p className="font-bold text-2xl text-foreground">₹{amount.toLocaleString('en-IN')}</p>
                    <Button onClick={() => handleDonation(amount)}>Donate</Button>
                </div>
            </CardContent>
        </Card>
    );

  return (
    <div className="flex flex-col min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/gallery/logo.png?v=3" alt="Goshala Logo" width={56} height={56} className="p-1 bg-logo-background rounded-full object-cover" />
                    <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">Sri Krishna Goshala</span>
                </Link>
                <Button asChild variant="ghost">
                    <Link href="/" className="flex items-center gap-2"> <Home className="w-4 h-4" /> Back to Home </Link>
                </Button>
            </div>
        </header>

        <main className="flex-1">
            <section className="py-12 md:py-20 text-center bg-primary/5">
                 <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-primary">Offer Your Seva</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        Your selfless service helps us provide the best care for our cows. Choose a Seva below and become a part of our family.
                    </p>
                 </div>
            </section>
            
            <section className="py-12 md:py-16 bg-background">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {sevaOptions.map(seva => <SevaCard key={seva.title} {...seva} />)}
                    </div>
                 </div>
            </section>
        </main>
    </div>
  );
}

    