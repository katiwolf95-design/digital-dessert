import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <div className="w-full max-w-[900px] px-6 mt-[260px] mb-[50px]">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center"
      >

        <p className="text-base text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Danke für deine Zeit und deinen Appetit auf neue Projekte.
        </p>

        <div className="flex justify-center items-center gap-4">
          <motion.a
            href="mailto:kawolf6388@gmail.com?subject=Projektanfrage&body=Hallo Katharina,"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-700 hover:bg-green-600 px-6 py-2 rounded-lg text-sm transition inline-block cursor-pointer focus:outline-none"
          >
            Schreib mir eine Mail →
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/katharina-wolf-568255344/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/80 text-black px-3 py-2 rounded-lg text-sm font-semibold"
          >
            In
          </motion.a>
        </div>

      </motion.div>
    </div>
  );
}