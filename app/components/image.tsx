/** @format */

"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImage() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative h-50 sm:h-80 w-full overflow-hidden rounded-lg">
      {loading && <div className="absolute inset-0 animate-pulse bg-muted" />}

      <Image
        src="/image.png"
        alt="Image"
        fill
        className={`object-cover transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
