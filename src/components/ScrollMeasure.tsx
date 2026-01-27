import {
	motion,
	useMotionValueEvent,
	useScroll,
} from "motion/react";
import { useRef } from "react";

const ScrollMeasure = () => {
	const containerRef = useRef(null);
	const targetRef = useRef(null);

	const { scrollYProgress } = useScroll({
		container: containerRef,
		target: targetRef,
		axis: "y",
		offset: ["start end", "end start"],
	});

	useMotionValueEvent(scrollYProgress, "change", (latest) => {console.log("Page scroll: ", latest);});

	return (
		<motion.div
			style={{
                scaleY: scrollYProgress,
                transformOrigin: "top",
				x: "-50%",
				y: "-50%",
			}}
            whileHover={{
                scaleX: 1.25,
            }}
			className="fixed right-5 top-1/2 w-4 h-80 bg-blue-400 rounded-full outline-1"
		></motion.div>
	);
};

export default ScrollMeasure;
