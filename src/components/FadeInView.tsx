import { motion } from "framer-motion";
import { ReactNode } from "react";

const FadeInView = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.3, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeInView;
