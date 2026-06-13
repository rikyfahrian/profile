/** @format */

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import AnimatedHeroText from "./slug";
import { Work } from "./components/work";
import Link from "next/link";

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
        <AnimatedHeroText
          text={`Obsessed with Beautiful UI, Next.Js & React Specialist. Let's share and connect — based in Jakarta, Indonesia.`}
        />
      </div>

      <Work />

      <div className="items-center flex flex-col gap-3 mt-auto ">
        <div className="flex gap-3 text-2xl">
          <Link
            href={"https://linkedin.com/in/rikyfahrian"}
            target="_blank"
            className="border p-2 rounded-lg text-blue-800"
          >
            <FaLinkedin />
          </Link>

          <Link
            href={"http://github.com/rikyfahrian"}
            target="_blank"
            className="border p-2 rounded-lg"
          >
            <FaGithub />
          </Link>

          <Link
            href={"https://wa.me/6285695076694"}
            target="_blank"
            className="border p-2 rounded-lg text-green-500"
          >
            <FaWhatsapp />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">© 2026</p>
      </div>
    </div>
  );
}
