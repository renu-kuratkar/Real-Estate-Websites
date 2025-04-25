import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "/Image/img2.jpg",
  "/Image/img3.jpg",
  "/Image/img2.jpg",
  "/Image/img8.png",
  "/Image/3rd-mumbai-ad.jpg",
  "/Image/img3.jpg",
  "/Image/img8.jpg",
];

const AUTO_DELAY = 5000; // Auto-scroll every 5 seconds
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div className="relative w-full overflow-hidden  py-8">
      <motion.div
        className="flex cursor-grab items-center active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
      >
        {imgs.map((imgSrc, idx) => (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
            transition={SPRING_OPTIONS}
            className="w-full min-w-full h-50 rounded-xl  object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};
