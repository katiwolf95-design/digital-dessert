import { motion } from "framer-motion";

export default function DessertHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-[700px] pt-[140px] px-10 text-center"
    >
        <h1 className="text-5xl md:text-6xl text-white font-bold md:leading-[1.3] leading-tight">
          Schön, dass Du <br />
          noch Platz für ein <br />
          <span className="italic font-serif">Dessert</span> hast
        </h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 md:text-lg text-sm text-white/80 "
      >
        Bevor wir uns vielleicht bei einem echten Eis treffen, serviere<br />
        ich hier die digitalen Zutaten meiner Arbeit.
      </motion.p>

    </motion.div>
  );
}

