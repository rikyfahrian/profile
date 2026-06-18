/** @format */

"";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Work() {
  return (
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
                    <p className="px-3 py-1 rounded-full text-sm bg-gray-200 self-start">Remote</p>
                    <p className="px-3 py-1 rounded-full text-sm bg-green-500 self-start text-green-900">
                      Intern
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Dynamics Management Solution</p>
                <p className="text-sm text-muted-foreground">Aug 2025 - Feb 2026</p>
                <Link href={"/g-brain"} className="text-sm flex underline">
                  Details <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <div>
              <h2 className="text-xl font-semibold">Skateboard Setup</h2>
              <p className="text-sm text-muted-foreground">
                A web app to help (new) skaters find and build their perfect skateboard setup.
              </p>
              <Link href={"/skateboardingsetup"} className="text-sm flex underline">
                Details <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
