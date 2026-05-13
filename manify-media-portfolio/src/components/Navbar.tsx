import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Manify Media Logo"
            width={40}
            height={40}
            className="w-auto h-8"
          />
          <span className="text-xl font-bold tracking-tight">Manify Media</span>
        </Link>
        <Button asChild variant="default">
          <Link href="#contact">Start Your Project</Link>
        </Button>
      </div>
    </nav>
  );
}
