'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

// Mock data for user profile and donation history
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
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
             <Image
              src="/gallery/cow-1.jpg"
              alt="Goshala Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className="text-2xl font-bold text-foreground">
              Sri Krishna Goshala
            </span>
          </Link>
          <Button asChild variant="outline">
            <Link href="/">Logout</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8">
        <div className="container mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <Avatar className="h-24 w-24 border-4 border-primary">
                <AvatarImage src={userProfile.avatarUrl} alt={userProfile.name} data-ai-hint="smiling person" />
                <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-3xl">{userProfile.name}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">{userProfile.email}</CardDescription>
                <p className="text-sm text-muted-foreground mt-1">Joined on {new Date(userProfile.joinDate).toLocaleDateString()}</p>
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Donation History</h3>
              <div className="space-y-4">
                {donationHistory.map((donation) => (
                  <Card key={donation.id} className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div className="flex-1">
                      <p className="font-bold text-primary">{donation.type}</p>
                      <p className="text-sm text-muted-foreground">ID: {donation.id} | Date: {donation.date}</p>
                    </div>
                    <div className="text-right">
                       <p className="text-xl font-bold">{donation.amount}</p>
                       <Badge>{donation.status}</Badge>
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
