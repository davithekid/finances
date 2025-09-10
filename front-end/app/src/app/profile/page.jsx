import { NavigationMenuDemo } from "@/components/blocks/navbar/Navbar";
import { SeparatorProfile } from "@/components/blocks/separator/separatorProfile";
import { DropdownMenuDemo } from "@/components/dropdown/dropdownAvatar";
import { ModeToggle } from "@/components/themes/mode-toggle";

export default function Profile() {
    return (
        <>
            <nav>
                <header className="mx-auto container flex justify-between py-6">
                    <NavigationMenuDemo />
                    <div className="ml-auto flex gap-5">
                        <ModeToggle />
                        <DropdownMenuDemo />
                    </div>
                </header>
            </nav>

            <section className="mx-auto container">
                <SeparatorProfile/>
            </section>
        </>
    )
}