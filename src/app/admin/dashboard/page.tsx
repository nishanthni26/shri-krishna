'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { GalleryVertical, Palette, LogOut, Upload, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  { src: "/gallery/cow-1.jpg", alt: "Happy Cow"},
  { src: "/gallery/cow-2.jpg", alt: "Grazing Cow"},
  { src: "/gallery/cow-3.jpg", alt: "Calf Playing"},
  { src: "/gallery/cow-4.jpg", alt: "Cow Herd"},
];

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <aside className="hidden w-64 flex-col border-r bg-background p-4 sm:flex">
        <div className="flex items-center gap-3 mb-8">
            <Image 
              src="/gallery/cow-1.jpg" 
              alt="Goshala Logo" 
              width={48} 
              height={48} 
              className="rounded-full object-cover" 
            />
            <span className="text-xl font-bold text-primary">Admin Panel</span>
        </div>
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start gap-2">
            <GalleryVertical className="h-5 w-5" />
            Manage Gallery
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <Palette className="h-5 w-5" />
            Custom CSS
          </Button>
        </nav>
        <div className="mt-auto">
          <Button variant="outline" className="w-full justify-start gap-2" asChild>
             <Link href="/">
                <LogOut className="h-5 w-5" />
                Logout
            </Link>
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <GalleryVertical className="h-6 w-6" />
              Manage Gallery Images
            </CardTitle>
            <CardDescription>Add or remove images from the website's gallery.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="destructive" size="icon">
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button>
              <Upload className="h-5 w-5 mr-2" />
              Add New Image
            </Button>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Palette className="h-6 w-6" />
              Edit Website CSS
            </CardTitle>
            <CardDescription>Apply custom CSS styles to your website. Use with caution.</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea 
              placeholder="/* Example: body { background-color: #f0f0f0; } */" 
              className="min-h-[200px] font-mono"
            />
            <Button className="mt-4">
              Save CSS
            </Button>
          </CardContent>
        </Card>

      </main>
    </div>
  );
}
