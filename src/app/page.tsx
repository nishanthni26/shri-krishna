import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Home as HomeIcon, Phone, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Goshala Logo" width={32} height={32} />
            <span className="text-xl font-bold text-primary">
              Sri Krishna Goshala
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#gallery"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#donate"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Donate
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex" asChild>
            <Link href="#donate">Donate Now</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative h-[60vh] md:h-[80vh] w-full">
          <Image
            src="https://placehold.co/1600x900.png"
            alt="Hero cow"
            data-ai-hint="indian cow"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/50 p-4">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight drop-shadow-lg">
              Welcome to Sri Krishna Goshala
            </h1>
            <p className="mt-4 text-lg md:text-2xl max-w-3xl drop-shadow-md">
              A sanctuary of love, care, and devotion for the sacred cow.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="#donate">Support Our Mission</Link>
            </Button>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  About Our Goshala
                </h2>
                <p className="mt-4 text-muted-foreground text-lg">
                  Sri Krishna Goshala is a humble abode for cows, considered
                  sacred in our culture. We are dedicated to providing a safe,
                  nurturing, and loving environment for these gentle souls. Our
                  mission is to protect and care for cows, promoting their
                  welfare and raising awareness about their importance.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary p-3 rounded-full">
                      <HomeIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Natural Shelter</h3>
                      <p className="text-sm text-muted-foreground">
                        Spacious and clean living areas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary p-3 rounded-full">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Loving Care</h3>
                      <p className="text-sm text-muted-foreground">
                        Dedicated staff and volunteers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="A calm cow"
                  data-ai-hint="petting cow"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Our Gentle Residents
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
              Meet some of the beloved cows that call our Goshala home.
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <Image
                src="https://images.unsplash.com/photo-1596522869019-461d3afc4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb3clMjBnaXJ8ZW58MHx8fHwxNzUzOTM0MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cow 1"
                data-ai-hint="happy cow"
                width={400}
                height={400}
                className="rounded-lg shadow-md hover:scale-105 transition-transform"
              />
              <Image
                src="https://images.unsplash.com/photo-1523715201095-8bc5927fa2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxCdWZmb2xvJTIwaW5kaWElMjBjb3d8ZW58MHx8fHwxNzUzOTM0MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cow 2"
                data-ai-hint="grazing cow"
                width={400}
                height={400}
                className="rounded-lg shadow-md hover:scale-105 transition-transform"
              />
              <Image
                src="https://placehold.co/400x400.png"
                alt="Cow 3"
                data-ai-hint="calf playing"
                width={400}
                height={400}
                className="rounded-lg shadow-md hover:scale-105 transition-transform"
              />
              <Image
                src="https://placehold.co/400x400.png"
                alt="Cow 4"
                data-ai-hint="cow herd"
                width={400}
                height={400}
                className="rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </section>

        <section id="donate" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Your Support Matters
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg">
                Your generous donations help us provide food, shelter, and
                medical care for our beloved cows. Every contribution makes a
                difference.
              </p>
              <Button size="lg" variant="secondary" className="mt-8">
                Donate for a Cause
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-secondary">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()} Sri Krishna Goshala. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">+1 (123) 456-7890</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
