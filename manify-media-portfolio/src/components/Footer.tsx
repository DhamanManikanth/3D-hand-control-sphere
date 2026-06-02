import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 bg-neutral-950 border-t border-neutral-900 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-4">
        <Image
          src="/images/logo.png"
          alt="Manify Media Logo"
          width={32}
          height={32}
          className="w-auto h-6 opacity-70"
        />
        <p className="text-neutral-500 text-sm">
          © 2026 Manify Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
