"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

export default function Counter({ target, suffix = "", label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1500, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (v) =>
      setDisplayValue(Math.round(v)),
    );
    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.div ref={ref} className="flex flex-col items-center gap-1">
      <span className="font-heading text-3xl md:text-4xl font-bold text-brand-accent">
        {displayValue.toLocaleString()}
        {suffix}
      </span>
      <span className="font-mono-brand text-xs uppercase tracking-wider text-brand-text-secondary text-center">
        {label}
      </span>
    </motion.div>
  );
}
