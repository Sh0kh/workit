"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const containerRef = useRef(null);
    const bgRef = useRef(null);
    const particlesRef = useRef(null);

    useEffect(() => {
        const letters = titleRef.current.querySelectorAll("span span");

        // Background gradient animation
        gsap.fromTo(
            bgRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 2,
                ease: "power2.out",
            }
        );

        // Particles animation
        gsap.fromTo(
            particlesRef.current.children,
            {
                y: -20,
                opacity: 0,
                scale: 0.8
            },
            {
                y: 0,
                opacity: 0.6,
                scale: 1,
                stagger: 0.1,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.3
            }
        );

        // Harflarni poylab chiqish animatsiyasi
        gsap.fromTo(
            letters,
            {
                y: 100,
                opacity: 0,
                rotationX: 90
            },
            {
                y: 0,
                opacity: 1,
                rotationX: 0,
                stagger: 0.03,
                ease: "back.out(1.7)",
                duration: 1.5,
            }
        );

        // Subtitle animatsiyasi
        gsap.fromTo(
            subtitleRef.current,
            {
                y: 50,
                opacity: 0,
                scale: 0.8
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "elastic.out(1, 0.5)",
                delay: 1,
            }
        );

        // CTA button animation
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            gsap.fromTo(
                ctaButton,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    delay: 1.5,
                }
            );
        }

        // Parallax + fade scroll bo'yicha
        gsap.to(containerRef.current, {
            y: -150,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        // Background parallax
        gsap.to(bgRef.current, {
            y: 100,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);

    const splitText = (text) =>
        text.split(" ").map((word, i) => (
            <span
                key={i}
                className="inline-block mr-2 sm:mr-4 md:mr-6 lg:mr-8 mb-2"
            >
                {word.split("").map((char, j) => (
                    <span
                        key={j}
                        className="inline-block transform-style-preserve-3d"
                    >
                        {char}
                    </span>
                ))}
            </span>
        ));

    return (
        <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient(45deg, #000000, #1a1a1a)">
            {/* Animated Background */}
            <div
                ref={bgRef}
                className="absolute inset-0 opacity-0"
                style={{
                    background: "linear-gradient(135deg, #000000 0%, #1a1a1a 30%, #2a0a0a 70%, #000000 100%)",
                }}
            >
                {/* Animated particles */}
                <div ref={particlesRef} className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-[#DD3737] opacity-0"
                            style={{
                                width: Math.random() * 6 + 2 + 'px',
                                height: Math.random() * 6 + 2 + 'px',
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                                animationDelay: Math.random() * 5 + 's'
                            }}
                        />
                    ))}
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
            </div>

            {/* Main content */}
            <div ref={containerRef} className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                <h1
                    ref={titleRef}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-8 leading-tight"
                >
                    {splitText("Xush kelibsiz IT dunyosiga")}
                </h1>

                <p
                    ref={subtitleRef}
                    className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    Bu yerda sizning{" "}
                    <span className="text-[#DD3737] font-semibold">texnologik g'oyalaringiz</span>{" "}
                    jonlanadi va{" "}
                    <span className="text-[#DD3737] font-semibold">haqiqiy loyihalarga</span> aylanadi
                </p>

                {/* CTA Button */}
                <button className="cta-button px-12 py-4 bg-[#DD3737] text-white text-lg font-bold rounded-full transform transition-all duration-300 hover:scale-105 hover:bg-[#c52a2a] hover:shadow-2xl hover:shadow-[#DD3737]/30 border-2 border-[#DD3737]/30">
                    Loyihani Boshlash
                </button>

            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                .transform-style-preserve-3d {
                    transform-style: preserve-3d;
                }
            `}</style>
        </section>
    );
}