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
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="A tranquil Goshala with cows at sunrise"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          data-ai-hint="tranquil goshala"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-7xl font-headline tracking-wider drop-shadow-lg">
            Sri Krishna Goshala
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl drop-shadow-md">
            A sanctuary of love, care, and devotion for the sacred cow.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
            <Link href="#donate">Donate for a Cause</Link>
          </Button>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-xl max-w-none">
              <h2 className="font-headline text-3xl md:text-4xl text-primary">Embracing the Divine Mother</h2>
              <p>
                At Sri Krishna Goshala, we are dedicated to the welfare of cows, whom we revere as our mothers. Our mission is rooted in the timeless Vedic tradition of 'Go-Seva' – the selfless service to cows.
              </p>
              <p>
                We provide a safe, nurturing, and loving environment where these gentle souls can live peacefully. Our activities extend beyond simple care; we aim to revive the culture of cow protection and spread awareness about their spiritual and ecological importance.
              </p>
            </div>
            <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-xl">
               <Image
                  src="https://placehold.co/600x400.png"
                  alt="A person gently petting a cow"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="petting cow"
                />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline mb-4">Seva Opportunities</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
            Participate in our mission through these acts of service and compassion.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                   <HeartHandshake className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">Cow Adoption</CardTitle>
                <CardDescription>
                  Sponsor a cow and become a guardian. Receive regular updates and share a special bond.
                </CardDescription>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button variant="outline">Learn More <ArrowRight className="ml-2 h-4 w-4"/></Button>
              </CardFooter>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                   <CowIcon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">Make a Donation</CardTitle>
                <CardDescription>
                  Your contribution helps us provide fodder, medical care, and a safe shelter for our cows.
                </CardDescription>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Donate Now <ArrowRight className="ml-2 h-4 w-4"/></Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      <section id="gallery" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12">Glimpses of Goshala</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0 aspect-square flex items-center justify-center">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={400}
                          height={400}
                          className="object-cover w-full h-full"
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
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <Quote className="w-8 h-8 text-primary/50" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="italic">"{testimonial.story}"</p>
                </CardContent>
                <CardFooter>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-16 md:py-24">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-headline text-center mb-12">Our Teachings</h2>
           <div className="grid md:grid-cols-3 gap-8">
             {blogPosts.map((post, index) => (
               <Card key={index} className="overflow-hidden flex flex-col group">
                 <div className="relative">
                   <Image
                     src={post.image}
                     alt={post.title}
                     width={600}
                     height={400}
                     className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                     data-ai-hint={post.hint}
                   />
                   <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{post.category}</Badge>
                 </div>
                 <CardHeader className="flex-grow">
                   <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
                   <CardDescription className="pt-2">{post.excerpt}</CardDescription>
                 </CardHeader>
                 <CardFooter>
                   <Button variant="link" asChild className="p-0 text-primary">
                     <Link href="#">Read More <ArrowRight className="ml-2 h-4 w-4"/></Link>
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
