
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, HeartHandshake, LogIn, Menu, Quote, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { HeroCarousel } from "@/components/ui/hero-carousel";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const kripaSevaOptions = [
    { title: "Dry Cake Seeds 30 kg", amount: 650, img: "https://images.unsplash.com/photo-1731846568472-cef37f1a5ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb3clMjBpbmRpYW58ZW58MHx8fHwxNzU2ODQzMjk0fDA&ixlib=rb-4.1.0&q=80&w=1080", aiHint: "cow food" },
    { title: "Medicines for cows", amount: 2100, img: "https://images.unsplash.com/photo-1731846568472-cef37f1a5ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb3clMjBpbmRpYW58ZW58MHx8fHwxNzU2ODQzMjk0fDA&ixlib=rb-4.1.0&q=80&w=1080", aiHint: "cow medicine" },
    { title: "Dried Green", amount: 31000, img: "https://images.unsplash.com/photo-1731846568472-cef37f1a5ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb3clMjBpbmRpYW58ZW58MHx8fHwxNzU2ODQzMjk0fDA&ixlib=rb-4.1.0&q=80&w=1080", aiHint: "green grass" },
    { title: "Jaggery 40 Kg", amount: 1000, img: "https://images.unsplash.com/photo-1731846568472-cef37f1a5ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb3clMjBpbmRpYW58ZW58MHx8fHwxNzU2ODQzMjk0fDA&ixlib=rb-4.1.0&q=80&w=1080", aiHint: "jaggery" },
    { title: "Wheat Bran 650 kg", amount: 17000, img: "https://images.unsplash.com/photo-1731846568472-cef37f1a5ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb3clMjBpbmRpYW58ZW58MHx8fHwxNzU2ODQzMjk0fDA&ixlib=rb-4.1.0&q=80&w=1080", aiHint: "wheat bran" },
    { title: "Barley Flour 100 kg", amount: 2000, img: "https://images.unsplash.com/photo-1731846568472-cef37f1a5ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb3clMjBpbmRpYW58ZW58MHx8fHwxNzU2ODQzMjk0fDA&ixlib=rb-4.1.0&q=80&w=1080", aiHint: "barley flour" },
    { title: "2 Trolley Green Grass", amount: 21000, img: "https://images.unsplash.com/photo-1731846568472-cef37f1a5ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb3clMjBpbmRpYW58ZW58MHx8fHwxNzU2ODQzMjk0fDA&ixlib=rb-4.1.0&q=80&w=1080", aiHint: "green grass trolley" },
];

const kartavyaSevaOptions = [
    { title: "Feed 10 Cows", amount: 1500, img: "https://images.unsplash.com/photo-1731846568472-cef37f1a5ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb3clMjBpbmRpYW58ZW58MHx8fHwxNzU2ODQzMjk0fDA&ixlib=rb-4.1.0&q=80&w=1080", aiHint: "happy cow" },
    { title: "Feed 20 Cows", amount: 3000, img: "https://images.unsplash.com/photo-1731846568472-cef37f1a5ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb3clMjBpbmRpYW58ZW58MHx8fHwxNzU2ODQzMjk0fDA&ixlib=rb-4.1.0&q=80&w=1080", aiHint: "cow shelter" },
    { title: "Feed 50 Cows", amount: 7000, img: "https://images.unsplash.com/photo-1731846568472-cef37f1a5ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb3clMjBpbmRpYW58ZW58MHx8fHwxNzU2ODQzMjk0fDA&ixlib=rb-4.1.0&q=80&w=1080", aiHint: "cow family" },
    { title: "1 Day Maintenance of Goshala", amount: 51000, img: "https://images.unsplash.com/photo-1731846568472-cef37f1a5ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb3clMjBpbmRpYW58ZW58MHx8fHwxNzU2ODQzMjk0fDA&ixlib=rb-4.1.0&q=80&w=1080", aiHint: "person donating cow" },
];


