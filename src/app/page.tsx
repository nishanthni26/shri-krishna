
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, HeartHandshake, LogIn, Quote, Users, UtensilsCrossed, Stethoscope, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { SevaCarousel } from "@/components/ui/seva-carousel";
import { HeroCarousel } from "@/components/ui/hero-carousel";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function Home() {

  const sevaOptions = [
      { icon: "Sun", title: "A cow’s expenditure per day", description: "Sponsor a day's worth of care and feeding for one cow.", price: "₹1,100", link: "/payment" },
      { icon: "Calendar", title: "Monthly expense of a cow", description: "Cover the monthly expenses for a cow, including food and shelter.", price: "₹5,100", link: "/payment" },
      { icon: "CalendarCheck", title: "Annual cost of a cow", description: "Support a cow for an entire year, ensuring its well-being.", price: "₹21,000", link: "/payment" },
      { icon: "HeartHandshake", title: "Donation of a cow", description: "A sacred gift. We will care for the cow on your behalf.", price: "₹51,000", link: "/payment" },
      { icon: "Users", title: "Cow’s Health Checkup", description: "Fund a veterinary check-up and necessary medical care.", price: "₹2,500", link: "/payment" },
      { icon: "Leaf", title: "Green Grass Contribution", description: "Provide nutritious green fodder for the entire herd.", price: "₹3,100", link: "/payment" },
  ];

  const testimonials = [
      { name: "Sai Karthik", quote: "A heartwarming and serene experience. The cows are so well-cared for in a clean, peaceful environment. A wonderful place to connect with nature and tradition.", avatar: "https://placehold.co/100x100.png", hint: "south indian man" },
      { name: "Prithi Malini", quote: "This Goshala is a true sanctuary. The love and care they provide is inspiring. You can see native breeds looked after with so much dignity in a peaceful, clean, and spiritually uplifting environment.", avatar: "https://placehold.co/100x100.png", hint: "woman praying" },
      { name: "Manisha G", quote: "A very well-maintained goshala! The cows are clearly cared for with love and attention. The caretakers are kind and dedicated. Truly a peaceful and heartwarming place to visit.", avatar: "https://placehold.co/100x100.png", hint: "woman smiling" },
      { name: "Rohan Sharma", quote: "An incredibly peaceful and well-managed Goshala. The dedication of the staff is evident in the health and happiness of the cows. A must-visit for anyone seeking tranquility.", avatar: "https://placehold.co/100x100.png", hint: "man portrait" },
      { name: "Anjali Verma", quote: "The energy here is so positive and pure. It's wonderful to see these sacred animals treated with such reverence and care. We left feeling truly blessed and will be back soon.", avatar: "https://placehold.co/100x100.png", hint: "woman nature" },
  ]

  const quickLinks1 = [
    { text: "Home", href: "#" },
    { text: "About Us", href: "#about" },
    { text: "Activities", href: "#" },
    { text: "Gallery", href: "#gallery" },
    { text: "Contact Us", href: "#contact" },
  ];

  const quickLinks2 = [
    { text: "Sri Krishna Gaushala", href: "#" },
    { text: "Indian Cows", href: "#" },
    { text: "Raise A Cow", href: "#" },
    { text: "Pray To Gaumatha", href: "#" },
  ];

  const navLinks = [
    { text: "About", href: "#about" },
    { text: "Seva", href: "#seva" },
    { text: "Gallery", href: "#gallery" },
    { text: "Testimonials", href: "#testimonials" },
    { text: "Contact", href: "#contact" },
  ];


  return (
    <div className="flex flex-col min-h-dvh bg-background antialiased">
       <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Goshala Logo" 
              width={48} 
              height={48} 
              className="rounded-full object-cover"
            />
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
              Sri Krishna Goshala
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-base font-medium text-foreground/80">
            {navLinks.map((link) => (
              <Link key={link.text} href={link.href} className="hover:text-primary transition-colors">{link.text}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <Button asChild size="sm" className="rounded-full shadow-lg md:text-base md:px-6 md:py-4">
              <Link href="/payment">
                Donate <span className="hidden md:inline ml-1">Now</span> 
                <ArrowRight className="w-4 h-4 ml-1 md:ml-2" />
              </Link>
            </Button>
            <Button variant="ghost" className="hidden lg:flex" asChild>
              <Link href="/login" className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Login
              </Link>
            </Button>
             <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="#" className="flex items-center gap-3 mb-4">
                      <Image 
                        src="/logo.png" 
                        alt="Goshala Logo" 
                        width={40} 
                        height={40} 
                        className="rounded-full object-cover" 
                      />
                      <span className="text-lg font-bold text-primary">Sri Krishna Goshala</span>
                    </Link>
                    {navLinks.map((link) => (
                       <Link key={link.text} href={link.href} className="text-foreground/80 hover:text-primary">{link.text}</Link>
                    ))}
                     <Separator />
                     <Button variant="ghost" asChild>
                        <Link href="/login" className="flex items-center justify-start gap-2">
                            <LogIn className="w-5 h-5" />
                            Login
                        </Link>
                     </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full py-24 md:py-48 flex items-center justify-center text-center bg-card overflow-hidden">
           <HeroCarousel />
           <div className="relative z-10 flex flex-col items-center justify-center p-4 md:p-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-primary">
              A Sanctuary of Compassion
            </h1>
            <p className="mt-4 md:mt-6 text-md md:text-xl max-w-3xl text-foreground/80 font-semibold">
               Welcome to Sri Krishna Goshala, a sacred haven dedicated to the care and protection of cows. Join us in nurturing these gentle souls.
            </p>
            <Button size="lg" className="mt-8 md:mt-10 rounded-full text-base md:text-lg px-8 md:px-10 py-6 md:py-7 group" asChild>
              <Link href="/payment">
                Support Our Cows <HeartHandshake className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 transition-transform group-hover:rotate-12" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="why-donate" className="py-16 md:py-28 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-base font-semibold text-secondary uppercase tracking-widest">Why Your Seva Matters</h3>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mt-2">Your Support is Their Lifeline</h2>
              <p className="mt-4 md:mt-5 text-foreground/80 text-md md:text-lg">
                By donating, you provide more than just funds—you offer a life of dignity, care, and peace to our sacred cows. Every contribution directly supports their well-being.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-background shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <div className="bg-secondary text-primary-foreground h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <UtensilsCrossed className="h-8 w-8 md:h-10 md:w-10" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-primary">Food & Nutrition</h4>
                <p className="text-muted-foreground mt-2 text-sm md:text-base">Your donation helps us provide nutritious food, ensuring the health and happiness of our cows every day.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-background shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <div className="bg-secondary text-primary-foreground h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 md:h-10 md:w-10"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-primary">Shelter & Care</h4>
                <p className="text-muted-foreground mt-2 text-sm md:text-base">You help maintain a safe, clean, and comfortable shelter where our cows can live peacefully.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-background shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <div className="bg-secondary text-primary-foreground h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <Stethoscope className="h-8 w-8 md:h-10 md:w-10" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-primary">Medical Support</h4>
                <p className="text-muted-foreground mt-2 text-sm md:text-base">Your contribution funds essential veterinary care and medical treatments to keep our herd healthy.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="relative w-full aspect-square">
                 <Image
                  src="https://images.unsplash.com/photo-1672858074971-55cf899b2f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjb3clMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTU3MjIxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="A calm cow with gentle eyes"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl shadow-2xl border-8 border-white"
                  data-ai-hint="cow portrait"
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

        <section id="seva" className="py-16 md:py-28 bg-primary/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-base font-semibold text-secondary uppercase tracking-widest">Offer Seva</h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mt-2">Contribute Through Service</h2>
                    <p className="mt-4 md:mt-5 text-foreground/80 text-md md:text-lg">
                        Your selfless service helps us provide the best care for our cows. Participate in our Seva programs and become a part of our family.
                    </p>
                </div>
                 <SevaCarousel sevaOptions={sevaOptions} />
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
            <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
              {[
                { src: "https://images.unsplash.com/photo-1660296146250-8f0d6338aa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y293cyUyMHBhc3R1cmV8ZW58MHx8fHwxNzU1NzIyMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Happy Cow"},
                { src: "https://images.unsplash.com/photo-1692632428740-f0f10c652ad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjb3clMjBncmF6aW5nfGVufDB8fHx8MTc1NTcyMjExNHww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Grazing Cow"},
                { src: "https://images.unsplash.com/photo-1618523393652-519b5d343477?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Calf Playing"},
                { src: "https://images.unsplash.com/photo-1720975134463-97ab99685d7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y293cyUyMGhlcmR8ZW58MHx8fHwxNzU1NzIyMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Cow Herd"},
              ].map((image, index) => (
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
                <div className="flex justify-between items-end mb-2">
                   <span className="text-lg md:text-xl font-bold text-primary">₹7,50,000</span>
                   <span className="text-md md:text-lg font-semibold text-muted-foreground">Goal: ₹10,00,000</span>
                </div>
                <Progress value={75} className="h-4 md:h-6" indicatorClassName="bg-primary" />
                <div className="text-center mt-6 md:mt-8">
                  <Button size="lg" asChild>
                    <Link href="/payment">
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-center md:text-left">

                <div className="md:col-span-4 flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-4 mb-4">
                        <Image
                            src="/logo.png"
                            alt="Goshala Logo"
                            width={48}
                            height={48}
                            className="bg-white rounded-full p-1"
                        />
                        <span className="font-bold text-xl text-primary-foreground">Sri Krishna Goshala</span>
                    </div>
                     <div className="text-secondary-foreground/80 space-y-3 text-sm md:text-base">
                         <p>#69, Vittasandra Mainroad, 4th Cross, Lakshmi Layout, Near Post Office, Begur.</p>
                         <p><b>Phone:</b> 9972508500 | 8123791540</p>
                         <p><b>Email:</b> srikrishnagaushalablr@gmail.com</p>
                    </div>
                </div>

                <div className="md:col-span-5 flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-white mb-4 relative pb-2">
                        Quick Links
                        <span className="absolute bottom-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-12 h-0.5 bg-footer-accent"></span>
                    </h3>
                    <div className="grid grid-cols-2 gap-x-8">
                        <ul className="space-y-2">
                            {quickLinks1.map(link => (
                                <li key={link.text}>
                                    <Link href={link.href} className="text-secondary-foreground/80 hover:text-white transition-colors">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-2">
                            {quickLinks2.map(link => (
                                <li key={link.text}>
                                    <Link href={link.href} className="text-secondary-foreground/80 hover:text-white transition-colors">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="md:col-span-3 flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-white mb-4 relative pb-2">
                        Bank Details
                        <span className="absolute bottom-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-12 h-0.5 bg-footer-accent"></span>
                    </h3>
                    <div className="text-secondary-foreground/80 space-y-1 text-sm">
                        <p><b>Name:</b> SRI KRISHNA GOSHALA</p>
                        <p><b>A/C No:</b> 9552000100048201</p>
                        <p><b>IFSC:</b> KARB0000955</p>
                        <p><b>Bank:</b> Karnataka Bank</p>
                        <p><b>Branch:</b> Akshya Nagar, Bangalore</p>
                    </div>
                     <div className="mt-4">
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
