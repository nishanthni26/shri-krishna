
'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const galleryImages = Array.from({ length: 20 }, (_, i) => ({
  src: `/gallery/G${i + 1}.png`,
  alt: `Goshala gallery image ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/gallery/logo.png?v=3"
              alt="Goshala Logo"
              width={64}
              height={64}
              className="p-1 bg-logo-background rounded-full object-cover"
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
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2">Our Gallery</h1>
            <p className="text-md md:text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
                Explore moments of peace, love, and daily life at Sri Krishna Goshala.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {galleryImages.map((image) => (
                    <div key={image.src} className="overflow-hidden rounded-lg group aspect-w-1 aspect-h-1 border-4 border-white shadow-lg hover:shadow-primary/30 transition-all duration-300">
                         <Image
                            src={image.src}
                            alt={image.alt}
                            width={400}
                            height={400}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform"
                         />
                    </div>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}

