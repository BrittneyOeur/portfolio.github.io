"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const FadingText = ({
  text,
  className,
  delay = 0.2,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();
  
  useEffect(() => {
    if (!scope.current) return; // Prevent errors if ref is null

    animate(
      scope.current, // Animate the entire container
      { opacity: 1, x: 0 }, // Fade in and slide right
      { duration: 1.5, delay }
    );
  }, [scope, animate, delay]);

  return (
    <motion.div 
      ref={scope} 
      initial={{ opacity: 0, x: -10 }} // Start faded and shifted left
      animate={{ opacity: 1, x: 0 }} // Fade in and slide right
      transition={{ duration: 1.5, delay }}
      className={cn("text-black", className)}
    >
      A <span className="underline text-orange">software engineer</span> by day and an{" "}
      <span className="underline text-orange">artist</span> by heart
    </motion.div>
  );
};