
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SchoolVisitPage() {
  const [date, setDate] = useState<Date | undefined>();
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    const form = e.target as HTMLFormElement;
    const schoolName = (form.elements.namedItem('school-name') as HTMLInputElement).value;
    const contactPerson = (form.elements.namedItem('contact-person') as HTMLInputElement).value;
    
    if (!schoolName || !contactPerson || !date) {
        toast({
            variant: 'destructive',
            title: 'Missing Information',
            description: 'Please fill out all required fields, including the date.',
        });
        return;
    }

    toast({
      title: 'Request Submitted!',
      description: 'Thank you for your interest. We will contact you shortly to confirm your visit.',
    });
    
    form.reset();
    setDate(undefined);
  };

  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/gallery/logo.png?v=2"
              alt="Goshala Logo"
              width={64}
              height={64}
              className="p-1 bg-secondary rounded-full object-cover"
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

      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl shadow-2xl">
          <form onSubmit={handleSubmit}>
            <CardHeader className="text-center md:text-left">
              <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Request a School Farm Visit</CardTitle>
              <CardDescription>
                Fill out the form below to organize an educational trip for your students.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="school-name">School Name</Label>
                  <Input id="school-name" placeholder="e.g., Vidya Mandir School" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-person">Contact Person</Label>
                  <Input id="contact-person" placeholder="e.g., Mrs. Priya Sharma" required />
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="priya.sharma@example.com" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="e.g., 9876543210" required />
                    </div>
                 </div>
                 <div className="grid gap-2">
                    <Label htmlFor="student-count">Number of Students</Label>
                    <Input id="student-count" type="number" placeholder="e.g., 30" required />
                 </div>
                 <div className="grid gap-2">
                    <Label htmlFor="notes">Additional Notes or Questions</Label>
                    <Textarea id="notes" placeholder="Tell us about any special requirements or questions you have." />
                 </div>
              </div>
              <div className="flex flex-col items-center">
                 <Label className="mb-2 font-semibold text-center">Select a Preferred Date</Label>
                 <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    disabled={(day) => day < new Date(new Date().setDate(new Date().getDate())) }
                 />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end p-6">
                <Button type="submit" size="lg">Submit Request</Button>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  );
}
