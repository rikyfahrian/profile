/** @format */

import { AppBreadcrumb } from "../components/breadcrumb-wrap";

export default function PartsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 p-6 bg-zinc-50 font-sans">
      <AppBreadcrumb />
      {children}
    </div>
  );
}
