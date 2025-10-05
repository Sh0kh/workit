"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Footer() {
    const footerRef = useRef(null);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        // Footer entrance animation
        gsap.fromTo(footerRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                    end: "bottom 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Floating animation for elements
        const floatingElements = gsap.utils.toArray(".floating-element");
        floatingElements.forEach((element, index) => {
            gsap.to(element, {
                y: -10,
                duration: 2 + index * 0.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.3
            });
        });

        // Social icons animation on hover
        const socialIcons = gsap.utils.toArray(".social-icon");
        socialIcons.forEach(icon => {
            icon.addEventListener("mouseenter", () => {
                gsap.to(icon, {
                    scale: 1.2,
                    rotation: 360,
                    duration: 0.6,
                    ease: "back.out(1.7)"
                });
            });

            icon.addEventListener("mouseleave", () => {
                gsap.to(icon, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });
        });
    }, []);

    return (
        <footer ref={footerRef} className="relative bg-gradient-to-br from-gray-900 to-black border-t border-gray-800/50 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="floating-element absolute opacity-10"
                        style={{
                            width: Math.random() * 80 + 40 + 'px',
                            height: Math.random() * 80 + 40 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            background: `radial-gradient(circle, #DD3737, transparent)`,
                            filter: 'blur(20px)'
                        }}
                    />
                ))}
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-4">
                            <h3 className="text-3xl font-black text-white">
                                Work<span className="text-[#DD3737]">IT!</span>
                            </h3>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
                            Biz sizning texnologik g'oyalaringizni hayotga tatbiq etamiz.
                            Zamonaviy yechimlar va innovatsion yondashuvlar bilan.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <a
                                href="https://t.me/Davlatbek0010"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-[#DD3737] transition-all duration-300 border border-gray-700/50 hover:border-[#DD3737]"
                                title="Telegram"
                            >
                                <svg className="w-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"></path></svg>                            </a>
                            <a
                                href="tel:+998915050066"
                                className="social-icon w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-[#DD3737] transition-all duration-300 border border-gray-700/50 hover:border-[#DD3737]"
                                title="Telefon"
                            >
                                <svg className="w-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>
                            </a>
                            <div className="social-icon w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-[#DD3737] transition-all duration-300 border border-gray-700/50 hover:border-[#DD3737] cursor-pointer"
                                title="Email"
                            >
                                <span className="text-lg">✉️</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold text-lg mb-4">Tez Havolalar</h4>
                        <ul className="space-y-3">
                            {['Bosh Sahifa', 'Loyihalar', 'Texnologiyalar', 'Biz Haqimizda'].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-[#DD3737] transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-2 h-2 bg-[#DD3737] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold text-lg mb-4">Kontaktlar</h4>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <span className="text-[#DD3737] mr-3 mt-1">📱</span>
                                <a
                                    href="tel:+998915050066"
                                    className="text-gray-400 hover:text-[#DD3737] transition-colors duration-300"
                                >
                                    +998 91 505 00 66
                                </a>
                            </div>
                            <div className="flex items-start">
                                <span className="text-[#DD3737] mr-3 mt-1">✈️</span>
                                <a
                                    href="https://t.me/Davlatbek0010"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#DD3737] transition-colors duration-300"
                                >
                                    @Davlatbek0010
                                </a>
                            </div>
                            <div className="flex items-start">
                                <span className="text-[#DD3737] mr-3 mt-1">🕒</span>
                                <span className="text-gray-400">
                                    Duyshanba - Juma<br />
                                    9:00 - 18:00
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Tags */}
                <div className="border-t border-gray-800/50 pt-8 mb-8">
                    <h4 className="text-white font-bold text-lg mb-4 text-center">Bizning Xizmatlar</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'Veb Saytlar', 'Web Ilovalar', 'Mobile Ilovalar',
                            'E-commerce', 'Landing Page', 'Biznes Saytlar',
                            'UI/UX Dizayn', 'Texnik Yordam'
                        ].map((service, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-gray-800/30 backdrop-blur-sm text-gray-300 rounded-full text-sm border border-gray-700/50 hover:border-[#DD3737] hover:text-[#DD3737] transition-all duration-300 cursor-pointer"
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800/50 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm">
                            © {currentYear} WorkIT!. Barcha huquqlar himoyalangan.
                        </div>

                        {/* Additional Links */}
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-[#DD3737] transition-colors duration-300">
                                Maxfiylik Kelishuvi
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#DD3737] transition-colors duration-300">
                                Foydalanish Shartlari
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#DD3737] rounded-full blur-3xl opacity-5"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#DD3737] rounded-full blur-3xl opacity-5"></div>
        </footer>
    );
}