
'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const galleryImages = Array.from({ length: 15 }, (_, i) => ({
  src: `/gallery/a${i + 1}.png`,
  alt: `Goshala gallery image a${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/10">
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
            <p className="text-md md:text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
                Explore moments of peace, love, and daily life at Sri Krishna Goshala.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
                {galleryImages.map((image) => (
                    <div key={image.src} className="overflow-hidden rounded-lg group aspect-w-1 aspect-h-1 border-2 border-white shadow-lg hover:shadow-primary/30 transition-all duration-300">
                         <Image
                            src={image.src}
                            alt={image.alt}
                            width={300}
                            height={300}
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
