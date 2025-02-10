"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 relative z-10 w-[90%] mx-auto">
      {/* Logo */}
      <Link href="/" className="text-3xl font-bold ">
        thesanchitadevi
      </Link>

      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="text-2xl p-2 hover:bg-gray-100 rounded-lg ml-4 md:hidden"
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-20">
          <div className="p-4">
            <div className="clear-both mt-4 space-y-4">
              {menuItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${
                    pathname === href
                      ? "text-teal-600 font-bold"
                      : "text-gray-700 hover:text-6eal-700"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Menu with Sequential Animation */}
      <div className="hidden md:flex items-center -ml-auto">
        <div className="flex space-x-0 overflow-hidden">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-orange-500 text-xl px-3 transition-all duration-300 transform ${
                isMenuOpen
                  ? `opacity-100 translate-x-0 delay-[${index * 75}ms]`
                  : "opacity-0 translate-x-full delay-0"
              } ${
                pathname === item.href
                  ? "text-orange-600 font-bold"
                  : "text-gray-800 hover:text-6eal-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        {/* Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="text-4xl p-2 hover:bg-gray-100 rounded-lg ml-4 hidden md:block"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
