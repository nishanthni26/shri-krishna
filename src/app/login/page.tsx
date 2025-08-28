
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'admin') {
      toast({
        title: 'Admin Login Successful',
        description: 'Redirecting to admin dashboard...',
      });
      router.push('/admin/dashboard');
    } else if (email && password) {
       toast({
        title: 'Login Successful',
        description: 'Redirecting to your profile...',
      });
      router.push('/profile');
    } else {
       toast({
        variant: 'destructive',
        title: 'Invalid Credentials',
        description: 'Please check your email and password.',
      });
    }
  };

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
                <nav className="flex items-center gap-4">
                    <Button asChild variant="ghost">
                         <Link href="/" className="flex items-center gap-2">
                          <ArrowLeft className="w-4 h-4" />
                          Back to Home
                        </Link>
                    </Button>
                </nav>
            </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-sm shadow-2xl">
          <form onSubmit={handleLogin}>
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="m@example.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button type="submit" className="w-full">Sign in</Button>
               <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{' '}
                <Link href="#" className="underline">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  );
}
