import CardBanner from "@/components/blocks/cards-index";
import { Hero7 } from "@/components/blocks/Hero";
import { SeparatorDemo } from "@/components/blocks/separator/separator";
import Footer05Page from "@/components/footer/footer";
import Navbar04Page from "@/components/navbar-04/navbar-04";

export default function Home() {
  return (
    <>
      <nav>
        <header className="mx-auto container flex justify-between py-6">
          <Navbar04Page />
        </header>
      </nav>

      <main className="mx-auto container">
        <Hero7 />
        <SeparatorDemo />
      </main>

      <footer>
        <Footer05Page />
      </footer>
    </>
  );
}
