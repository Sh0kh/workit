"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Technologies() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    const technologies = [
        {
            name: "React",
            icon: (<svg className="w-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g fill="none"><rect width={256} height={256} fill="#242938" rx={60}></rect><path fill="#00d8ff" d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"></path><path stroke="#00d8ff" strokeWidth={8.911} d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z" clipRule="evenodd"></path><path stroke="#00d8ff" strokeWidth={8.911} d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z" clipRule="evenodd"></path><path stroke="#00d8ff" strokeWidth={8.911} d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z" clipRule="evenodd"></path></g></svg>),
            description: "Modern and scalable user interfaces",
            color: "from-cyan-500 to-blue-500",
            experience: "Advanced",
            projects: 50
        },
        {
            name: "Vue.js",
            icon: (<svg className="w-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 221"><path fill="#41b883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z"></path><path fill="#41b883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z"></path><path fill="#35495e" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z"></path></svg>),
            description: "Progressive JavaScript framework",
            color: "from-green-500 to-emerald-500",
            experience: "Advanced",
            projects: 35
        },
        {
            name: "Java",
            icon: (<svg className="w-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g fill="none"><rect width={256} height={256} fill="#242938" rx={60}></rect><path fill="#fff" d="M101.634 182.619s-7.68 4.674 5.345 6.011c15.728 2.004 24.044 1.669 41.407-1.668c0 0 4.674 3.009 11.02 5.344c-39.075 16.696-88.497-1.002-57.772-9.687m-5.009-21.705s-8.35 6.346 4.674 7.679c17.028 1.669 30.391 2.004 53.433-2.667c0 0 3.009 3.341 8.015 5.01c-47.083 14.025-99.85 1.333-66.122-10.019zm92.17 38.07s5.676 4.674-6.346 8.35c-22.376 6.678-93.839 8.685-113.876 0c-7.009-3.009 6.347-7.352 10.686-8.015c4.342-1.002 6.678-1.002 6.678-1.002c-7.68-5.344-51.095 11.02-22.041 15.729c79.813 13.027 145.603-5.676 124.896-15.028zm-83.488-60.781s-36.402 8.685-13.028 11.687c10.019 1.333 29.721 1.002 48.089-.335c15.028-1.334 30.09-4.007 30.09-4.007s-5.345 2.338-9.017 4.674c-37.099 9.693-108.23 5.351-87.858-4.668c17.37-8.35 31.724-7.351 31.724-7.351m65.116 36.401c37.407-19.37 20.037-38.07 8.015-35.731c-3.009.667-4.342 1.334-4.342 1.334s1.001-2.004 3.34-2.667c23.709-8.35 42.413 25.046-7.679 38.07c0 0 .335-.335.666-1.002zm-61.444 52.76c36.067 2.339 91.168-1.334 92.505-18.369c0 0-2.667 6.678-29.72 11.688c-30.722 5.676-68.796 5.009-91.168 1.333c0 0 4.674 4.007 28.386 5.344z"></path><path fill="#f58219" d="M147.685 28s20.704 21.039-19.702 52.76c-32.394 25.712-7.351 40.408 0 57.101c-19.035-17.028-32.722-32.059-23.377-46.085C118.331 71.083 156.062 61.064 147.685 28M137 123.842c9.683 11.02-2.667 21.039-2.667 21.039s24.711-12.686 13.359-28.387c-10.354-15.028-18.368-22.376 25.046-47.425c0 0-68.46 17.028-35.731 54.766z"></path></g></svg>),
            description: "Enterprise-level applications",
            color: "from-red-500 to-orange-500",
            experience: "Expert",
            projects: 45
        },
        {
            name: "Spring Boot",
            icon: (<svg className="w-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g fill="none"><rect width={256} height={256} fill="#242938" rx={60}></rect><path fill="#5fb832" d="M209.545 171.821c-24.615 32.797-77.198 21.726-110.91 23.318c0 0-5.968.332-11.979 1.322c0 0 2.273-.97 5.172-1.969c23.678-8.188 34.867-9.833 49.254-17.223c27.032-13.848 53.936-44.01 59.41-75.344c-10.29 30.136-41.583 56.073-70.077 66.605c-19.504 7.197-54.773 14.201-54.778 14.204c.016.025-1.406-.738-1.426-.755c-23.986-11.67-24.678-63.62 18.886-80.366c19.1-7.347 37.369-3.311 58.017-8.226c22.022-5.236 47.528-21.743 57.895-43.324c11.622 34.472 25.583 88.404.536 121.758m.428-132.44c-2.93 6.962-6.507 13.236-10.629 18.847C181.197 39.604 155.868 28 127.871 28C72.799 28 28 72.804 28 127.866c0 28.865 12.32 54.898 31.964 73.146l2.187 1.937c-3.652-2.978-4.213-8.341-1.253-11.997c2.978-3.657 8.346-4.224 12-1.262c3.664 2.968 4.222 8.345 1.256 12.007c-2.956 3.664-8.334 4.217-11.993 1.261l1.489 1.318c17.375 14.63 39.774 23.467 64.221 23.467c52.64 0 95.865-40.965 99.565-92.67c2.74-25.316-4.737-57.462-17.463-95.692"></path></g></svg>),
            description: "Robust backend solutions",
            color: "from-green-600 to-lime-500",
            experience: "Expert",
            projects: 40
        },
        {
            name: "Node.js",
            icon: (<svg className="w-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="url(#SVGjGElAeWH)" d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"></path><path fill="url(#SVGKiWaKbNE)" d="M116.897 29.76L66.841.825A8 8 0 0 0 65.302.23L9.21 96.798a6.3 6.3 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.7 3.7 0 0 0-1.302-1.072"></path><path fill="url(#SVGUN7mteel)" d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"></path><defs><linearGradient id="SVGjGElAeWH" x1={34.513} x2={27.157} y1={15.535} y2={30.448} gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse"><stop stopColor="#3f873f"></stop><stop offset={0.33} stopColor="#3f8b3d"></stop><stop offset={0.637} stopColor="#3e9638"></stop><stop offset={0.934} stopColor="#3da92e"></stop><stop offset={1} stopColor="#3dae2b"></stop></linearGradient><linearGradient id="SVGKiWaKbNE" x1={30.009} x2={50.533} y1={23.359} y2={8.288} gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse"><stop offset={0.138} stopColor="#3f873f"></stop><stop offset={0.402} stopColor="#52a044"></stop><stop offset={0.713} stopColor="#64b749"></stop><stop offset={0.908} stopColor="#6abf4b"></stop></linearGradient><linearGradient id="SVGUN7mteel" x1={21.917} x2={40.555} y1={22.261} y2={22.261} gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse"><stop offset={0.092} stopColor="#6abf4b"></stop><stop offset={0.287} stopColor="#64b749"></stop><stop offset={0.598} stopColor="#52a044"></stop><stop offset={0.862} stopColor="#3f873f"></stop></linearGradient></defs></svg>),
            description: "Server-side JavaScript runtime",
            color: "from-green-400 to-green-600",
            experience: "Advanced",
            projects: 60
        },
        {
            name: "Next.js",
            icon: (<svg className="w-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle cx={64} cy={64} r={64}></circle><path fill="url(#SVGlFdwveZx)" d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"></path><path fill="url(#SVGbF2jJbfB)" d="M81.778 38.4h8.533v51.2h-8.533z"></path><defs><linearGradient id="SVGlFdwveZx" x1={109} x2={144.5} y1={116.5} y2={160.5} gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset={1} stopColor="#fff" stopOpacity={0}></stop></linearGradient><linearGradient id="SVGbF2jJbfB" x1={121} x2={120.799} y1={54} y2={106.875} gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset={1} stopColor="#fff" stopOpacity={0}></stop></linearGradient></defs></svg>),
            description: "React framework for production",
            color: "from-gray-800 to-black",
            experience: "Advanced",
            projects: 30
        }
    ];

    useEffect(() => {
        // Section title animation
        gsap.fromTo(".tech-title",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".tech-title",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Technology cards animation
        const techCards = gsap.utils.toArray(".tech-card");

        techCards.forEach((card, index) => {
            gsap.fromTo(card,
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.9,
                    rotationX: -15
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotationX: 0,
                    duration: 1,
                    delay: index * 0.15,
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
                    y: -15,
                    scale: 1.05,
                    duration: 0.4,
                    ease: "power2.out"
                });

                // Icon scale animation
                const icon = card.querySelector(".tech-icon");
                gsap.to(icon, {
                    scale: 1.2,
                    rotation: 360,
                    duration: 0.6,
                    ease: "back.out(1.7)"
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out"
                });

                const icon = card.querySelector(".tech-icon");
                gsap.to(icon, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });
        });

        // Floating background elements
        const floatingElements = gsap.utils.toArray(".floating-element");
        floatingElements.forEach((element, index) => {
            gsap.to(element, {
                y: -20,
                duration: 2 + index * 0.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.3
            });
        });

        // Progress bars animation
        gsap.fromTo(".progress-fill",
            { scaleX: 0 },
            {
                scaleX: 1,
                duration: 2,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".tech-stats",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="relative py-20 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="floating-element absolute rounded-lg bg-[#DD3737]/10"
                        style={{
                            width: Math.random() * 80 + 20 + 'px',
                            height: Math.random() * 80 + 20 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            filter: 'blur(20px)',
                            transform: `rotate(${Math.random() * 360}deg)`
                        }}
                    />
                ))}
            </div>

            <div ref={containerRef} className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="tech-title text-4xl md:text-6xl font-black text-white mb-4">
                        Bizning <span className="text-[#DD3737]">Texnologiyalar</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Zamonaviy texnologiyalar va framework'lar yordamida eng murakkab vazifalarni hal qilamiz
                    </p>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#DD3737] to-transparent mx-auto rounded-full"></div>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {technologies.map((tech, index) => (
                        <div
                            key={tech.name}
                            className="tech-card group relative bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/30 hover:border-[#DD3737]/50 transition-all duration-500 overflow-hidden"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />

                            {/* Tech Icon */}
                            <div className="tech-icon flex items-center justify-center relative z-10 text-5xl mb-4 text-center transition-transform duration-500">
                                {tech.icon}
                            </div>

                            {/* Tech Content */}
                            <div className="relative z-10 text-center">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#DD3737] transition-colors duration-300">
                                    {tech.name}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {tech.description}
                                </p>

                                {/* Experience Level */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm text-gray-500">Tajriba:</span>
                                    <span className="text-[#DD3737] font-semibold">{tech.experience}</span>
                                </div>

                                {/* Projects Count */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Loyihalar:</span>
                                    <span className="text-white font-bold">{tech.projects}+</span>
                                </div>

                                {/* Progress Bar */}
                                <div className="mt-4 bg-gray-700 rounded-full h-2 overflow-hidden">
                                    <div
                                        className="progress-fill h-full bg-gradient-to-r from-[#DD3737] to-orange-500 rounded-full transform origin-left"
                                        style={{
                                            width: `${(tech.projects / 60) * 100}%`
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DD3737]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        </div>
                    ))}
                </div>

                {/* Technology Stats */}
                <div className="tech-stats bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                        <div className="group">
                            <div className="text-3xl md:text-4xl font-black text-[#DD3737] mb-2 group-hover:scale-110 transition-transform duration-300">
                                200+
                            </div>
                            <div className="text-gray-400 font-semibold">Bajargan Loyihalar</div>
                        </div>
                        <div className="group">
                            <div className="text-3xl md:text-4xl font-black text-[#DD3737] mb-2 group-hover:scale-110 transition-transform duration-300">
                                15+
                            </div>
                            <div className="text-gray-400 font-semibold">Texnologiyalar</div>
                        </div>
                        <div className="group">
                            <div className="text-3xl md:text-4xl font-black text-[#DD3737] mb-2 group-hover:scale-110 transition-transform duration-300">
                                98%
                            </div>
                            <div className="text-gray-400 font-semibold">Mijozlar Qoniqishi</div>
                        </div>
                        <div className="group">
                            <div className="text-3xl md:text-4xl font-black text-[#DD3737] mb-2 group-hover:scale-110 transition-transform duration-300">
                                5+
                            </div>
                            <div className="text-gray-400 font-semibold">Yillik Tajriba</div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-6 text-lg">
                        Sizning loyihangiz qaysi texnologiyalarga muhtoj?
                    </p>
                    <button className="px-8 py-4 bg-[#DD3737] text-white rounded-full font-bold text-lg hover:bg-[#c52a2a] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#DD3737]/30">
                        Maslahat Olish
                    </button>
                </div>
            </div>
        </section>
    );
}