"use client";
import { Link } from "@/components/Link";
import { usePageTitle } from "@/hook/usePageTitle";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  usePageTitle("Devsense");

  return (
    <main className="t-flex t-h-screen t-flex-col t-items-center t-justify-center">
      <AnimatePresence>
        <motion.h2 layout>Welcome to Devsense</motion.h2>
        <motion.div
          layout
          // style={{
          //   transformStyle: "preserve-3d", // Preserve 3D transformations
          //   perspective: "2000px", // Set perspective for the 3D effect
          // }}
          className="t-cursor-pointer t-rounded-full t-h-20 t-w-20"
        >
          <motion.img
            whileHover={{
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
              scale: 1.5,
              translateY: "-10px",
              rotateY: 180,
              boxShadow:
                "rgba(219,95,0, 0.4) 0px 5px, rgba(219,95,0, 0.3) 0px 10px, rgba(219,95,0, 0.2) 0px 15px, rgba(219,95,0, 0.1) 0px 20px, rgba(219,95,0, 0.05) 0px 25px",
            }}
            src="https://ca.slack-edge.com/T01R5TMEAV6-U03DKHKMRTR-c8b49ca176f9-512"
            className="t-rounded-full t-w-full t-f-full"
          />
        </motion.div>

        <h4>by Rao Sandeep</h4>
        <div className="t-flex t-gap-6 t-text-white">
          <Link href="/custom-hook">Custom hooks</Link>
          <Link href="/spot-light">Spot light</Link>
        </div>
      </AnimatePresence>
    </main>
  );
};

export default Home;
