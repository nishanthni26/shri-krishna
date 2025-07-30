import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CowIcon } from '@/components/icons/cow-icon';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <CowIcon className="h-10 w-10 text-primary" />
          <span className="font-bold text-xl font-headline tracking-wide">Sri Krishna Goshala</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          <Link href="/#about" className="text-muted-foreground transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/#services" className="text-muted-foreground transition-colors hover:text-primary">
            Seva
          </Link>
          <Link href="/#gallery" className="text-muted-foreground transition-colors hover:text-primary">
            Gallery
          </Link>
          <Link href="/#blog" className="text-muted-foreground transition-colors hover:text-primary">
            Wisdom
          </Link>
        </nav>
        <Button asChild size="lg">
          <Link href="/#donate">Donate</Link>
        </Button>
      </div>
    </header>
  );
}
