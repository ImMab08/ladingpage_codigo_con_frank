import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageSpaceship = () => {
  return (
    <div>
      <motion.div
        className="hidden md:flex"
        animate={{ y: [15, 0, -15, 0, 15], x: [0, 15, 0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      >
        <Image
          className="-bottom-80 md:bottom-0 relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl"
          src="/img/image_spaceship.png"
          alt="Juego de naves espaciales"
          width={500}
          height={500}
        />
      </motion.div>

      <motion.div
        className="md:hidden"
        animate={{ y: [10, 0, -10, 0, 10], x: [0, 10, 0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      >
        <Image
          className="-bottom-80 left-10 md:bottom-0 relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl"
          src="/img/image_spaceship.png"
          alt="Juego de naves espaciales"
          width={300}
          height={300}
        />
      </motion.div>
    </div>
  );
};

export { ImageSpaceship };
