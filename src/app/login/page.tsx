
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { LogIn } from 'lucide-react';

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
    <div className="flex flex-col min-h-screen">
       <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="Goshala Logo"
                        width={48}
                        height={48}
                        className="rounded-full object-cover border-2 border-primary/20"
                    />
                    <span className="text-2xl font-bold text-primary tracking-tight">
                        Sri Krishna Goshala
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-4">
                    <Button asChild variant="ghost">
                        <Link href="/">Back to Home</Link>
                    </Button>
                </nav>
            </div>
      </header>
      <div className="w-full lg:grid lg:grid-cols-2 flex-1">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <form onSubmit={handleLogin} className="grid gap-4">
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
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link href="#" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <Image
            src="/gallery/cow-herd.jpg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            data-ai-hint="cows pasture"
          />
        </div>
      </div>
    </div>
  );
}
