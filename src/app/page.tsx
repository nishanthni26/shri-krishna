
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Milk, Sprout, HeartHandshake, ShieldCheck, Phone, Video, LogIn, Award, Sun, Calendar, CalendarCheck, Wheat, Leaf, Quote, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/ui/hero-carousel";
import { Progress } from "@/components/ui/progress";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { SevaCarousel } from "@/components/ui/seva-carousel";

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

  return (
    <div className="flex flex-col min-h-dvh bg-background antialiased">
       <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Goshala Logo" 
              width={56} 
              height={56} 
              className="rounded-full object-cover"
            />
            <span className="text-2xl font-bold text-primary tracking-tight">
              Sri Krishna Goshala
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-base font-medium text-foreground/80">
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#seva" className="hover:text-primary transition-colors">Seva</Link>
            <Link href="#gallery" className="hover:text-primary transition-colors">Gallery</Link>
            <Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild size="lg" className="rounded-full shadow-lg">
              <Link href="/payment">
                Donate Now <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="ghost" className="hidden lg:flex" asChild>
              <Link href="/login" className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Login
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full py-32 md:py-48 flex items-center justify-center text-center bg-card">
           <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1660296146250-8f0d6338aa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y293cyUyMHBhc3R1cmV8ZW58MHx8fHwxNzU1NzIyMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080')", opacity: 0.1}}></div>
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
           <div className="relative z-10 flex flex-col items-center justify-center p-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary">
              A Sanctuary of Compassion
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl text-foreground/80 font-semibold">
               Welcome to Sri Krishna Goshala, a sacred haven dedicated to the care and protection of cows. Join us in nurturing these gentle souls.
            </p>
            <Button size="lg" className="mt-10 rounded-full text-lg px-10 py-7 group" asChild>
              <Link href="/payment">
                Support Our Cows <HeartHandshake className="w-6 h-6 ml-3 transition-transform group-hover:rotate-12" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="about" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
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
                <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mt-2">
                  About Sri Krishna Goshala
                </h2>
                <p className="mt-6 text-foreground/80 text-lg">
                  Sri Krishna Gaushala was established in 2015 by Mr. Krishnamurthy. The Cow referred as Divine Mother, the Gomata, and one which bestows health, knowledge and prosperity. In Sanskrit, the word “Go” also means “Light”. Mother cows are worshiped in Shri Krishna Gaushala. From food to Shelter, every need is taken care of. Shri Krishna Gaushala has been established with a very noble vision. Their only objective is to serve the cows. It is said that by serving cows, all the sorrows, pain, and problems of a person go away. The cow has a special place in Hinduism, and it is believed that all gods reside in her body. Feeding a cow with green fodder is considered one of the Maha Daans that is powerful enough to remove all the Grah Doshas, or troubles arising from the malefic effects of the planets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="py-20 md:py-28 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-base font-semibold text-secondary uppercase tracking-widest">Our Collective Impact</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">Your Support Makes a Difference</h2>
              <p className="mt-5 text-foreground/80 text-lg">
                Every contribution, big or small, helps us provide continuous care for our beloved cows. See how our community's generosity adds up!
              </p>
            </div>
            <div className="max-w-4xl mx-auto mt-12">
              <Card className="p-8 shadow-lg">
                <div className="flex justify-between items-end mb-2">
                   <span className="text-xl font-bold text-primary">₹7,50,000</span>
                   <span className="text-lg font-semibold text-muted-foreground">Goal: ₹10,00,000</span>
                </div>
                <Progress value={75} className="h-6" indicatorClassName="bg-primary" />
                <div className="text-center mt-8">
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
        
        <section id="seva" className="py-20 md:py-28 bg-primary/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-base font-semibold text-secondary uppercase tracking-widest">Offer Seva</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">Contribute Through Service</h2>
                    <p className="mt-5 text-foreground/80 text-lg">
                        Your selfless service helps us provide the best care for our cows. Participate in our Seva programs and become a part of our family.
                    </p>
                </div>
                 <SevaCarousel sevaOptions={sevaOptions} />
            </div>
        </section>

        <section id="gallery" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h3 className="text-base font-semibold text-secondary uppercase tracking-widest">Gallery</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">
              Our Beloved Residents
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-foreground/80 text-lg">
              Glimpses of daily life and the gentle souls that call our Goshala home.
            </p>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "https://images.unsplash.com/photo-1660296146250-8f0d6338aa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y293cyUyMHBhc3R1cmV8ZW58MHx8fHwxNzU1NzIyMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Happy Cow"},
                { src: "https://images.unsplash.com/photo-1692632428740-f0f10c652ad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjb3clMjBncmF6aW5nfGVufDB8fHx8MTc1NTcyMjExNHww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Grazing Cow"},
                { src: "https://images.unsplash.com/photo-1618523393652-519b5d343477?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Calf Playing"},
                { src: "https://images.unsplash.com/photo-1720975134463-97ab99685d7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y293cyUyMGhlcmR8ZW58MHx8fHwxNzU1NzIyMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Cow Herd"},
              ].map((image, index) => (
                <div key={index} className="overflow-hidden rounded-2xl group aspect-w-1 aspect-h-1 border-4 border-white">
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

        <section id="testimonials" className="py-20 md:py-28 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-base font-semibold text-secondary uppercase tracking-widest">Testimonials</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">Words from Our Devotees</h2>
                    <p className="mt-5 text-foreground/80 text-lg">
                        Hear from others who have found peace and purpose through their connection with our Goshala.
                    </p>
                </div>
                <TestimonialCarousel testimonials={testimonials} />
            </div>
        </section>

      </main>

      <footer id="contact" className="bg-card border-t mt-12">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
             <div className="flex items-center gap-3">
                <Image 
                  src="/logo.png" 
                  alt="Goshala Logo" 
                  width={40} 
                  height={40} 
                  className="rounded-full object-cover" 
                />
                <span className="text-lg font-bold text-primary">Sri Krishna Goshala</span>
             </div>
            <p className="text-foreground/80 text-sm">
              &copy; {new Date().getFullYear()} Sri Krishna Goshala. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-foreground/80" />
              <a href="tel:+919876543210" className="text-foreground/80 hover:text-primary transition-colors">+91 98765 43210</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

    

    