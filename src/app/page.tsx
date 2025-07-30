import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  MessageCircle,
  Quote,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { CowIcon } from '@/components/icons/cow-icon';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const galleryImages = [
    { src: 'https://placehold.co/800x600.png', alt: 'A serene cow in a field', hint: 'serene cow' },
    { src: 'https://placehold.co/800x600.png', alt: 'Devotees feeding cows', hint: 'people feeding cows' },
    { src: 'https://placehold.co/800x600.png', alt: 'A calf resting in the shade', hint: 'calf resting' },
    { src: 'https://placehold.co/800x600.png', alt: 'The goshala barn at sunrise', hint: 'barn sunrise' },
    { src: 'https://placehold.co/800x600.png', alt: 'A close-up of a cow\'s gentle eyes', hint: 'cow eyes' },
  ];

  const testimonials = [
    {
      name: 'Ravi Sharma',
      story: 'My connection with the cows at the Goshala is a spiritual experience. Their gentleness has brought immense peace to my life.',
    },
    {
      name: 'Priya Mehta',
      story: 'Donating to the Goshala feels like a direct service to the divine. Seeing the cows so well-cared for fills my heart with joy.',
    },
    {
      name: 'Anand Desai',
      story: 'Adopting a cow was the best decision I ever made. The updates and photos I receive make me feel like part of the Goshala family.',
    },
  ];
  
  const blogPosts = [
    {
      title: 'The Sacred Bond: Why We Worship Cows',
      excerpt: 'Delve into the ancient scriptures to understand the spiritual significance of cows in our culture and why they are considered sacred.',
      image: 'https://placehold.co/600x400.png',
      hint: 'ancient scriptures',
      category: 'Spirituality'
    },
    {
      title: 'A Day in the Life at Sri Krishna Goshala',
      excerpt: 'Experience the daily rhythms of our Goshala, from morning prayers and feeding to the peaceful evenings with our beloved cows.',
      image: 'https://placehold.co/600x400.png',
      hint: 'goshala life',
      category: 'Goshala Diary'
    },
    {
      title: 'The Blessings of Go-Seva',
      excerpt: 'Learn about Go-Seva (service to cows) and how this selfless act can bring spiritual merit and inner happiness to your life.',
      image: 'https://placehold.co/600x400.png',
      hint: 'selfless service',
      category: 'Philosophy'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[70vh] md:h-[90vh]">
        <Image
          src="https://images.unsplash.com/photo-1596093408353-242281ea4246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxnb3NoYWxhfGVufDB8fHx8MTc1MzkwMDQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="A tranquil Goshala with cows at sunrise"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          data-ai-hint="tranquil goshala"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
          <h1 className="text-4xl md:text-7xl font-headline tracking-wider drop-shadow-lg text-accent">
            Sri Krishna Goshala
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl drop-shadow-md text-white">
            A sanctuary of love, care, and devotion for the sacred cow.
          </p>
          <Button asChild size="lg" className="mt-8 text-lg">
            <Link href="#donate">Donate for a Cause</Link>
          </Button>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">Embracing the Divine Mother, Gau Mata</h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              At Sri Krishna Goshala, we are dedicated to the welfare of cows, whom we revere as our mothers. Our mission is rooted in the timeless Vedic tradition of 'Go-Seva' – the selfless service to cows. We provide a safe, nurturing, and loving environment where these gentle souls can live peacefully.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-2xl group">
               <Image
                  src="https://images.unsplash.com/photo-1546722228-7baeca4bd0b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8Y293JTIwaW1hZ2VzJTIwaW5kaWF8ZW58MHx8fHwxNzUzODk4NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="A person gently petting a cow"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint="petting cow"
                />
            </div>
            <div className="prose lg:prose-xl max-w-none">
              <h3 className="font-headline text-2xl md:text-3xl text-primary">Our Sacred Duty</h3>
              <p>
                Our activities extend beyond simple care; we aim to revive the culture of cow protection and spread awareness about their spiritual and ecological importance. Each cow at our Goshala is a member of our family, treated with the utmost respect and affection.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <HeartHandshake className="w-8 h-8 text-accent mr-4 mt-1 shrink-0"/>
                  <div>
                    <h4 className="font-semibold">Compassionate Care</h4>
                    <p className="text-muted-foreground">Providing nutritious food, clean shelter, and regular veterinary check-ups.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <BookOpen className="w-8 h-8 text-accent mr-4 mt-1 shrink-0"/>
                  <div>
                    <h4 className="font-semibold">Spiritual Environment</h4>
                    <p className="text-muted-foreground">Ensuring a peaceful and spiritual atmosphere with regular prayers and kirtans.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline mb-4">Seva Opportunities</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
            Participate in our mission through these acts of service and compassion. Your support helps us continue our work.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="text-center transition-shadow duration-300 hover:shadow-2xl flex flex-col">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                   <HeartHandshake className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4 text-2xl">Adopt a Cow</CardTitle>
                <CardDescription className="pt-2">
                  Sponsor a cow and become a guardian. Receive regular updates and photos, and share a special bond with your sponsored cow.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow"/>
              <CardFooter className="justify-center">
                <Button variant="outline" size="lg">Learn More <ArrowRight className="ml-2"/></Button>
              </CardFooter>
            </Card>
            <Card className="text-center transition-shadow duration-300 hover:shadow-2xl flex flex-col">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                   <CowIcon className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4 text-2xl">Make a Donation</CardTitle>
                <CardDescription className="pt-2">
                  Your contribution helps us provide fodder, medical care, and a safe shelter for our beloved cows. Every little bit counts.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow"/>
              <CardFooter className="justify-center">
                <Button size="lg">Donate Now <ArrowRight className="ml-2"/></Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      <section id="gallery" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12">Glimpses of Goshala Life</h2>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden group rounded-lg shadow-lg">
                      <CardContent className="p-0 aspect-w-4 aspect-h-3">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={600}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                          data-ai-hint={image.hint}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12">Voices of Devotion</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col bg-background/50 shadow-lg rounded-lg">
                <CardContent className="pt-6 flex-grow">
                  <Quote className="w-8 h-8 text-primary/50 mb-4" />
                  <p className="italic text-lg">"{testimonial.story}"</p>
                </CardContent>
                <CardFooter>
                  <p className="font-bold text-primary text-lg">- {testimonial.name}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-16 md:py-24 bg-background">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-headline text-center mb-12">Wisdom from the Shastras</h2>
           <div className="grid md:grid-cols-3 gap-8">
             {blogPosts.map((post, index) => (
               <Card key={index} className="overflow-hidden flex flex-col group shadow-lg hover:shadow-2xl transition-shadow duration-300">
                 <div className="relative overflow-hidden">
                   <Image
                     src={post.image}
                     alt={post.title}
                     width={600}
                     height={400}
                     className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-105"
                     data-ai-hint={post.hint}
                   />
                   <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">{post.category}</Badge>
                 </div>
                 <CardHeader className="flex-grow">
                   <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
                   <CardDescription className="pt-2">{post.excerpt}</CardDescription>
                 </CardHeader>
                 <CardFooter>
                   <Button variant="link" asChild className="p-0 text-primary font-semibold">
                     <Link href="#">Read More <ArrowRight className="ml-2"/></Link>
                   </Button>
                 </CardFooter>
               </Card>
             ))}
           </div>
         </div>
      </section>

    </div>
  );
}
