"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const FadingText = ({
  className,
  delay = 0.2,
}: {
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
      Always <span className="underline text-orange">creating</span>, always {" "}
      <span className="underline text-orange">caring</span>
    </motion.div>
  );
};