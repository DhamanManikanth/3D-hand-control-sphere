import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Manify Media
        </Link>
        <Link href="#contact">
          <Button variant="default">Start Your Project</Button>
        </Link>
      </div>
    </nav>
  );
}
