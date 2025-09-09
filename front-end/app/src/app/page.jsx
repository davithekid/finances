import { AvatarDemo } from "@/components/Avatar/avatar";
import { AccordionDemo } from "@/components/blocks/accordion/Accordion";
import Footer from "@/components/blocks/Footer/Footer";
import { NavigationMenuDemo } from "@/components/blocks/navbar/Navbar";
import { SeparatorDemo } from "@/components/blocks/separator/separator";
import { DropdownMenuDemo } from "@/components/dropdown/dropdownAvatar";
import { ModeToggle } from "@/components/themes/mode-toggle";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <header className="mx-auto container flex justify-between py-6">
          <NavigationMenuDemo />
          <div className="ml-auto flex gap-5">
          <ModeToggle />
          <DropdownMenuDemo/>
          </div>
        </header>
      </nav>

      <main className="mx-auto container py-8">
        <SeparatorDemo />
      </main>

    </>
  );
}
