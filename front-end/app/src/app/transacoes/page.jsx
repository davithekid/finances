import { SeparatorTransacao } from "@/components/blocks/separator/separatorTransacao";
import Footer05Page from "@/components/footer/footer";
import Navbar04Page from "@/components/navbar-04/navbar-04";

export default function transacoes() {
    return (
        <>
            <nav>
                <header className="mx-auto container flex justify-between py-6">
                    <Navbar04Page />
                </header>
            </nav>

            <main className="mx-auto container py-8">
                <SeparatorTransacao />
            </main>

            <footer>
                <Footer05Page />
            </footer>

        </>
    )
}