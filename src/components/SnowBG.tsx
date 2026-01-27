import { motion } from "motion/react";

type Flake = {
  size: number;
  left: number;
  duration: number;
  delay: number;
};

const flakes: Flake[] = Array.from({ length: 300 }).map(() => ({
  size: Math.random() * 3 + 1,
  left: Math.random() * 100,
  duration: Math.random() * 10 + 5,
  delay: Math.random() * 10,
}));

const SnowBG = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#191F24]">
      {flakes.map((flake, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            width: flake.size,
            height: flake.size,
            left: `${flake.left}%`,
            top: "-10%",
          }}
          animate={{
            y: ["0vh", "110vh"],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default SnowBG;
