"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  // Position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring for smoothness
  const springX = useSpring(cursorX, { damping: 25, stiffness: 250 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 250 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a"
      );
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Single Golden Dot Cursor */}
      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
          left: -8,
          top: -8,
        }}
        animate={{
          scale: isPointer ? 1.4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        className="hidden md:block absolute w-4 h-4 rounded-full bg-brand-primary/80 blur-[2px] shadow-[0_0_15px_rgba(201,162,39,0.4)]"
      />
      
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
          left: -2,
          top: -2,
        }}
        animate={{
          scale: isPointer ? 0.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        className="hidden md:block absolute w-1 h-1 rounded-full bg-brand-primary shadow-sm"
      />
    </div>
  );
}
