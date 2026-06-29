/** @format */

import { Work } from "./components/work";
import { EmailBadge } from "./components/email";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5 px-10 py-7 font-sans selection:bg-green-500 selection:text-white">
      <div className="flex flex-col gap-3 md:flex-row">
        <p className="flex flex-wrap gap-x-3 text-5xl leading-tight sm:text-7xl 2xl:text-8xl">
          Hi, I&apos;m Riki
        </p>
        <div className="flex gap-2 text-sm sm:text-lg">
          <p className="h-fit rounded-full border border-black px-3">
            Mohamad Riki Fahrian
          </p>
          <p className="h-fit rounded-full border border-black px-3">
            he, him, his
          </p>
        </div>
      </div>

      <div>
        <p className="flex flex-wrap gap-x-3 text-5xl leading-tight selection:bg-green-500 selection:text-white sm:text-7xl 2xl:text-8xl">
          Obsessed with Beautiful UI, Next.Js & React Specialist. Let&apos;s
          share and connect — based in Jakarta, Indonesia.
        </p>
      </div>

      <EmailBadge />

      <Work />
    </main>
  );
}
