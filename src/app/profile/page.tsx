
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
              src="/gallery/logo.png?v=3"
              alt="Goshala Logo"
              width={64}
              height={64}
              className="p-1 bg-primary rounded-full object-cover"
            />
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
              Sri Krishna Goshala
            </span>
          </Link>
          <Button asChild variant="outline">
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
            <CardHeader className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6 p-6 md:p-8">
              <Avatar className="h-20 w-20 md:h-24 md:w-24 border-4 border-primary/20">
                <AvatarImage src={userProfile.avatarUrl} alt={userProfile.name} data-ai-hint="smiling person" />
                <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-3xl md:text-4xl font-bold text-primary">{userProfile.name}</CardTitle>
                <CardDescription className="text-md md:text-lg text-muted-foreground">{userProfile.email}</CardDescription>
                <p className="text-sm text-muted-foreground mt-1">Devotee since {new Date(userProfile.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 text-primary-foreground border border-primary/20 rounded-lg px-3 py-1 md:px-4 md:py-2">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-primary"/>
                <span className="font-semibold text-primary text-sm md:text-base">Gold Donor</span>
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-3 text-primary">
                <DollarSign className="w-5 h-5 md:w-6 md:h-6" />
                Donation History
              </h3>
              <div className="space-y-4">
                {donationHistory.map((donation) => (
                  <Card key={donation.id} className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-background border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex-1 mb-2 sm:mb-0">
                      <p className="font-bold text-primary">{donation.type}</p>
                      <p className="text-xs text-muted-foreground">ID: {donation.id} | Date: {new Date(donation.date).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                       <p className="text-lg font-bold text-foreground flex-1 sm:flex-none">{donation.amount}</p>
                       <Badge variant={donation.status === 'Completed' ? 'default' : 'secondary'} className="bg-green-100 text-green-800 border border-green-300 font-semibold text-xs">
                         {donation.status}
                       </Badge>
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
    