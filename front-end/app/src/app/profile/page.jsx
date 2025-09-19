import { SeparatorProfile } from "@/components/blocks/separator/separatorProfile";
import Footer05Page from "@/components/footer/footer";
import Navbar04Page from "@/components/navbar-04/navbar-04";

export default function Profile() {
    return (
        <>
            <nav>
                <header className="mx-auto container flex justify-between py-14">
                    <Navbar04Page />
                </header>
            </nav>

            <section className="mx-auto container px-4">
                <SeparatorProfile />
            </section>

            <Footer05Page />
        </>
    )
}