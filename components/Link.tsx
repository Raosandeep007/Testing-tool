import { motion } from "framer-motion";

export const Link = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement> & any
) => {
  const linkHoverAnimation = {
    scale: 1.2,
    transition: { duration: 0.3 },
  };

  return (
    <motion.a
      whileHover={linkHoverAnimation}
      {...props}
      className="t-text-white hover:t-text-blue-800"
    />
  );
};