export default function Home() {

  const testimonials = [
      { name: "Sai Karthik", rating: 5, quote: "A heartwarming and serene experience. The cows are so well-cared for in a clean, peaceful environment. A wonderful place to connect with nature and tradition.", hint: "south indian man" },
      { name: "Prithi Malini", rating: 5, quote: "This Goshala is a true sanctuary. The love and care they provide is inspiring. You can see native breeds looked after with so much dignity in a peaceful, clean, and spiritually uplifting environment.", hint: "woman praying" },
      { name: "Manisha G", rating: 4, quote: "A very well-maintained goshala! The cows are clearly cared for with love and attention. The caretakers are kind and dedicated. Truly a peaceful and heartwarming place to visit.", hint: "woman smiling" },
      { name: "Rohan Sharma", rating: 5, quote: "An incredibly peaceful and well-managed Goshala. The dedication of the staff is evident in the health and happiness of the cows. A must-visit for anyone seeking tranquility.", hint: "man portrait" },
      { name: "Anjali Verma", rating: 5, quote: "The energy here is so positive and pure. It's wonderful to see these sacred animals treated with such reverence and care. We left feeling truly blessed and will be back soon.", hint: "woman nature" },
  ]

  const navLinks = [
    { text: "About", href: "#about" },
    { text: "Our Cows", href: "/our-cows" },
    { text: "Seva", href: "#seva" },
    { text: "Gallery", href: "/gallery" },
    { text: "Testimonials", href: "#testimonials" },
    { text: "Contact", href: "#contact" },
  ];

  const galleryImages = Array.from({ length: 5 }, (_, i) => ({
    src: `/gallery/a${i + 1}.png`,
    alt: `Goshala gallery image a${i + 1}`,
  }));


  const SevaCard = ({ title, amount, img, aiHint }: { title: string; amount: number; img: string; aiHint: string; }) => {
    const router = useRouter();
    const handleDonation = (amount: number) => {
        router.push(`/payment?amount=${amount}`);
    };

    return (
      <Card className="flex items-center p-3 shadow-sm hover:shadow-md transition-shadow duration-300 bg-card border rounded-lg">
        <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
            <Image src={img} alt={title} layout="fill" objectFit="cover" data-ai-hint={aiHint} />
        </div>
        <div className="flex-grow ml-3 overflow-hidden">
            <p className="font-semibold text-foreground truncate">{title}</p>
            <p className="font-bold text-primary">₹{amount.toLocaleString('en-IN')}</p>
        </div>
        <Button onClick={() => handleDonation(amount)} variant="outline" size="sm" className="ml-2 flex-shrink-0">Donate</Button>
      </Card>
    );
  }


  return (
    <div className="flex flex-col min-h-dvh bg-background antialiased">
       <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2">
            <Image 
              src="/gallery/logo.png?v=3" 
              alt="Goshala Logo" 
              width={56} 
              height={56} 
              className="p-1 bg-logo-background rounded-full object-cover" 
            />
            <span className="text-lg md:text-2xl font-bold text-primary tracking-tight">
              Sri Krishna Goshala
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-base font-medium text-foreground/80">
            {navLinks.map((link) => (
              <Link key={link.text} href={link.href} className="hover:text-primary transition-colors">{link.text}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <Button asChild size="sm" className="rounded-full shadow-lg md:text-base md:px-6 md:py-4 hover:scale-105 transition-transform group">
              <Link href="#seva">
                Donate <span className="hidden md:inline ml-1">Now</span> 
                <ArrowRight className="w-4 h-4 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
             <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col p-6 bg-background">
                  <Link href="#" className="flex items-center gap-3 mb-8">
                    <Image 
                      src="/gallery/logo.png?v=3" 
                      alt="Goshala Logo" 
                      width={40} 
                      height={40} 
                      className="p-1 bg-logo-background rounded-full object-cover" 
                    />
                    <span className="text-lg font-bold text-primary">Sri Krishna Goshala</span>
                  </Link>
                  <nav className="grid gap-4 text-lg font-medium">
                    {navLinks.map((link) => (
                       <Link key={link.text} href={link.href} className="text-foreground/80 hover:text-primary py-2 px-3 rounded-md hover:bg-muted font-medium transition-colors -mx-3">{link.text}</Link>
                    ))}
                  </nav>
                  <Separator className="my-6" />
                   <Button variant="outline" className="w-full mt-auto" asChild>
                    <Link href="/login" className="flex items-center justify-center gap-2">
                        <LogIn className="w-5 h-5" />
                        Login / Sign Up
                    </Link>
                  </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full py-24 md:py-48 flex items-center justify-center text-center bg-card overflow-hidden">
           <HeroCarousel />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
           <div className="relative z-20 flex flex-col items-center justify-center p-4 md:p-6">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-primary">
              A Sanctuary of Compassion
            </h1>
            <p className="mt-4 md:mt-6 text-md md:text-xl max-w-3xl text-foreground/80 font-semibold">
               Welcome to Sri Krishna Goshala, a sacred haven dedicated to the care and protection of cows. Join us in nurturing these gentle souls.
            </p>
            <Button size="lg" className="mt-8 md:mt-10 rounded-full text-base md:text-lg px-8 md:px-10 py-6 md:py-7 group hover:scale-105 hover:shadow-xl transition-all duration-300" asChild>
              <Link href="#seva">
                Support Our Cows <HeartHandshake className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 transition-transform group-hover:rotate-12" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="seva" className="py-16 md:py-28 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <Tabs defaultValue="kripa" className="w-full">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-0 text-center md:text-left">One Day Maintenance Expenses</h2>
                        <TabsList className="grid w-full grid-cols-2 md:w-auto h-auto">
                            <TabsTrigger value="kripa" className="py-2 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Kripa Seva</TabsTrigger>
                            <TabsTrigger value="kartavya" className="py-2 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Kartavya Seva</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="kripa" className="mt-8">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {kripaSevaOptions.map(seva => <SevaCard key={seva.title} {...seva} />)}
                        </div>
                    </TabsContent>
                    <TabsContent value="kartavya" className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {kartavyaSevaOptions.map(seva => <SevaCard key={seva.title} {...seva} />)}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>

        <section id="about" className="py-16 md:py-28 bg-transparent overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="relative w-full aspect-square group">
                 <Image
                  src="/gallery/a24.png"
                  alt="A scene from Sri Krishna Goshala"
                  fill
                  style={{objectFit: 'cover'}}
                  className="rounded-2xl shadow-2xl border-8 border-white transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-secondary uppercase tracking-widest">Our Story</h3>
                <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight mt-2">
                  About Sri Krishna Goshala
                </h2>
                <p className="mt-4 md:mt-6 text-foreground/80 text-md md:text-lg">
                  Sri Krishna Gaushala was established in 2015 by Mr. Krishnamurthy. The Cow referred as Divine Mother, the Gomata, and one which bestows health, knowledge and prosperity. In Sanskrit, the word “Go” also means “Light”. Mother cows are worshiped in Shri Krishna Gaushala. From food to Shelter, every need is taken care of. Shri Krishna Gaushala has been established with a very noble vision. Their only objective is to serve the cows. It is said that by serving cows, all the sorrows, pain, and problems of a person go away. The cow has a special place in Hinduism, and it is believed that all gods reside in her body. Feeding a cow with green fodder is considered one of the Maha Daans that is powerful enough to remove all the Grah Doshas, or troubles arising from the malefic effects of the planets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-16 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h3 className="text-base font-semibold text-secondary uppercase tracking-widest">Gallery</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-2">
              Our Beloved Residents
            </h2>
            <p className="mt-4 md:mt-5 max-w-2xl mx-auto text-foreground/80 text-md md:text-lg">
              Glimpses of daily life and the gentle souls that call our Goshala home.
            </p>
            <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg md:rounded-2xl group aspect-w-1 aspect-h-1 border-2 md:border-4 border-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
                <Button asChild size="lg">
                    <Link href="/gallery">
                        View All Photos <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-28 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-base font-semibold text-secondary uppercase tracking-widest">Testimonials</h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mt-2">Words from Our Devotees</h2>
                    <p className="mt-4 md:mt-5 text-foreground/80 text-md md:text-lg">
                        Hear from others who have found peace and purpose through their connection with our Goshala.
                    </p>
                </div>
                <TestimonialCarousel testimonials={testimonials} />
            </div>
        </section>
        
        <section id="impact" className="py-16 md:py-28 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-base font-semibold text-secondary uppercase tracking-widest">Our Collective Impact</h3>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mt-2">Your Support Makes a Difference</h2>
              <p className="mt-4 md:mt-5 text-foreground/80 text-md md:text-lg">
                Every contribution, big or small, helps us provide continuous care for our beloved cows. See how our community's generosity adds up!
              </p>
            </div>
            <div className="max-w-4xl mx-auto mt-12">
              <Card className="p-6 md:p-8 shadow-lg">
                <div className="flex justify-between items-end mb-2 flex-wrap">
                   <span className="text-lg md:text-xl font-bold text-primary">₹7,50,000</span>
                   <span className="text-sm md:text-lg font-semibold text-muted-foreground">Goal: ₹10,00,000</span>
                </div>
                <Progress value={75} className="h-4 md:h-6" indicatorClassName="bg-primary" />
                <div className="text-center mt-6 md:mt-8">
                  <Button size="lg" asChild>
                    <Link href="#seva">
                      Contribute Now <HeartHandshake className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

      </main>

      <footer id="contact" className="bg-secondary text-secondary-foreground py-10 md:py-12" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-dotted.png')" }}>
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-4 mb-4">
                        <Image
                            src="/gallery/logo.png?v=3"
                            alt="Goshala Logo"
                            width={48}
                            height={48}
                            className="bg-logo-background rounded-full p-1"
                        />
                        <span className="font-bold text-xl text-primary-foreground">Sri Krishna Goshala</span>
                    </div>
                     <div className="text-secondary-foreground/80 space-y-3 text-sm md:text-base">
                         <p>#69, Vittasandra Mainroad, 4th Cross, Lakshmi Layout, Near Post Office, Begur.</p>
                         <p><b>Phone:</b> 9972508500 | 8123791540</p>
                         <p><b>Email:</b> srikrishnagaushalablr@gmail.com</p>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-white mb-4 relative pb-2">
                        Bank Details
                        <span className="absolute bottom-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-12 h-0.5 bg-footer-accent"></span>
                    </h3>
                    <div className="text-secondary-foreground/80 space-y-1 text-sm">
                        <p><b>Name:</b> SRI KRISHNA GOSHALA TRUST</p>
                        <p><b>A/C No:</b> 9552000100048201</p>
                        <p><b>IFSC:</b> KARB0000955</p>
                        <p><b>Bank:</b> Karnataka Bank</p>
                        <p><b>Branch:</b> Akshya Nagar, Bangalore</p>
                    </div>
                     <div className="mt-4 flex justify-center md:justify-start">
                        <Image src="https://placehold.co/120x120.png" alt="QR Code for Donation" width={100} height={100} data-ai-hint="qr code" />
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700/50 mt-8 pt-6 text-center text-secondary-foreground/60 text-sm">
                <p>&copy; {new Date().getFullYear()} Sri Krishna Goshala. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  );
}

    

    

    

