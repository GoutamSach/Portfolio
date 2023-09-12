import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

function Logo() {
  return (
    <div>
      <MotionLink
        className="w-16 h-16 text-light  text-2xl rounded-full bg-dark flex items-center justify-center"
        href="/"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        GS
      </MotionLink>
    </div>
  );
}

export default Logo;
