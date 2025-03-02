"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { RxHome } from "react-icons/rx";

export function Nav() {
  return (
    <ul>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="hidden md:flex gap-3 left-[35%] absolute top-10"
      >
        <Link href="/" className="nav-item">
          <RxHome size={20} />
          <span>Home</span>
        </Link>

        <Link href="/login" className="nav-item">
          Login{" "}
        </Link>

        <Link href="/product" className="nav-item">
          Product{" "}
        </Link>
      </motion.div>
    </ul>
  );
}
