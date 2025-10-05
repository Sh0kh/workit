"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../Images/Logo.png";

export default function FloatingHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-4 left-[%] -translate-x-1/2 z-50 w-full flex justify-center bg-transparent"
        >
            <motion.div
                animate={{
                    width: scrolled ? "90%" : "95%",
                    maxWidth: scrolled ? 580 : 1020, // Ограничение ширины
                    height: scrolled ? 55 : 70,
                    borderRadius: scrolled ? "9999px" : "1.5rem",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                }}
                className="px-6 sm:px-8 py-3
                   bg-black/70 backdrop-blur-lg border border-red-800/40
                   shadow-lg shadow-red-900/40
                   flex items-center justify-between rounded-full"
            >
                {/* Лого */}
                <motion.div
                    animate={{ scale: scrolled ? 0.9 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-white font-bold text-lg sm:text-xl"
                >
                    <img className="w-[45px] h-full" src={Logo} alt="Logo" />
                </motion.div>

                {/* Навигация */}
                <nav className="hidden sm:flex gap-4 sm:gap-6 text-white font-medium text-sm sm:text-base">
                    {[
                        { name: "Biz haqimizda", href: "#about" },
                        { name: "Bizning loyihalar", href: "#projects" },
                        { name: "Texnologiya", href: "#technology" },
                        { name: "Contact", href: "#contact" },
                    ].map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            whileHover={{
                                scale: 1.15,
                                color: "#fca5a5",
                                textShadow: "0px 0px 8px rgba(255,0,0,0.7)",
                            }}
                            transition={{ type: "spring", stiffness: 250 }}
                        >
                            {item.name}
                        </motion.a>
                    ))}
                </nav>

                {/* Мобильное меню (иконка гамбургера) */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="sm:hidden text-white text-xl"
                >
                    ☰
                </motion.button>
            </motion.div>
        </motion.header>
    );
}
