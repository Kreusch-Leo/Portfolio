// import { motion } from "motion/react";

// type TypeLineProps = {
//   text: string;
//   size: 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'; // Better type safety than just 'string'
// };

// const TypeLine = ({ text, size }: TypeLineProps) => {
//   // Mapping sizes ensures Tailwind sees the full string and generates the CSS
//   const sizeClasses = {
//     'xl': 'text-xl',
//     '2xl': 'text-2xl',
//     '3xl': 'text-3xl',
//     '4xl': 'text-4xl',
//     '5xl': 'text-5xl',
//     '6xl': 'text-6xl',
//   };

//   return (
//     <div className="flex justify-center"> {/* Container helps control width behavior */}
//       <motion.h1
//         className={`text-gray-50 font-serif underline decoration-1 overflow-hidden whitespace-nowrap ${sizeClasses[size]}`}
//         initial={{ width: 0 }}
//         animate={{ width: "100%" }}
//         transition={{
//           duration: 2,
//           ease: "easeInOut",
//         }}
//       >
//         {text}
//       </motion.h1>
//     </div>
//   );
// };

// const Logo = () => {
// 	return (
// 		<motion.svg className=""
// 			width="500"
// 			height="500"
// 			viewBox="0 0 500 500"
// 			fill="none"
// 			overflow="visible"
// 			xmlns="http://www.w3.org/2000/svg"
// 		>
// 			<g clip-path="url(#clip0_7_56)">
// 				<motion.path
// 					d="M189.831 3.04523C-61.3505 189.745 9.09747 407.903 9.09747 407.903L189.831 3.04523Z"
// 					fill="black"
// 					whileHover={{
// 						scale: 1.15,
// 						translateY: -20,
// 						translateX: -20,
// 					}}
// 				/>
// 				<motion.path
// 					d="M57.6985 303.465L9.68799 409.872L413.132 309.379L57.6985 303.465Z"
// 					fill="#000080"
// 					whileHover={{
// 						scale: 1.15,
// 						translateY: 50,
// 						translateX: 20,
// 					}}
// 				/>
// 				<motion.path
// 					d="M231.973 304.985L58.5299 301.891L124.637 153.254C160.996 71.5034 191.168 3.73306 191.686 2.65302L192.628 0.689331L300.75 152.807C360.217 236.471 409.429 305.663 410.111 306.567L411.35 308.21L408.383 308.145C406.751 308.109 327.366 306.687 231.973 304.985Z"
// 					fill="#666666"
// 					whileHover={{
// 						scale: 1.15,
// 						translateY: -50,
// 						translateX: 50,
// 					}}
// 				/>
// 			</g>
// 		</motion.svg>
// 	);
// };

// const Page = () => {
//     return (
//         <div className="grid grid-cols-5 grid-rows-3 gap-0 w-screen mx-5 h-80">
//             <div className="col-span-2 row-span-3 bg-stone-900/25
//             flex items-center justify-center flex-col gap-8 p-16">
//                 <TypeLine text="Leonardo Kreusch" size={"6xl"} />
//                 <TypeLine text="Software Engineer" size={"4xl"} />
//             </div>
//             <div className="col-span-3 row-span-3 col-start-3 ">
                
//             </div>
//         </div>
    
    
    
//     );
// }

// export default Page;