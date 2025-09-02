
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Home, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const kripaSeva = [
    { title: "Dry Cake Seeds 30 kg", amount: 650, img: "https://picsum.photos/300/200", aiHint: "seeds donation" },
    { title: "Jaggery 40 Kg", amount: 1000, img: "https://picsum.photos/300/200", aiHint: "jaggery blocks" },
    { title: "Barley Flour 100 kg", amount: 2000, img: "https://picsum.photos/300/200", aiHint: "flour sack" },
    { title: "Green Grass for all cows (1 Day)", amount: 3100, img: "https://picsum.photos/300/200", aiHint: "green grass" },
    { title: "Medical Care for 1 Cow (1 Month)", amount: 1500, img: "https://picsum.photos/300/200", aiHint: "cow medicine" },
];

const kartavyaSeva = [
    { title: "Sponsor a Cow (1 Month)", amount: 5100, img: "https://picsum.photos/300/200", aiHint: "happy cow" },
    { title: "Sponsor a Cow (1 Year)", amount: 21000, img: "https://picsum.photos/300/200", aiHint: "cow family" },
    { title: "Gau Daan (Donate a Cow)", amount: 51000, img: "https://picsum.photos/300/200", aiHint: "person donating cow" },
];

export default function SevaPage() {
    const router = useRouter();

    const handleDonation = (amount: number) => {
        router.push(`/payment?amount=${amount}`);
    };

    const SevaCard = ({ title, amount, img, aiHint }: { title: string; amount: number; img: string; aiHint: string; }) => (
        <Card className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300 group bg-card">
            <div className="aspect-[3/2] overflow-hidden">
                <Image src={img} alt={title} width={300} height={200} className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-ai-hint={aiHint} />
            </div>
            <CardContent className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-primary flex-grow mb-2">{title}</h3>
                <div className="flex justify-between items-center mt-auto">
                    <p className="font-bold text-xl text-foreground">₹{amount.toLocaleString('en-IN')}</p>
                    <Button onClick={() => handleDonation(amount)} size="sm">Donate</Button>
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
            <section className="relative bg-muted/30">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 items-center gap-8">
                        <div className="py-12 md:py-20 text-left">
                            <h1 className="text-sm font-semibold uppercase tracking-widest text-secondary">Share the Joy of Giving</h1>
                            <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight mt-2">Feed Cows or Adopt a Cow</h2>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mt-6">
                                <div className="flex items-center gap-3 text-secondary-foreground bg-secondary/80 px-4 py-2 rounded-lg">
                                    <Heart className="w-8 h-8 text-red-400 fill-current" />
                                    <div>
                                        <p className="font-semibold">Served 200+ Crore</p>
                                        <p className="text-sm">Meals Globally</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-secondary-foreground bg-secondary/80 px-4 py-2 rounded-lg">
                                     <Heart className="w-8 h-8 text-red-400 fill-current" />
                                     <div>
                                        <p className="font-semibold">Serving 15,000</p>
                                        <p className="text-sm">Meals Daily</p>
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex h-full items-center justify-center">
                             <Image src="https://picsum.photos/500/500" alt="Cow" width={500} height={500} className="object-cover rounded-full shadow-2xl border-8 border-white" data-ai-hint="holy cow"/>
                        </div>
                    </div>
                 </div>
            </section>
            
            <section className="py-12 md:py-16 bg-background">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-8">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-1" />
                        <Link href="/seva" className="hover:text-primary">Donate</Link>
                        <ChevronRight className="w-4 h-4 mx-1" />
                        <span>Donate For Cow Service [Gau Seva]</span>
                    </div>

                    <div className="max-w-4xl mx-auto text-left">
                        <h2 className="text-2xl md:text-4xl font-bold text-primary">Donate For Cow Service (Gau Seva)</h2>
                        <p className="mt-4 text-foreground/80 text-base md:text-lg">
                            According to the Skanda Purana, even showing respect to cows can help cleanse our sinful acts. Performing cow seva or gau seva is not just an act of kindness — it's a sacred service that pleases Lord Krishna, who spent His divine childhood tending to cows in Vrindavan. If you've ever wished to make Kanha smile, start by caring for His beloved cows.
                        </p>
                        <p className="mt-4 text-foreground/80 text-base md:text-lg">
                           When you donate for cows or make a cow donation, you're offering more than charity — you're offering devotion. Your contribution helps feed, shelter, and protect these sacred beings with love, as a personal offering to Krishna. The Vedas describe cows as the Mothers of the Universe. Their presence is said to remove negative energies and bring divine blessings into your life. Begin your cow seva today — and let your seva reach Krishna's heart.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto mt-12">
                         <h3 className="text-xl md:text-3xl font-bold text-primary mb-8 text-center">One Day Maintenance Expenses</h3>
                         <Tabs defaultValue="kripa" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 max-w-sm mx-auto mb-8 bg-muted p-1 h-auto rounded-full">
                                <TabsTrigger value="kripa" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-full text-base py-2 transition-all duration-300">Kripa Seva</TabsTrigger>
                                <TabsTrigger value="kartavya" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-full text-base py-2 transition-all duration-300">Kartavya Seva</TabsTrigger>
                            </TabsList>
                            <TabsContent value="kripa">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {kripaSeva.map(seva => <SevaCard key={seva.title} {...seva} />)}
                                </div>
                            </TabsContent>
                            <TabsContent value="kartavya">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                     {kartavyaSeva.map(seva => <SevaCard key={seva.title} {...seva} />)}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                 </div>
            </section>
        </main>
    </div>
  );
}

    