"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef(null);
    const phoneRef = useRef(null);
    const telegramRef = useRef(null);
    const [copied, setCopied] = useState("");

    const contactInfo = [
        {
            type: "phone",
            label: "Telefon Raqam",
            value: "+998 91 505 00 66",
            icon: (<svg className="w-[50px] text-[white]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>),
            link: "tel:+998915050066",
            copyText: "+998915050066"
        },
        {
            type: "telegram",
            label: "Telegram",
            value: "@Davlatbek0010",
            icon: (<svg className="text-[white] w-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"></path></svg>),
            link: "https://t.me/Davlatbek0010",
            copyText: "@Davlatbek0010"
        }
    ];

    const copyToClipboard = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(type);
            setTimeout(() => setCopied(""), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    useEffect(() => {
        // Section title animation
        gsap.fromTo(".contact-title",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".contact-title",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Contact cards animation
        const contactCards = gsap.utils.toArray(".contact-card");

        contactCards.forEach((card, index) => {
            gsap.fromTo(card,
                {
                    x: index % 2 === 0 ? -100 : 100,
                    opacity: 0,
                    scale: 0.8,
                    rotationY: index % 2 === 0 ? -15 : 15
                },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    duration: 1.2,
                    delay: index * 0.3,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Hover animations
            card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                    y: -10,
                    scale: 1.02,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });
        });

        // Floating elements animation
        const floatingElements = gsap.utils.toArray(".floating-element");
        floatingElements.forEach((element, index) => {
            gsap.to(element, {
                y: -30,
                rotation: 360,
                duration: 3 + index,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.5
            });
        });

        // Pulse animation for CTA
        gsap.to(".cta-pulse", {
            scale: 1.1,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, []);

    return (
        <section ref={sectionRef} className="relative py-20 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="floating-element absolute opacity-20"
                        style={{
                            width: Math.random() * 100 + 50 + 'px',
                            height: Math.random() * 100 + 50 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            background: `radial-gradient(circle, #DD3737, transparent)`,
                            filter: 'blur(25px)'
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="contact-title text-4xl md:text-6xl font-black text-white mb-4">
                        Bog'laning
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Loyihangiz haqida suhbatlashish uchun quyidagi kontaktlar orqali bog'lanishingiz mumkin
                    </p>
                    <div className="w-24 h-1 bg-[#DD3737] mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Contact Cards */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {contactInfo.map((contact, index) => (
                        <div
                            key={contact.type}
                            className="contact-card group relative bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30 hover:border-[#DD3737]/50 transition-all duration-500 overflow-hidden"
                        >
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#DD3737]/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                            {/* Icon */}
                            <div className="relative flex items-center justify-center z-10 text-6xl mb-6 text-center transition-transform duration-500 group-hover:scale-110">
                                {contact.icon}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 text-center">
                                <h3 className="text-lg text-gray-400 mb-2 font-semibold">
                                    {contact.label}
                                </h3>

                                <div className="flex flex-col items-center gap-4">
                                    <a
                                        href={contact.link}
                                        target={contact.type === 'telegram' ? "_blank" : "_self"}
                                        rel={contact.type === 'telegram' ? "noopener noreferrer" : ""}
                                        className="text-2xl md:text-3xl font-bold text-white hover:text-[#DD3737] transition-colors duration-300 break-all"
                                    >
                                        {contact.value}
                                    </a>

                                    {/* Copy Button */}
                                    <button
                                        onClick={() => copyToClipboard(contact.copyText, contact.type)}
                                        className="px-6 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm font-semibold hover:bg-[#DD3737] hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-gray-600/50 hover:border-[#DD3737]"
                                    >
                                        {copied === contact.type ? (
                                            <>
                                                <span>✅</span>
                                                Nusxalandi!
                                            </>
                                        ) : (
                                            <>
                                                <span>📋</span>
                                                Nusxalash
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DD3737]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20 max-w-2xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Loyihangizni Boshlaymizmi?
                        </h3>
                        <p className="text-gray-300 mb-6 text-lg">
                            Biz bilan bog'laning va sizning g'oyalaringizni real loyihaga aylantiramiz
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="tel:+998915050066"
                                className="cta-pulse px-8 py-4 bg-[#DD3737] text-white rounded-full font-bold text-lg hover:bg-[#c52a2a] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#DD3737]/30 flex items-center gap-3"
                            >
                                <svg className="w-[25px] text-[white]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>
                                Hozir Qo'ng'iroq Qiling
                            </a>

                            <a
                                href="https://t.me/Davlatbek0010"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-transparent border-2 border-[#DD3737] text-[#DD3737] rounded-full font-bold text-lg hover:bg-[#DD3737] hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                            >
                                <svg className="text-[white] w-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"></path></svg>                                Telegramda Yozing
                            </a>
                        </div>

                        {/* Working Hours */}
                        <div className="mt-6 p-4 bg-black/20 rounded-xl border border-gray-700/30">
                            <p className="text-gray-400 text-sm">
                                ⏰ Ish vaqtlari: Duyshanba - Juma, 9:00 - 18:00
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                💬 Telegram orqali 24 soat javob beramiz
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#DD3737] rounded-full blur-3xl opacity-10"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#DD3737] rounded-full blur-3xl opacity-10"></div>
            </div>
        </section>
    );
}