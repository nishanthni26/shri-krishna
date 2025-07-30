import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CowIcon } from '@/components/icons/cow-icon';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <CowIcon className="h-8 w-8 text-primary" />
          <span className="font-bold text-lg font-headline tracking-wide">Sri Krishna Goshala</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/#about" className="text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/#services" className="text-muted-foreground transition-colors hover:text-foreground">
            Services
          </Link>
          <Link href="/#gallery" className="text-muted-foreground transition-colors hover:text-foreground">
            Gallery
          </Link>
          <Link href="/#blog" className="text-muted-foreground transition-colors hover:text-foreground">
            Blog
          </Link>
        </nav>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/#donate">Donate</Link>
        </Button>
      </div>
    </header>
  );
}
