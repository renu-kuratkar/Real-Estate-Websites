// "use client";
// import React, { useEffect, useId, useState, useRef } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// import { SparklesCore } from "@/components/ui/sparkles";

// export function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }

// export const Cover = ({ children, className }) => {
//   const [hovered, setHovered] = useState(false);
//   const ref = useRef(null);
//   const [containerWidth, setContainerWidth] = useState(0);
//   const [beamPositions, setBeamPositions] = useState([]);

//   useEffect(() => {
//     if (ref.current) {
//       setContainerWidth(ref.current.clientWidth ?? 0);
//       const height = ref.current.clientHeight ?? 0;
//       const numberOfBeams = Math.floor(height / 10);
//       const positions = Array.from(
//         { length: numberOfBeams },
//         (_, i) => (i + 1) * (height / (numberOfBeams + 1))
//       );
//       setBeamPositions(positions);
//     }
//   }, []);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       ref={ref}
//       className="relative hover:bg-neutral-900 group/cover inline-block dark:bg-neutral-900 bg-neutral-100 px-2 py-2 transition duration-200 rounded-sm"
//     >
//       <AnimatePresence>
//         {hovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ opacity: { duration: 0.2 } }}
//             className="h-full w-full overflow-hidden absolute inset-0"
//           >
//             <motion.div
//               animate={{ translateX: ["-50%", "0%"] }}
//               transition={{
//                 translateX: { duration: 10, ease: "linear", repeat: Infinity },
//               }}
//               className="w-[200%] h-full flex"
//             >
//               <SparklesCore className="w-full h-full" particleColor="#FFFFFF" />
//               <SparklesCore className="w-full h-full" particleColor="#FFFFFF" />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {beamPositions.map((position, index) => (
//         <Beam key={index} hovered={hovered} width={containerWidth} style={{ top: `${position}px` }} />
//       ))}

//       <motion.span
//         key={String(hovered)}
//         animate={{ scale: hovered ? 0.8 : 1 }}
//         transition={{ duration: 0.2 }}
//         className={cn("dark:text-white inline-block text-neutral-900 relative z-20", className)}
//       >
//         {children}
//       </motion.span>

//       <CircleIcon className="absolute -right-[2px] -top-[2px]" />
//       <CircleIcon className="absolute -bottom-[2px] -right-[2px]" delay={0.4} />
//       <CircleIcon className="absolute -left-[2px] -top-[2px]" delay={0.8} />
//       <CircleIcon className="absolute -bottom-[2px] -left-[2px]" delay={1.6} />
//     </div>
//   );
// };

// export const Beam = ({ className, hovered, width = 600, ...svgProps }) => {
//   const id = useId();
//   return (
//     <motion.svg
//       width={width}
//       height="1"
//       viewBox={`0 0 ${width} 1`}
//       fill="none"
//       className={cn("absolute inset-x-0 w-full", className)}
//       {...svgProps}
//     >
//       <motion.path d={`M0 0.5H${width}`} stroke={`url(#svgGradient-${id})`} />
//       <defs>
//         <motion.linearGradient
//           id={`svgGradient-${id}`}
//           gradientUnits="userSpaceOnUse"
//           initial={{ x1: "0%", x2: hovered ? "-10%" : "-5%" }}
//           animate={{ x1: "110%", x2: hovered ? "100%" : "105%" }}
//           transition={{ duration: hovered ? 0.5 : 2, ease: "linear", repeat: Infinity }}
//         >
//           <stop stopColor="#2EB9DF" stopOpacity="0" />
//           <stop stopColor="#3b82f6" />
//           <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
//         </motion.linearGradient>
//       </defs>
//     </motion.svg>
//   );
// };

// export const CircleIcon = ({ className }) => {
//   return (
//     <div className={cn("pointer-events-none animate-pulse group-hover/cover:hidden h-2 w-2 rounded-full bg-neutral-600 dark:bg-white opacity-20", className)}></div>
//   );
// };
