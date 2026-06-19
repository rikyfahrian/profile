/** @format */

import ProductImage from "@/app/components/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8 ">
        <section className="mt-10 space-y-4 font-semibold">
          <h1 className="text-4xl md:text-6xl tracking-tight">Skateboarding Setup Project</h1>

          <div className="flex items-center gap-4 ">
            <p className="text-neutral-600">June 2026</p>
            <span>-</span>
            <Link
              href="https://skateboard-setup.vercel.app"
              target="_blank"
              className="flex items-center gap-2 text-sm  border py-1 px-3 rounded-full"
            >
              <p>Online</p>
              <span className="relative inline-flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full inset-0.5 bg-green-500"></span>
              </span>
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <p className="text-lg sm:text-2xl  text-justify">
            I love skateboarding, but I have noticed one recurring problem: almost every beginner
            gets their setup wrong. Whether its the wrong deck size, mismatched truck width, wheels
            that dont suit their style, or even buying poor-quality boards—it happens constantly.
            Maybe they dont have experienced friends to ask, or they are too shy to reach out. Its
            not their fault; the information out there is scattered and confusing. Thats why I built
            this. Its a simple, clean space where beginners can finally understand their gear, make
            the right choices, and focus on what truly matters: learning to skate better.
          </p>
        </section>

        <section className="mt-16 space-y-4 flex flex-col">
          <h2 className="text-lg font-semibold">Main Project — Skateboarding Setup</h2>

          <p className="text-neutral-700 max-w-3xl leading-relaxed">
            Using this website is simple. If you are just starting out, having the right setup is
            crucial to your progress. I use the Shoe Size Method a technique based on your shoe size
            to determine the perfect deck width. This method is proven and widely used by many pros,
            and I have tested it myself to ensure it works.
          </p>

          <ProductImage />

          <a
            href="https://skateboard-setup.vercel.app"
            target="_blank"
            className="underline self-center"
          >
            Visit project →
          </a>
        </section>

        <section className="mt-16 space-y-4">
          <h2 className="text-lg font-semibold">Tools</h2>

          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Tailwind", "Shadcn", "React"].map((tech) => (
              <span key={tech} className="border px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
