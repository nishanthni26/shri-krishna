'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/profile');
  };

  return (
    <div className="flex flex-col min-h-screen bg-secondary/30">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/gallery/cow-1.jpg"
              alt="Goshala Logo"
              width={48}
              height={48}
              className="rounded-full object-cover border-2 border-primary/50"
            />
            <span className="text-2xl font-bold text-foreground tracking-tight">
              Sri Krishna Goshala
            </span>
          </Link>
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-sm shadow-xl border-t-4 border-primary">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Welcome Back</CardTitle>
            <CardDescription>
              Enter your credentials to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full mt-2" size="lg">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
