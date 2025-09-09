import { NavigationMenuDemo } from "@/components/blocks/navbar/Navbar";
import { SeparatorDemo } from "@/components/blocks/separator/separator";
import { ModeToggle } from "@/components/themes/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <header className="mx-auto container flex justify-between py-6">
          <NavigationMenuDemo />
          <ModeToggle />
        </header>
      </nav>

      <main className="mx-auto container py-8">
        <SeparatorDemo/>
      </main>
    </>
  );
}
