"use client";
import AboutUs from "./AboutUs";
import Header from "./Header";
import Hero from "./Hero";
import { motion } from "framer-motion";
import Projects from "./Projects";
import Technologies from "./Texnologiya";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
    return (
        <motion.div
            className="min-h-screen w-full"
            animate={{
                background: [
                    "radial-gradient(circle at 20% 20%, #330000, #000000)",
                    "radial-gradient(circle at 80% 30%, #1a0000, #000000)",
                    "radial-gradient(circle at 50% 80%, #4d0000, #000000)",
                    "radial-gradient(circle at 20% 20%, #330000, #000000)",
                ],
            }}
            transition={{
                duration: 20,
                ease: "easeInOut",
                repeat: Infinity,
            }}
        >
            <Header />
            <main className="">
                <Hero />
                <AboutUs />
                <Projects />
                <Technologies />
                <Contact />
                <Footer />
            </main>
        </motion.div>
    );
}
