import React from "react";
import { motion } from "motion/react";
import { useState } from "react";

export default function StackLogo({ stack, index }) {
  const [hasError, setHasError] = useState(false);
  const drift = index % 2 === 0 ? 4 + index : -4 - index;
  const lift = 8 + (index % 4) * 3;
  const turn = index % 2 === 0 ? 2.4 + index * 0.25 : -2.4 - index * 0.25;

  return (
    <motion.div
      className="stack-logo"
      style={{ left: stack.x, top: stack.y, "--stack-size": stack.size ?? 1 }}
      initial={{ opacity: 0, scale: 0.55, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.7 }}
      animate={{
        x: [0, drift, -drift * 0.45, 0],
        y: [0, -lift, 3, 0],
        rotate: [0, turn, -turn * 0.45, 0]
      }}
      transition={{
        opacity: { duration: 0.45, delay: stack.delay },
        scale: { duration: 0.45, delay: stack.delay },
        x: {
          duration: 4.4 + index * 0.37,
          repeat: Infinity,
          ease: "easeInOut",
          delay: stack.delay
        },
        y: {
          duration: 3.8 + index * 0.31,
          repeat: Infinity,
          ease: "easeInOut",
          delay: stack.delay
        },
        rotate: {
          duration: 4.1 + index * 0.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: stack.delay
        }
      }}
      whileHover={{ scale: 1.16, zIndex: 30 }}
      aria-label={stack.name}
      title={stack.name}
    >
      {!hasError ? (
        <img
          src={stack.image}
          alt={stack.name}
          onError={() => setHasError(true)}
          draggable="false"
        />
      ) : (
        <span className="stack-fallback">{stack.fallback}</span>
      )}
    </motion.div>
  );
}
