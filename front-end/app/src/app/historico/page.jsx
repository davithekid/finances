import { SeparatorHistorico } from "@/components/blocks/separator/historico";
import Footer05Page from "@/components/footer/footer";
import Navbar04Page from "@/components/navbar-04/navbar-04";

export default function Historico() {
    return (
        <>
            <nav>
                <header className="mx-auto container flex justify-between py-6">
                    <Navbar04Page />
                </header>
            </nav>

            <main className="mx-auto container py-18 px-6">
                <SeparatorHistorico />
            </main>

            <footer>
                <Footer05Page />
            </footer>
        </>
    )
}