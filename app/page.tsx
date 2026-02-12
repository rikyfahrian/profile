/** @format */

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import AnimatedHeroText from "./slug";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-10 py-7 bg-zinc-50 font-sans gap-5">
      <div className="flex flex-col gap-3 sm:flex sm:flex-row ">
        <AnimatedHeroText text="Hi, I'm Riki" />
        <div className="flex gap-2">
          <p className="border border-black h-fit rounded-full px-3">Mohamad Riki Fahrian</p>
          <p className="border border-black h-fit rounded-full px-3">he, him, his</p>
        </div>
      </div>

      <div>
        <AnimatedHeroText text={`By day a computer science student. By night I slice UI with Next.js, create service using Go. Let's share and connect — based in Jakarta, Indonesia.`} />
      </div>

      <div className="items-center self-center">
        <main className="max-w-4xl mx-auto ">
          <section className="mt-20 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
              <div className="flex gap-2">
                <Link href={"https://www.dynamics-ms.com/"} target="_blank">
                  <Image src="/dms.jpeg" alt="dms" width={50} height={50} />
                </Link>
                <div>
                  <div className="flex gap-7">
                    <p className="text-xl font-semibold">Frontend Developer</p>
                    <div className="flex gap-1">
                      <p className="px-3 py-1 rounded-full text-sm bg-gray-200 self-start ">Remote</p>
                      <p className="px-3 py-1 rounded-full text-sm bg-green-500 self-start ">Intern</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Dynamics Management Solution</p>
                  <p className="text-sm text-muted-foreground">Aug 2025 - Feb 2026</p>
                  <Link href={"/work-experience/g-brain"} className="text-sm flex underline">
                    Details <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Tools</h2>
              <div className="flex flex-wrap gap-2">
                {["Go", "Next.js", "TypeScript", "PostgreSQL", "Docker", "Postman", "Git"].map((tech) => (
                  <span key={tech} className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="items-center flex flex-col gap-3 mt-auto ">
        <div className="flex gap-3 text-2xl">
          <Link href={"https://linkedin.com/in/rikyfahrian"} target="_blank" className="border p-2 rounded-lg text-blue-800">
            <FaLinkedin />
          </Link>

          <Link href={"http://github.com/rikyfahrian"} target="_blank" className="border p-2 rounded-lg">
            <FaGithub />
          </Link>

          <Link href={"https://wa.me/6285695076694"} target="_blank" className="border p-2 rounded-lg text-green-500">
            <FaWhatsapp />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">© 2026</p>
      </div>
    </div>
  );
}
