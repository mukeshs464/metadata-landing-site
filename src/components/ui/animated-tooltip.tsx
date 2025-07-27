"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "./popover";
import { Info } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./card";
import { FloatingDock } from "./floating-dock";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    quote: string;
    photo: string;
    bio?: string;
    contact?: string;
    links: {
      title: string; icon: React.ReactNode; href: string
    }[];
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-base font-bold text-white">
                  {item.quote}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Card
            key={idx}
            className="relative w-full h-full flex flex-col justify-between bg-white/70 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition-all group overflow-hidden"
          >
            <div className="absolute top-3 right-3 z-10">
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className="p-2 bg-white shadow-sm border border-gray-300 rounded-full hover:bg-blue-600 hover:text-blue-300 transition"
                    aria-label="More Info"
                  >
                    <Info size={18} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-72 shadow-lg rounded-lg p-4 bg-white">
                  <h4 className="font-semibold text-md mb-1">{item.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {item?.bio || "No additional info available."}
                  </p>
                </PopoverContent>
              </Popover>
            </div>

            <CardHeader className="p-4">
              <div className="relative overflow-hidden rounded-lg h-44 w-full mb-4">
                <img
                  src={item.photo || "/placeholder.jpg"}
                  alt={item.name}
                  className="object-cover h-full w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardTitle className="text-lg text-gray-800">{item.name}</CardTitle>
            </CardHeader>
            <FloatingDock
              items={item.links}
              mobileClassName="!ml-4"
            />
          </Card>
        </div>
      ))}
    </>
  );
};