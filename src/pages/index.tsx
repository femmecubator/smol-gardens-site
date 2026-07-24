import Layout from "@theme/Layout";
import { Heart, Users, MessageSquare } from "lucide-react";
import Card, { type CardProps } from "@site/src/components/Card";

const cards: CardProps[] = [
  { icon: Heart, title: "Build with Intention", body: "Explore our study on accountable AI workflow using Seedscore, a practical frameworks for builders who want to create responsibly.", link: "Learn about Smol Gardens >" },
  { icon: Users, title: "Contribute to this research", body: "Researchers, educators, and civic tech builders — join our working group and help shape accountable AI. Email us to get involved.", link: "Join the Working Group >" },
  { icon: MessageSquare, title: "Host a workshop", body: "Everything you need to run a Smol Gardens workshop — hosting instructions and materials included. Bring Smol Gardens to your community.", link: "Access workshop materials" },
];

export default function Home() {
  return (
    <Layout title="Smol Gardens" description="Accountable AI guide for Builders and Educators">
      <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[720px]" style={{ background: "radial-gradient(1200px 520px at 85% 8%, #d7f6e3 0%, rgba(215,246,227,0) 60%), radial-gradient(700px 380px at 78% 62%, #cfe0ff 0%, rgba(207,224,255,0) 65%)" }} />
        <div className="relative mx-auto max-w-[1200px] px-6 pb-24 pt-16 md:px-10">
          <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <h1 className="font-['Nunito_Sans'] text-[40px] font-medium leading-[1.15] text-[#222] md:text-[48px] md:leading-[56px]">Accountable AI<br />guide for Builders and Educators</h1>
              <a href="/seedscore" className="inline-flex h-[48px] w-fit items-center justify-center rounded-[10px] bg-[#761fb1] px-6 font-['Inter'] text-[16px] text-white transition-colors hover:bg-[#5f1790]">Plan your projects with Seedscore</a>
            </div>
            <div className="lg:justify-self-end">
              <img src="/img/hero-team.jpg" alt="A team of builders and educators collaborating around a table" className="aspect-[492/328] w-full max-w-[492px] rounded-[16px] object-cover" />
            </div>
          </section>
          <section className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
            {cards.map((c) => <Card key={c.title} {...c} />)}
          </section>
        </div>
      </div>
    </Layout>
  );
}
