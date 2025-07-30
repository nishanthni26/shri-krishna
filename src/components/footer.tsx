import Link from "next/link";
import { CowIcon } from "./icons/cow-icon";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <CowIcon className="h-10 w-10 text-primary" />
              <span className="font-bold text-xl font-headline tracking-wide">Sri Krishna Goshala</span>
            </Link>
            <p className="text-muted-foreground max-w-md mx-auto md:mx-0">A sanctuary of love, care, and devotion for the sacred cow, inspired by the timeless teachings of Sanatana Dharma.</p>
          </div>
          <div>
            <h3 className="font-headline text-lg mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">Seva</Link></li>
              <li><Link href="/#gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/#blog" className="text-muted-foreground hover:text-primary transition-colors">Wisdom</Link></li>
              <li><Link href="/#donate" className="text-muted-foreground hover:text-primary transition-colors">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg mb-4 font-semibold">Contact Us</h3>
            <address className="not-italic">
                <p className="text-muted-foreground">123 Divine Path, Vrindavan, IN</p>
                <p className="text-muted-foreground">contact@srikrishnagoshala.org</p>
            </address>
          </div>
        </div>
        <Separator className="my-8"/>
        <div className="text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Sri Krishna Goshala. All Rights Reserved.</p>
           <p className="mt-1">Designed with love and devotion.</p>
        </div>
      </div>
    </footer>
  );
}
