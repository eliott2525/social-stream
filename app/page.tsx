import Navbar from "../components/sections/navbar/default";
import Hero from "../components/sections/hero/default";
import Stats from "../components/sections/stats/default";
import Logos from "../components/sections/logos/default";
import Items from "../components/sections/items/default";
import FAQ from "../components/sections/faq/default";
import CTA from "../components/sections/cta/default";
import Footer from "../components/sections/footer/default";
import Pricing from "../components/sections/pricing/default";
import Testimonials from "../components/sections/testimonials/default";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <div id="platforms">
        <Logos />
      </div>
      <div id="features">
        <Items />
      </div>
      <Stats />
      <div id="pricing">
        <Pricing />
      </div>
      <div id="reviews">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <CTA />
      <Footer />
    </main>
  );
}
