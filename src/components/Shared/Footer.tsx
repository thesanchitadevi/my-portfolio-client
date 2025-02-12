"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, href: "#" },
    { icon: <Twitter className="w-6 h-6" />, href: "#" },
    { icon: <Instagram className="w-6 h-6" />, href: "#" },
    { icon: <Linkedin className="w-6 h-6" />, href: "#" },
  ];

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-orange-500 dark:bg-black/30 text-white px-4 py-8 h-44"
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Copyright Section */}
        <motion.div whileHover={{ scale: 1.05 }} className="text-center">
          <p className="text-lg">
            © {new Date().getFullYear()}. All rights are reserved
          </p>
        </motion.div>

        {/* Social Icons */}
        <div className="flex space-x-6 justify-center">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-orange-200 transition-colors"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
