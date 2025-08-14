import { useScroll, useTransform, motion } from "framer-motion";

function FloatOnScroll({ children }) {
  const { scrollY } = useScroll();
  // Map scroll position to vertical translation (e.g. elements move up as scrolling)
  const y = useTransform(scrollY, [0, 300], [50, -50]);
  return (
    <motion.div style={{ y}}>
      {children}
    </motion.div>
  );
}

export default FloatOnScroll;