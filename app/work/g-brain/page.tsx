/** @format */

import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-8 ">
        <section className="mt-10 space-y-4 font-semibold">
          <h1 className="text-5xl md:text-6xl tracking-tight">
            Frontend Developer at Dynamics Management Solution{" "}
            <span className="text-sm tracking-normal font-normal border py-1 px-3 rounded-full ">
              <Link href={"https://www.dynamics-ms.com/"} target="_blank">
                dynamics.ms.com
              </Link>
            </span>
          </h1>

          <p className="text-neutral-600">Aug 2025 – Feb 2026</p>
        </section>

        <section className="mt-10">
          <p className="text-2xl text-justify">
            I worked as a frontend intern focused on translating designs into clean, responsive
            interfaces. Most of my work involved slicing UI, building reusable components, and
            ensuring layouts stayed consistent across devices.
          </p>
        </section>

        <section className="mt-16 space-y-4">
          <h2 className="text-lg font-semibold">Main Project — G-Brain</h2>

          <p className="text-neutral-700 max-w-3xl leading-relaxed">
            G-Brain is an AI-powered career assistant that helps job seekers practice interviews
            with intelligent feedback and automatically search and apply for relevant job openings.
            I contributed to the frontend by implementing responsive components, integrating
            interfaces, and building reusable UI patterns for real workflows.{" "}
          </p>

          <a href="https://g-brain.co.id/en" target="_blank" className="underline">
            Visit project →
          </a>
        </section>

        <section className="mt-16 space-y-4">
          <h2 className="text-lg font-semibold">What i do</h2>

          <ul className="list-disc ml-6 text-neutral-700 space-y-1">
            <li>Built reusable UI components</li>
            <li>Built feature Internationalization</li>
            <li>Integrated REST APIs</li>
            <li>Implemented responsive layouts</li>
            <li>Collaborated with backend & design team</li>
            <li>Optimized frontend performance</li>
          </ul>
        </section>

        <section className="mt-16 space-y-4">
          <h2 className="text-lg font-semibold">Tools</h2>

          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Tailwind", "Caprover", "Gitlab", "Clickup", "Sprint"].map(
              (tech) => (
                <span key={tech} className="border px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ),
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
