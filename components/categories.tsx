"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AnimePreview } from "./animePreview";
import { AnimeTitleText } from "./animeTitleText";
import { useMobileWarning } from "@/hooks/useMobileWarning";
import { useMousePosition } from "@/hooks/useMousePosition";
import { ANIME_TITLES } from "@/lib/constant";
import { AnimeSceneEntry, data } from "@/lib/data";
import { Toaster } from "sonner";

const Page = () => {
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  const mousePosition = useMousePosition();
  useMobileWarning();

  return (
    <div className="relative flex w-screen flex-col items-center justify-center mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-6xl md:text-6xl font-bold tracking-tight mb-4">
          Discover Categories
        </h2>
        <p className="text-muted-foreground  max-w-[600px]">
          Browse through our diverse range of categories and find exactly what you're looking for
        </p>
      </div>
      <Toaster />
      <div className="flex flex-col mt-9 items-center justify-center gap-4 text-nowrap text-5xl font-black uppercase text-zinc-300 *:cursor-default md:text-7xl">
        {ANIME_TITLES.map((title) => (
          <AnimeTitleText
            key={title.id}
            title={title}
            onHover={setHoveredText}
            onHoverEnd={() => setHoveredText(null)}
          />
        ))}
      </div>

      <AnimatePresence>
        {hoveredText &&
          data[hoveredText].map((item: AnimeSceneEntry, index: number) => (
            <AnimePreview
              key={index}
              hoveredText={hoveredText}
              item={item}
              index={index}
              mousePosition={mousePosition}
            />
          ))}
      </AnimatePresence>
    </div>
  );
};

export default Page;
