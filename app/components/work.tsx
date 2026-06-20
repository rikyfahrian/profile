/** @format */

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Work() {
  return (
    <section className="mx-auto mt-10 grid max-w-4xl items-center gap-12 self-center md:grid-cols-2">
      <div>
        <h2 className="mb-4 text-xl font-semibold">Work Experience</h2>
        <div className="flex gap-2">
          <Link
            href={"https://www.dynamics-ms.com/"}
            target="_blank"
            className="hidden sm:block"
          >
            <Image
              src="/dms.jpeg"
              alt="dms"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
          <div>
            <div className="flex gap-7">
              <p className="text-xl font-semibold">Frontend Developer</p>
              <div className="flex gap-1">
                <p className="self-start rounded-full bg-gray-200 px-3 py-1 text-sm">
                  Remote
                </p>
                <p className="self-start rounded-full bg-green-600 px-3 py-1 text-sm text-white">
                  Intern
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Dynamics Management Solution
            </p>
            <p className="text-muted-foreground text-sm">Aug 2025 - Feb 2026</p>
            <Link href={"/g-brain"} className="flex text-sm underline">
              Details <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Projects</h2>
        <div>
          <h2 className="text-xl font-semibold">Skateboard Setup</h2>
          <p className="text-muted-foreground text-sm">
            A web app to help (new) skaters find and build their perfect
            skateboard setup.
          </p>
          <Link
            href={"/skateboarding-setup"}
            className="flex text-sm underline"
          >
            Details <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
