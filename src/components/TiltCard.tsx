import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";

// Based on https://www.hover.dev/components/cards

interface TiltCardProps {
  src: string;
  alt: string;
}

const ROTATION_RANGE = 32;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ src, alt }: TiltCardProps) => {
  const ref = useRef<HTMLImageElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = (mouseY / height) * ROTATION_RANGE - HALF_ROTATION_RANGE;
    const rY = (mouseX / width) * ROTATION_RANGE - HALF_ROTATION_RANGE;

    x.set(rX * -1);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="relative w-full h-full" 
      style={{ perspective: "1000px" }}
    > 
      <motion.img
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="w-full h-full object-cover rounded-xl shadow-2xl"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default TiltCard;