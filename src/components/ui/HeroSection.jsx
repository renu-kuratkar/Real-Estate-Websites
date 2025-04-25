import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Lenis from "lenis";

const images = [
  "/Image/img1.jpg",
  "/Image/img2.jpg",
  "/Image/img3.jpg",
  "/Image/img4.jpg",
  "/Image/img5.jpg",
  "/Image/img6.jpg",
];

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    setPositions(
      images.map(() => ({
        top: Math.random() * 60 + "vh",
        left: Math.random() * 80 + "vw",
      }))
    );
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900 text-white">
      <motion.h1
        style={{ opacity }}
        className="absolute text-5xl font-bold z-10"
      >
        Stunning Hero Section
      </motion.h1>
      {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt="Grid Image"
          initial={{ top: positions[i]?.top, left: positions[i]?.left, opacity: 0 }}
          animate={{
            top: "50%",
            left: `${(i % 3) * 20 + 20}%`,
            opacity: 1,
            transform: "translate(-50%, -50%)",
          }}
          transition={{ duration: 1.5, delay: i * 0.2 }}
          className="absolute w-32 h-32 object-cover rounded-xl"
        />
      ))}
    </div>
  );
};

export default HeroSection;
