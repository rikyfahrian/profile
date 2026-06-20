/** @format */

import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-8">
      <section className="mt-10 space-y-4 font-semibold">
        <h1 className="text-5xl tracking-tight md:text-6xl">
          Frontend Developer at Dynamics Management Solution{" "}
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-normal tracking-normal">
            <Link href="https://www.dynamics-ms.com/" target="_blank">
              dynamics.ms.com
            </Link>
            <span className="relative inline-flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inset-0.5 inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
          </span>
        </h1>

        <p className="text-neutral-600">Aug 2025 – Feb 2026</p>
      </section>

      <section className="mt-10">
        <p className="text-justify text-2xl">
          I worked as a frontend intern focused on translating designs into
          clean, responsive interfaces. Most of my work involved slicing UI,
          building reusable components, and ensuring layouts stayed consistent
          across devices.
        </p>
      </section>

      <section className="mt-16 space-y-4">
        <h2 className="text-lg font-semibold">Main Project — G-Brain</h2>

        <p className="max-w-3xl leading-relaxed text-neutral-700">
          G-Brain is an AI-powered career assistant that helps job seekers
          practice interviews with intelligent feedback and automatically search
          and apply for relevant job openings. I contributed to the frontend by
          implementing responsive components, integrating interfaces, and
          building reusable UI patterns for real workflows.{" "}
        </p>

        <a
          href="https://g-brain.co.id/en"
          target="_blank"
          className="underline"
        >
          Visit project →
        </a>
      </section>

      <section className="mt-16 space-y-4">
        <h2 className="text-lg font-semibold">What i do</h2>

        <ul className="ml-6 list-disc space-y-1 text-neutral-700">
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
          {[
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Caprover",
            "Gitlab",
            "Clickup",
            "Sprint",
          ].map((tech) => (
            <span key={tech} className="rounded-full border px-3 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
