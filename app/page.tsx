/** @format */

import AnimatedHeroText from "./components/slug";
import { Work } from "./components/work";
import { EmailBadge } from "./components/email";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen px-10 py-7 font-sans gap-5">
      <div className="flex flex-col gap-3 md:flex-row ">
        <AnimatedHeroText text="Hi, I'm Riki" />
        <div className="flex gap-2 text-sm sm:text-lg">
          <p className="border border-black h-fit rounded-full px-3 ">Mohamad Riki Fahrian</p>
          <p className="border border-black h-fit rounded-full px-3">he, him, his</p>
        </div>
      </div>

      <div>
        <AnimatedHeroText
          text={`Obsessed with Beautiful UI, Next.Js & React Specialist. Let's share and connect — based in Jakarta, Indonesia.`}
        />
      </div>

      <EmailBadge />

      <Work />
    </main>
  );
}
