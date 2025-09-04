
'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Video, CameraOff, LogIn, ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import Image from 'next/image';

export default function VideoSevaPage() {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const getCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setHasCameraPermission(true);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description: 'Please enable camera and microphone permissions in your browser settings to participate in Video Seva.',
        });
      }
    };

    getCameraPermission();
    
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [toast]);

  return (
    <div className="flex flex-col min-h-screen bg-secondary/10">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
             <Image 
                src="/gallery/logo.png?v=4" 
                alt="Goshala Logo"
                width={56} 
                height={56} 
                className="p-1 bg-logo-background rounded-full object-cover"
            />
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
              Sri Krishna Goshala
            </span>
          </Link>
           <nav className="flex items-center gap-2">
              <Button asChild size="sm">
                 <Link href="/" className="flex items-center gap-1">
                    <ArrowLeft className="w-4 h-4" />
                    Home
                 </Link>
              </Button>
              <Button variant="ghost" asChild size="sm">
                <Link href="/login" className="flex items-center gap-1">
                    <LogIn className="w-4 h-4" />
                    Login
                </Link>
              </Button>
           </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl shadow-2xl">
          <CardHeader className="text-center p-4 md:p-6">
            <CardTitle className="text-xl md:text-3xl font-bold flex items-center justify-center gap-2 text-primary">
              <Video className="w-6 h-6" />
              Live Video Seva
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 md:p-6">
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative flex items-center justify-center border-2 border-primary">
              <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
              {hasCameraPermission === false && (
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-white p-4 text-center">
                    <CameraOff className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold">Camera Access Required</h3>
                    <p className="text-muted-foreground text-sm mt-2">Please allow camera access in your browser to start.</p>
                 </div>
              )}
               {hasCameraPermission === null && (
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-white p-4">
                    <p className="text-base">Requesting camera permission...</p>
                 </div>
              )}
            </div>
            {hasCameraPermission === false && (
              <Alert variant="destructive" className="mt-4">
                <AlertTitle>Action Required</AlertTitle>
                <AlertDescription>
                  Grant camera permissions and refresh the page.
                </AlertDescription>
              </Alert>
            )}
            {hasCameraPermission === true && (
                <div className="text-center mt-4">
                    <p className="text-base text-muted-foreground">You are now connected.</p>
                </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
