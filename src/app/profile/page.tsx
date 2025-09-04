
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { DollarSign, LogOut, Award } from 'lucide-react';

const userProfile = {
  name: 'Krishna Das',
  email: 'krishna.das@example.com',
  avatarUrl: 'https://placehold.co/100x100.png',
  joinDate: '2023-01-15',
};

const donationHistory = [
  { id: 'DON-001', date: '2024-05-20', type: 'Go-Grasa Seva', amount: '₹1,100', status: 'Completed' },
  { id: 'DON-002', date: '2024-04-15', type: 'Medical Seva', amount: '₹2,100', status: 'Completed' },
  { id: 'DON-003', date: '2024-03-10', type: 'Gau Daan', amount: '₹21,000', status: 'Completed' },
  { id: 'DON-004', date: '2024-02-01', type: 'Video Seva', amount: '₹1,100', status: 'Completed' },
];

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/10">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
             <Image
              src="/gallery/logo.png?v=7"
              alt="Goshala Logo"
              width={56}
              height={56}
              className="object-contain"
            />
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
              Sri Krishna Goshala
            </span>
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link href="/" className="flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                Logout
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-2xl border-t-4 border-primary">
            <CardHeader className="flex flex-col items-center text-center gap-4 p-6">
              <Avatar className="h-24 w-24 border-4 border-primary/20">
                <AvatarImage src={userProfile.avatarUrl} alt={userProfile.name} data-ai-hint="smiling person" />
                <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-3xl font-bold text-primary">{userProfile.name}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{userProfile.email}</CardDescription>
                <p className="text-sm text-muted-foreground mt-1">Devotee since {new Date(userProfile.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 text-primary-foreground border border-primary/20 rounded-lg px-4 py-2">
                <Award className="w-6 h-6 text-primary"/>
                <span className="font-semibold text-primary text-base">Gold Donor</span>
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-3 text-primary">
                <DollarSign className="w-6 h-6" />
                Donation History
              </h3>
              <div className="space-y-3">
                {donationHistory.map((donation) => (
                  <Card key={donation.id} className="p-3 bg-background border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3">
                      <div className="flex-1">
                        <p className="font-bold text-primary">{donation.type}</p>
                        <p className="text-xs text-muted-foreground">Date: {new Date(donation.date).toLocaleDateString()}</p>
                      </div>
                      <div className="text-left sm:text-right mt-2 sm:mt-0">
                         <p className="text-lg font-bold text-foreground">{donation.amount}</p>
                         <Badge variant={donation.status === 'Completed' ? 'default' : 'secondary'} className="bg-green-100 text-green-800 border border-green-300 font-semibold text-xs mt-1 sm:mt-0">
                           {donation.status}
                         </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

    