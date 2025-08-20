'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { GalleryVertical, Palette, LogOut, Upload, Trash2, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useToast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


const initialGalleryImages = [
  { src: "/gallery/cow-1.jpg", alt: "Happy Cow"},
  { src: "/gallery/cow-2.jpg", alt: "Grazing Cow"},
  { src: "/gallery/cow-3.jpg", alt: "Calf Playing"},
  { src: "/gallery/cow-4.jpg", alt: "Cow Herd"},
];

export default function AdminDashboardPage() {
  const [galleryImages, setGalleryImages] = useState(initialGalleryImages);
  const [customCss, setCustomCss] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleAddImage = () => {
    if (newImageUrl.trim()) {
      setGalleryImages([...galleryImages, { src: newImageUrl, alt: "Newly Added Cow" }]);
      setNewImageUrl('');
      setIsDialogOpen(false);
      toast({
        title: 'Image Added',
        description: 'The new image has been added to the gallery.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Invalid URL',
        description: 'Please enter a valid image URL.',
      });
    }
  };
  
  const handleRemoveImage = (index: number) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index));
     toast({
        title: 'Image Removed',
        description: 'The image has been removed from the gallery.',
      });
  };

  const handleSaveCss = () => {
    try {
      const styleElement = document.createElement('style');
      styleElement.id = 'custom-admin-styles';
      styleElement.innerHTML = customCss;
      
      const existingStyleElement = document.getElementById('custom-admin-styles');
      if (existingStyleElement) {
        existingStyleElement.replaceWith(styleElement);
      } else {
        document.head.appendChild(styleElement);
      }
      
      toast({
        title: 'CSS Applied',
        description: 'Your custom styles have been applied successfully.',
      });
    } catch (error) {
       toast({
        variant: 'destructive',
        title: 'CSS Error',
        description: 'There was an error applying your custom CSS.',
      });
      console.error('Failed to apply custom CSS:', error);
    }
  };

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
          <Button variant="secondary" className="justify-start gap-2">
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
                    <Button variant="destructive" size="icon" onClick={() => handleRemoveImage(index)}>
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                   <button className="flex flex-col items-center justify-center w-full h-full min-h-[150px] border-2 border-dashed rounded-lg hover:bg-accent hover:border-primary transition-colors">
                      <Plus className="h-8 w-8 text-muted-foreground" />
                      <span className="mt-2 text-sm font-semibold text-muted-foreground">Add Image</span>
                   </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add New Gallery Image</DialogTitle>
                    <DialogDescription>
                      Enter the URL of the image you want to add to the gallery.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="imageUrl" className="text-right">
                        Image URL
                      </Label>
                      <Input
                        id="imageUrl"
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                        className="col-span-3"
                        placeholder="https://placehold.co/400x400.png"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={handleAddImage}>Save image</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Palette className="h-6 w-6" />
              Edit Website CSS
            </CardTitle>
            <CardDescription>Apply custom CSS styles to your website. Changes are live but not saved permanently.</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea 
              placeholder="/* Example: body { background-color: #f0f0f0; } */" 
              className="min-h-[200px] font-mono"
              value={customCss}
              onChange={(e) => setCustomCss(e.target.value)}
            />
            <Button className="mt-4" onClick={handleSaveCss}>
              Apply CSS
            </Button>
          </CardContent>
        </Card>

      </main>
    </div>
  );
}
