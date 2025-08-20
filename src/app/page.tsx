import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Milk, Sprout, HeartHandshake, ShieldCheck, Phone, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Goshala Logo" width={40} height={40} />
            <span className="text-2xl font-bold text-foreground">
              Sri Krishna Goshala
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-lg font-medium">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#seva"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Seva
            </Link>
            <Link
              href="#gallery"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button size="lg" className="hidden md:inline-flex rounded-full group" asChild>
            <Link href="#donate">
              Donate Now <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative h-[70vh] md:h-[90vh] w-full overflow-hidden">
           <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute z-0 w-full h-full object-cover"
            >
              <source src="/animations/cow-animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-foreground bg-black/50 p-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter drop-shadow-2xl">
              A Sanctuary for Sacred Cows
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-4xl drop-shadow-lg">
               Welcome to Sri Krishna Goshala, a sacred sanctuary for the protection and welfare of our beloved cows. Join us in our mission to provide a loving and nurturing environment for these gentle souls.
            </p>
            <Button size="lg" className="mt-10 rounded-full text-lg px-10 py-7 group" asChild>
              <Link href="#donate">
                Support Our Mission <HeartHandshake className="w-6 h-6 ml-3 transition-transform group-hover:rotate-12" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="about" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                 <Image
                  src="https://placehold.co/600x400.png"
                  alt="A calm cow being pet"
                  data-ai-hint="petting cow"
                  width={700}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  About Sri Krishna Gaushala
                </h2>
                <h3 className="text-2xl font-bold text-primary mt-4">WHO WE ARE</h3>
                <p className="mt-6 text-muted-foreground text-xl">
                  Sri Krishna Gaushala was established in 2015 by Mr. Krishnamurthy. The Cow referred as Divine Mother, the Gomata, and one which bestows health, knowledge and prosperity. In Sanskrit, the word “Go” also means “Light”. Mother cows are worshiped in Shri Krishna Gaushala. From food to Shelter, every need is taken care of. Shri Krishna Gaushala has been established with a very noble vision. Their only objective is to serve the cows, . It is said that by serving cows, all the sorrows, pain, and problems of a person go away. The cow has a special place in Hinduism, and it is believed that all gods reside in her body. Feeding a cow with green fodder is considered one of the Maha Daans that is powerful enough to remove all the Grah Doshas, or troubles arising from the malefic effects of the planets.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="seva" className="py-20 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Offer Seva, Earn Blessings</h2>
              <p className="mt-5 text-muted-foreground text-xl">
                Your selfless service helps us provide the best care for our cows. Participate in our Seva programs and become a part of our family.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Sprout, title: "Go-Grasa Seva", description: "Feed a cow for a day.", price: "₹1,100", link: "#donate" },
                { icon: ShieldCheck, title: "Medical Seva", description: "Sponsor medical care for a cow.", price: "₹2,100", link: "#donate" },
                { icon: HeartHandshake, title: "Vatsa Seva", description: "Adopt a calf for a month.", price: "₹5,100", link: "#donate" },
                { icon: Video, title: "Video Seva", description: "Join a live video call seva.", price: "₹1,100", link: "/video-seva" },
                { icon: Milk, title: "Gau Daan", description: "Donate a cow to our goshala.", price: "₹21,000", link: "#donate" },
                { icon: HeartHandshake, title: "Life-long Seva", description: "Adopt a cow for its entire life.", price: "₹1,51,000", link: "#donate" }
              ].map(seva => (
                <Card key={seva.title} className="flex flex-col text-center rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="items-center">
                    <div className="bg-secondary p-5 rounded-full">
                      <seva.icon className="h-10 w-10 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle className="text-2xl font-bold">{seva.title}</CardTitle>
                    <CardDescription className="mt-2 text-md">{seva.description}</CardDescription>
                    <p className="text-4xl font-bold text-foreground mt-4">{seva.price}</p>
                  </CardContent>
                  <CardFooter className="justify-center p-6">
                    <Button size="lg" className="w-full rounded-full text-lg" asChild>
                      <Link href={seva.link}>{seva.title === "Video Seva" ? "Book Now" : "Offer Seva"}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Gentle Residents
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-xl">
              Meet some of the beloved cows that call our Goshala home.
            </p>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "https://placehold.co/400x400.png", alt: "Happy Cow", hint: "happy cow"},
                { src: "https://placehold.co/400x400.png", alt: "Grazing Cow", hint: "grazing cow"},
                { src: "https://placehold.co/400x400.png", alt: "Calf Playing", hint: "calf playing"},
                { src: "https://placehold.co/400x400.png", alt: "Cow Herd", hint: "cow herd"},
              ].map((image, index) => (
                <div key={index} className="overflow-hidden rounded-2xl group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="donate" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-primary text-primary-foreground p-12 md:p-16 rounded-3xl text-center relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-16 -right-5 w-48 h-48 bg-white/10 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Your Support is a Blessing
              </h2>
              <p className="mt-5 max-w-3xl mx-auto text-xl">
                Your generous donation helps us provide nutritious food, safe shelter, and medical care for our beloved cows. Every contribution, big or small, makes a monumental difference.
              </p>
              <Button size="lg" variant="secondary" className="mt-10 rounded-full text-lg px-10 py-7 group">
                Donate for a Cause <HeartHandshake className="w-6 h-6 ml-3 transition-transform group-hover:scale-125" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
             <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Goshala Logo" width={32} height={32} />
                <span className="text-lg font-bold">Sri Krishna Goshala</span>
             </div>
            <p className="text-muted-foreground mt-4 md:mt-0">
              &copy; {new Date().getFullYear()} Sri Krishna Goshala. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">+91 98765 43210</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
