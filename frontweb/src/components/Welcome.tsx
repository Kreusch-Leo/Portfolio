import { motion, useAnimation, animationControls } from "motion/react";
import { useEffect } from "react";


type TypeLineProps = {
	text: string;
	controls: ReturnType<typeof animationControls>;
	initialOpacity?: number;
};

const TypeLine = ({ text, controls, initialOpacity = 1 }: TypeLineProps) => (
	<motion.h1
		className="text-6xl text-gray-50 font-serif overflow-hidden whitespace-nowrap"
		initial={{ width: 0, opacity: initialOpacity }}
		animate={controls}
	>
		{text}
	</motion.h1>
);

const Welcome = () => {
	const first = useAnimation();
	const second = useAnimation();
	const container = useAnimation();

	useEffect(() => {
		const run = async () => {
			// First line types in
			await first.start({
				width: "fit-content",
				opacity: 1,
				transition: { duration: 1, ease: "linear" },
			});

			// First line moves up
			await first.start({
				y: -30,
				transition: { duration: 0.3 },
			});

			// Second line types in
			await second.start({
				width: "fit-content",
				opacity: 1,
				transition: { duration: 1, ease: "linear" },
			});

			// Hold both on screen

			await new Promise((r) => setTimeout(r, 1000));

			await container.start({
				scale: 0.8,
				transition: { duration: 0.5 },
			});

			await new Promise((r) => setTimeout(r, 200));

			// Fade everything out
			await container.start({
				opacity: 0,
				y: -20,
				transition: { duration: 1 },
			});
		};

		run();
	}, [first, second, container]);

	return (
		<motion.div
			className="flex flex-col items-center gap-6"
			initial={{ opacity: 1 }}
			animate={container}
		>
			<TypeLine text="Hello, there! I'm Leo" controls={first} />
			<TypeLine
				text="and I just started my career!"
				controls={second}
				initialOpacity={0}
			/>
		</motion.div>
	);
};

export default Welcome;