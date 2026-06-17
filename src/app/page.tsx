import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import SocialProof from '@/components/sections/SocialProof';
import Equipamentos from '@/components/sections/Equipamentos';
import Portfolio from '@/components/sections/Portfolio';
import Sobre from '@/components/sections/Sobre';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark font-sans text-gray-100 selection:bg-brand selection:text-black overflow-x-hidden">
      <Header />
      <Hero />
      <InfiniteMarquee />
      <SocialProof />
      <Equipamentos />
      <Portfolio />
      <Sobre />
      <Footer />
    </main>
  );
}
