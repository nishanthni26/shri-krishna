import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Milk, Sprout, HeartHandshake, ShieldCheck, Phone, Video, LogIn, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/ui/hero-carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background antialiased">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Goshala Logo" 
              width={48} 
              height={48} 
              className="rounded-full object-cover border-2 border-primary/20" 
            />
            <span className="text-2xl font-bold text-primary tracking-tight">
              Sri Krishna Goshala
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-2 text-base font-medium">
            <Button variant="ghost" asChild>
                <Link href="#about">About</Link>
            </Button>
             <Button variant="ghost" asChild>
                <Link href="#seva">Seva</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="#gallery">Gallery</Link>
            </Button>
             <Button variant="ghost" asChild>
                <Link href="#contact">Contact</Link>
            </Button>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/login" className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Login
              </Link>
            </Button>
            <Button className="rounded-full group shadow-lg shadow-primary/20" asChild>
              <Link href="#donate">
                Donate Now <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full py-32 md:py-48 flex items-center justify-center text-center">
          <HeroCarousel />
          <div className="relative z-10 flex flex-col items-center justify-center p-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-primary to-slate-600">
              A Sanctuary of Compassion
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl text-muted-foreground">
               Welcome to Sri Krishna Goshala, a sacred haven dedicated to the care and protection of cows. Join us in nurturing these gentle souls.
            </p>
            <Button size="lg" className="mt-10 rounded-full text-lg px-10 py-7 group shadow-xl shadow-primary/20" asChild>
              <Link href="#donate">
                Support Our Cows <HeartHandshake className="w-6 h-6 ml-3 transition-transform group-hover:rotate-12" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="about" className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative w-full aspect-square">
                 <Image
                  src="/gallery/cow-face.jpg"
                  alt="A calm cow with gentle eyes"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl shadow-2xl"
                  data-ai-hint="cow portrait"
                />
              </div>
              <div className="prose-lg">
                <h3 className="text-base font-semibold text-accent-foreground uppercase tracking-widest">Our Story</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mt-2">
                  About Sri Krishna Goshala
                </h2>
                <p className="mt-6 text-muted-foreground">
                  Sri Krishna Gaushala was established in 2015 by Mr. Krishnamurthy. The Cow referred as Divine Mother, the Gomata, and one which bestows health, knowledge and prosperity. In Sanskrit, the word “Go” also means “Light”. Mother cows are worshiped in Shri Krishna Gaushala. From food to Shelter, every need is taken care of. Shri Krishna Gaushala has been established with a very noble vision. Their only objective is to serve the cows. It is said that by serving cows, all the sorrows, pain, and problems of a person go away. The cow has a special place in Hinduism, and it is believed that all gods reside in her body. Feeding a cow with green fodder is considered one of the Maha Daans that is powerful enough to remove all the Grah Doshas, or troubles arising from the malefic effects of the planets.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="seva" className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-base font-semibold text-primary uppercase tracking-widest">Offer Seva</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">Contribute Through Service</h2>
              <p className="mt-5 text-muted-foreground text-lg">
                Your selfless service helps us provide the best care for our cows. Participate in our Seva programs and become a part of our family.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Sprout, title: "Go-Grasa Seva", description: "Feed a cow for a day.", price: "₹1,100", link: "#donate" },
                { icon: ShieldCheck, title: "Medical Seva", description: "Sponsor medical care for a cow.", price: "₹2,100", link: "#donate" },
                { icon: Award, title: "Vatsa Seva", description: "Adopt a calf for a month.", price: "₹5,100", link: "#donate" },
                { icon: Video, title: "Video Seva", description: "Join a live video call seva.", price: "₹1,100", link: "/video-seva" },
                { icon: Milk, title: "Gau Daan", description: "Donate a cow to our goshala.", price: "₹21,000", link: "#donate" },
                { icon: HeartHandshake, title: "Life-long Seva", description: "Adopt a cow for its entire life.", price: "₹1,51,000", link: "#donate" }
              ].map(seva => (
                <Card key={seva.title} className="flex flex-col text-center rounded-2xl shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group">
                  <CardHeader className="items-center pt-8">
                    <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                      <seva.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle className="text-2xl font-bold text-primary">{seva.title}</CardTitle>
                    <p className="mt-2 text-base text-muted-foreground">{seva.description}</p>
                    <p className="text-4xl font-bold text-foreground mt-4">{seva.price}</p>
                  </CardContent>
                  <div className="p-6">
                    <Button size="lg" className="w-full rounded-full text-lg" asChild>
                      <Link href={seva.link}>{seva.title === "Video Seva" ? "Book Now" : "Offer Seva"}</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h3 className="text-base font-semibold text-primary uppercase tracking-widest">Gallery</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">
              Our Beloved Residents
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">
              Glimpses of daily life and the gentle souls that call our Goshala home.
            </p>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "/gallery/cow-1.jpg", alt: "Happy Cow"},
                { src: "/gallery/cow-2.jpg", alt: "Grazing Cow"},
                { src: "/gallery/cow-3.jpg", alt: "Calf Playing"},
                { src: "/123.png", alt: "New Image"},
                { src: "/gallery/cow-4.jpg", alt: "Cow Herd"},
              ].map((image, index) => (
                <div key={index} className="overflow-hidden rounded-2xl group aspect-w-1 aspect-h-1">
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

        <section id="donate" className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-gradient-to-br from-primary to-blue-400 text-primary-foreground p-12 md:p-20 rounded-3xl text-center relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full opacity-50"></div>
                <div className="absolute -bottom-16 -right-5 w-48 h-48 bg-white/10 rounded-full opacity-50"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Your Support is a Blessing
              </h2>
              <p className="mt-5 max-w-3xl mx-auto text-lg text-white/80">
                Your generous donation helps us provide nutritious food, safe shelter, and medical care for our beloved cows. Every contribution, big or small, makes a monumental difference.
              </p>
              <Button size="lg" variant="secondary" className="mt-10 rounded-full text-lg px-10 py-7 group bg-white text-primary hover:bg-white/90 shadow-2xl">
                Donate for a Cause <HeartHandshake className="w-6 h-6 ml-3 transition-transform group-hover:scale-125" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-secondary/70">
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
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Sri Krishna Goshala. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">+91 98765 43210</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
