import { motion } from "framer-motion";
import Card from "./Card";

const cards = [
  {
    title: "Pistacchio Code",
    text: "React-Komponenten, sauber portioniert und mit Hooks verfeinert.",
  },
  {
    title: "Crema Design",
    text: "Pixelgenaue Interfaces mit Liebe zum Detail und System-Denken.",
  },
  {
    title: "Lampone Team Spirit",
    text: "Frische Impulse und reibungslose Git-Collaboration.",
  },
];

export default function FlavorBlock() {
  return (
    <div className="w-full max-w-[900px] px-6 mt-[180px] text-center">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl md:text-2xl leading-snug mb-12 text-white font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
      >
        Die Geschmacksrichtungen meiner Arbeit
      </motion.h2>

      <div className="
        flex flex-col sm:flex-row sm:flex-wrap 
        justify-center items-center gap-6">

        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card {...card} />
          </motion.div>
        ))}

      </div>
    </div>
  );
}