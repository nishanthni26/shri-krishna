import Link from "next/link";
import { CowIcon } from "./icons/cow-icon";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <CowIcon className="h-8 w-8 text-primary" />
              <span className="font-bold text-lg font-headline tracking-wide">Sri Krishna Goshala</span>
            </Link>
            <p className="text-muted-foreground">A sanctuary of love, care, and devotion for the sacred cow.</p>
          </div>
          <div>
            <h3 className="font-headline text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/#services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/#gallery" className="text-muted-foreground hover:text-primary">Gallery</Link></li>
              <li><Link href="/#donate" className="text-muted-foreground hover:text-primary">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg mb-4">Contact</h3>
            <p className="text-muted-foreground">123 Divine Path, Vrindavan, IN</p>
            <p className="text-muted-foreground">contact@srikrishnagoshala.org</p>
          </div>
        </div>
        <Separator className="my-8"/>
        <div className="text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Sri Krishna Goshala Online. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
