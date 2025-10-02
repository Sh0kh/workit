import React, { useState, useEffect } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Header() {
    const [openNav, setOpenNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navList = (
        <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            {[
                { label: "Bizning xizmatlarimiz", href: "#services" },
                { label: "Biz haqimizda", href: "#about" },
                { label: "Loyihalarimiz", href: "#projects" },
                { label: "Texnologiyalar", href: "#tech" },
                { label: "FAQ", href: "#faq" },
            ].map((item) => (
                <li key={item.href}>
                    <a
                        href={item.href}
                        className="text-white text-sm font-medium hover:text-red-400 transition"
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <Navbar
            className={`relative overflow-hidden fixed top-0 z-50 w-full transition-all duration-500
        ${scrolled ? "py-2" : "py-6"}
        bg-gradient-to-r from-black via-red-800/60 to-black`}
            shadow={false}
        >
            {/* Animated red floating layer */}
            <motion.div
                className="absolute inset-0 -z-10"
                initial={{ x: "-40%" }}
                animate={{ x: "40%" }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            >
                <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-red-700/20 to-transparent" />
            </motion.div>

            <div className="flex items-center justify-between text-white max-w-7xl mx-auto px-4">
                {/* Logo */}
                <Typography
                    as="a"
                    href="/"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 text-white transition-all duration-500"
                >
                    Kompaniya
                </Typography>

                {/* Desktop nav */}
                <div className="hidden lg:block">{navList}</div>

                {/* Mobile menu button */}
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-white lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>

            {/* Mobile nav */}
            <Collapse open={openNav}>
                <div className="container mx-auto">{navList}</div>
            </Collapse>
        </Navbar>
    );
}
