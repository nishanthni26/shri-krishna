
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const timeSlots = ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'];

export default function BookSlotPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const { toast } = useToast();
  const router = useRouter();

  const handleBooking = () => {
    if (!date || !selectedTime) {
      toast({
        variant: 'destructive',
        title: 'Selection Missing',
        description: 'Please select a date and time slot to proceed.',
      });
      return;
    }

    toast({
      title: 'Booking Confirmed!',
      description: `Your Video Seva is booked for ${date.toLocaleDateString()} at ${selectedTime}. Redirecting...`,
    });

    router.push('/video-seva');
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
              className="p-1 bg-primary rounded-full object-cover"
            />
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
              Sri Krishna Goshala
            </span>
          </Link>
          <Button asChild variant="ghost">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl shadow-2xl">
          <CardHeader className="text-center md:text-left">
            <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Book Your Live Video Seva</CardTitle>
            <CardDescription>
              Select a date and time for your personalized video call with our cows.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex justify-center p-0 md:p-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(day) => day < new Date(new Date().setDate(new Date().getDate() - 1)) }
              />
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4 text-center md:text-left">Select a Time Slot</h4>
                <RadioGroup
                  value={selectedTime}
                  onValueChange={setSelectedTime}
                  className="grid grid-cols-2 gap-3 md:gap-4"
                >
                  {timeSlots.map((slot) => (
                    <div key={slot}>
                      <RadioGroupItem value={slot} id={slot} className="peer sr-only" />
                      <Label
                        htmlFor={slot}
                        className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-3 md:p-4 text-sm md:text-base hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        {slot}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <Button onClick={handleBooking} size="lg" className="w-full text-md md:text-lg">
                Confirm Booking
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

    