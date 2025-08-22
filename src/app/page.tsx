
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Milk, Sprout, HeartHandshake, ShieldCheck, Phone, Video, LogIn, Award, Sun, Calendar, CalendarCheck, Wheat, Leaf, Quote, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/ui/hero-carousel";
import { Progress } from "@/components/ui/progress";

export default function Home() {

  const sevaOptions = [
      { icon: Sun, title: "A cow’s expenditure per day", price: "₹111", link: "/payment" },
      { icon: Calendar, title: "Monthly expense of a cow", price: "₹3,000", link: "/payment" },
      { icon: CalendarCheck, title: "Annual cost of a cow", price: "₹31,000", link: "/payment" },
      { icon: HeartHandshake, title: "Donation of a cow", price: "₹31,000", link: "/payment" },
      { icon: Users, title: "Cow’s coward", price: "₹2,500", link: "/payment" },
      { icon: Leaf, title: "Green grass (Full load)", price: "₹11,000", link: "/payment" },
      { icon: Sprout, title: "Green grass (Half load)", price: "₹6,100", link: "/payment" },
      { icon: Wheat, title: "Dry grass (Full load)", price: "₹10,000", link: "/payment" },
      { icon: Milk, title: "Dry grass (Half load)", price: "₹5,000", link: "/payment" },
  ];

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
        
        <section id="seva" className="py-20 md:py-28 bg-primary/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-base font-semibold text-secondary uppercase tracking-widest">Offer Seva</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">Contribute Through Service</h2>
                    <p className="mt-5 text-foreground/80 text-lg">
                        Your selfless service helps us provide the best care for our cows. Participate in our Seva programs and become a part of our family.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sevaOptions.map(seva => (
                       <div key={seva.title} className="flex flex-col text-center items-center p-8 rounded-2xl shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group overflow-hidden bg-background border">
                            <div className="bg-secondary text-primary-foreground h-20 w-20 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                              <seva.icon className="h-10 w-10" />
                            </div>
                            <h4 className="text-xl font-bold text-primary mt-4 flex-grow">{seva.title}</h4>
                            <p className="text-2xl font-bold text-foreground/80 my-4">{seva.price}</p>
                             <Button asChild className="mt-auto rounded-full">
                              <Link href={seva.link}>
                                Book Now
                              </Link>
                            </Button>
                        </div>
                    ))}
                </div>
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
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                         { name: "Sai Karthik", quote: "We had a heartwarming experience visiting this goshala with our family. The environment was serene, the cows were well taken care of, and the entire place was clean and peaceful. It was a joy to see the love and dedication of the caretakers. A great place for families to connect with nature and tradition!", avatar: "https://placehold.co/100x100.png", hint: "south indian man" },
                         { name: "Priya Sharma", quote: "A truly spiritual place. The live video seva allowed me to connect with the goshala from my home. It was a blessing to see the cows so happy and well-cared for. I recommend it to everyone.", avatar: "https://placehold.co/100x100.png", hint: "woman praying" },
                         { name: "Rajesh Gupta", quote: "I participated in the 'Gau Daan' program, and it was a deeply moving and fulfilling experience. The management is very helpful and ensures all rituals are followed. A must-visit for any devotee.", avatar: "https://placehold.co/100x100.png", hint: "indian businessman" },
                    ].map(testimonial => (
                        <Card key={testimonial.name} className="bg-background p-8 rounded-2xl shadow-lg text-center border">
                            <Quote className="h-12 w-12 text-primary/30 mx-auto" />
                            <CardContent className="pt-6">
                                <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                            </CardContent>
                            <CardHeader className="items-center pt-4">
                                <Image src={testimonial.avatar} alt={testimonial.name} width={64} height={64} className="rounded-full mb-4 border-2 border-primary/50" data-ai-hint={testimonial.hint} />
                                <CardTitle className="font-bold text-xl text-primary">{testimonial.name}</CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
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

    