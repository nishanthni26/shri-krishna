
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart } from 'lucide-react';

const cows = [
  {
    name: 'Ganga',
    breed: 'Gir',
    story: 'Ganga is the gentle matriarch of our herd. Rescued from a busy city street, she now enjoys a peaceful life, watching over the younger calves with a calm and loving demeanor. Her favorite pastime is being gently brushed.',
    imageUrl: 'https://picsum.photos/400/400',
    aiHint: 'white cow',
  },
  {
    name: 'Nandi',
    breed: 'Hallikar',
    story: 'Nandi is a majestic and strong bull with a playful heart. He loves attention and can often be found near the entrance, greeting visitors. He has a particular fondness for fresh jaggery (gur) as a treat.',
    imageUrl: 'https://picsum.photos/400/400',
    aiHint: 'majestic bull',
  },
  {
    name: 'Yamuna',
    breed: 'Sahiwal',
    story: 'Yamuna is a sweet and shy cow who arrived at our goshala as a young calf. She is incredibly curious and loves exploring the pastures. Her best friend is a little calf named Krishna, and they are inseparable.',
    imageUrl: 'https://picsum.photos/400/400',
    aiHint: 'brown cow',
  },
  {
    name: 'Krishna',
    breed: 'Mixed Breed',
    story: 'Krishna is the youngest and most mischievous member of our family. He is full of energy and loves to play with a hanging bell. He was born at the Goshala and is doted on by all the other cows.',
    imageUrl: 'https://picsum.photos/400/400',
    aiHint: 'small calf',
  },
   {
    name: 'Saraswati',
    breed: 'Gir',
    story: 'Saraswati is known for her serene and calm nature. She spends her days peacefully grazing and seems to radiate a sense of tranquility to all around her. She is often sought out by visitors for a moment of peace.',
    imageUrl: 'https://picsum.photos/400/400',
    aiHint: 'serene cow',
  },
   {
    name: 'Balaram',
    breed: 'Kangayam',
    story: 'Balaram is strong and protective, especially of the younger calves. Despite his powerful build, he is incredibly gentle with children and enjoys being hand-fed leafy greens by our smaller visitors.',
    imageUrl: 'https://picsum.photos/400/400',
    aiHint: 'strong bull',
  },
];

export default function OurCowsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/gallery/logo.png?v=2"
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

      <main className="flex-1 p-4 md:p-8">
        <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2">Meet Our Beloved Cows</h1>
            <p className="text-md md:text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
                Each member of our Goshala family has a unique story. Get to know the gentle souls you are supporting through your seva.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {cows.map((cow) => (
                    <Card key={cow.name} className="flex flex-col text-left overflow-hidden shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
                       <div className="aspect-square overflow-hidden">
                         <Image
                            src={cow.imageUrl}
                            alt={`A photo of ${cow.name}`}
                            width={400}
                            height={400}
                            className="object-cover w-full h-full"
                            data-ai-hint={cow.aiHint}
                         />
                       </div>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-primary">{cow.name}</CardTitle>
                            <CardDescription className="font-semibold text-secondary">{cow.breed}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-foreground/90">{cow.story}</p>
                        </CardContent>
                        <div className="p-6 pt-0">
                             <Button asChild className="w-full group">
                                <Link href="/payment">
                                    Sponsor {cow.name} <Heart className="w-4 h-4 ml-2 group-hover:fill-red-500 transition-colors" />
                                </Link>
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}
