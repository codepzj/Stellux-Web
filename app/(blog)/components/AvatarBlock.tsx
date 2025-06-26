import { motion } from "framer-motion";
import Image from "next/image";

export default function AvatarBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <Image
        src="https://avatars.githubusercontent.com/u/183695872?v=4"
        alt="avatar"
        width={200}
        height={200}
        className="rounded-full shadow-xl"
      />
    </motion.div>
  );
}
