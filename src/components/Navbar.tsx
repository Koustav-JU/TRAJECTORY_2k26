"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";

const Navbar = () => {

  const navigation = useRouter();
  const pathname = usePathname();

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
       transition: { duration: 0.3, ease: "easeOut" as const }
    },
  };

  const isActive = (path: string) => pathname === path;

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] md:w-[85%] max-w-6xl px-6 md:px-10 py-1 md:py-1.5 bg-[var(--color-vanta)]/40 backdrop-blur-md rounded-full border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Trajectory Logo"
            width={120}
            height={120}
            className="w-12 h-12 md:w-18 md:h-18 object-contain"
          />
        </Link>
      </div>

      <div className="flex items-center gap-2 md:gap-6">
        <motion.div variants={itemVariants} className="relative group">
          <Link
            href={"/about"}
            className={`relative z-10 px-4 py-2 text-sm md:text-lg font-medium transition-colors duration-300 group-hover:text-[var(--color-primary)] ${
              isActive("/about") ? "text-[var(--color-primary)]" : "text-[var(--color-accent)]"
            }`}
          >
            About
            <motion.div
              className={`absolute inset-0 bg-white/5 rounded-full -z-10 transition-opacity duration-300 ${
                isActive("/about") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
              layoutId="nav-hover"
            />
          </Link>
        </motion.div>
        <motion.div variants={itemVariants} className="relative group">
          <Link
            href={"/events"}
            className={`relative z-10 px-4 py-2 text-sm md:text-lg font-medium transition-colors duration-300 group-hover:text-[var(--color-primary)] ${
              isActive("/events") ? "text-[var(--color-primary)]" : "text-[var(--color-accent)]"
            }`}
          >
            Events
            <motion.div
              className={`absolute inset-0 bg-white/5 rounded-full -z-10 transition-opacity duration-300 ${
                isActive("/events") ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
              layoutId="nav-hover"
            />
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
