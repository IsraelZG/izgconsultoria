import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBackgroundProps {
  className?: string;
}

const ParallaxBackground = ({ className = "" }: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-35%", "35%"]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute top-1/4 -left-32 w-[700px] h-[700px] rounded-full bg-primary/20 blur-[160px]" />
        <div className="absolute bottom-1/4 -right-32 w-[700px] h-[700px] rounded-full bg-secondary/20 blur-[160px]" />
      </motion.div>
    </div>
  );
};

export default ParallaxBackground;
