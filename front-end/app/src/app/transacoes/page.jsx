import Footer from "@/components/blocks/Footer/Footer";
import { NavigationMenuDemo } from "@/components/blocks/navbar/Navbar";
import { SeparatorTransacao } from "@/components/blocks/separator/separatorTransacao";
import { ModeToggle } from "@/components/themes/mode-toggle";

export default function transacoes() {
    return (
        <>
            <nav>
                <header className="mx-auto container flex justify-between py-6">
                    <NavigationMenuDemo />
                    <ModeToggle />
                </header>
            </nav>

            <main className="mx-auto container py-8">
                <SeparatorTransacao />
            </main>

        </>
    )
}