"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const projectsRef = useRef(null);
    const galleryRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            category: "Web Development",
            description: "Modern online shopping platform with advanced features and secure payment integration",
            image: "/api/placeholder/600/400",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            id: 2,
            title: "Business Dashboard",
            category: "Web Application",
            description: "Real-time analytics and business intelligence dashboard with interactive charts",
            image: "/api/placeholder/600/400",
            technologies: ["Vue.js", "Python", "PostgreSQL"],
            link: "#"
        },
        {
            id: 3,
            title: "Mobile Banking App",
            category: "Mobile Development",
            description: "Secure and user-friendly banking application with biometric authentication",
            image: "/api/placeholder/600/400",
            technologies: ["React Native", "Firebase", "TypeScript"],
            link: "#"
        },
        {
            id: 4,
            title: "Portfolio Website",
            category: "Web Design",
            description: "Creative portfolio for design agency with smooth animations",
            image: "/api/placeholder/600/400",
            technologies: ["Next.js", "Tailwind", "Framer Motion"],
            link: "#"
        },
        {
            id: 5,
            title: "Food Delivery Service",
            category: "Web Application",
            description: "Food ordering and delivery platform with real-time tracking",
            image: "/api/placeholder/600/400",
            technologies: ["Angular", "Express", "MySQL"],
            link: "#"
        },
        {
            id: 6,
            title: "Fitness Tracking App",
            category: "Mobile Development",
            description: "Comprehensive fitness and health monitoring with AI recommendations",
            image: "/api/placeholder/600/400",
            technologies: ["Flutter", "Dart", "SQLite"],
            link: "#"
        }
    ];

    useEffect(() => {
        // Section title animation
        gsap.fromTo(".section-title",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".section-title",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Project cards animation
        const projectCards = gsap.utils.toArray(".project-card");

        projectCards.forEach((card, index) => {
            gsap.fromTo(card,
                {
                    y: 100,
                    opacity: 0,
                    scale: 0.8,
                    rotationY: 15
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    duration: 1,
                    delay: index * 0.1,
                    ease: "back.out(1.2)",
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
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Background elements animation
        gsap.fromTo(".bg-particle",
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 0.1,
                duration: 1.5,
                stagger: 0.2,
                ease: "elastic.out(1, 0.5)",
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <section ref={projectsRef} className="relative py-20 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
            {/* Animated Background Particles */}
            <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-particle absolute rounded-full bg-[#DD3737]"
                        style={{
                            width: Math.random() * 100 + 50 + 'px',
                            height: Math.random() * 100 + 50 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            filter: 'blur(40px)'
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title text-4xl md:text-6xl font-black text-white mb-4">
                        Bizning <span className="text-[#DD3737]">Loyihalar</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Biz yaratgan innovatsion yechimlar va muvaffaqiyatli loyihalar
                    </p>
                    <div className="w-24 h-1 bg-[#DD3737] mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Projects Gallery */}
                <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-[#DD3737]/30 transition-all duration-500"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

                                {/* Technologies Badges */}
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-[#DD3737] text-white text-xs rounded-full font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                                            style={{ transitionDelay: `${index * 100}ms` }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Category */}
                                <span className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-[#DD3737] text-sm rounded-full font-semibold backdrop-blur-sm">
                                    {project.category}
                                </span>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#DD3737] transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <button className="px-4 py-2 bg-[#DD3737] text-white rounded-full text-sm font-semibold hover:bg-[#c52a2a] transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                        Ko'rish
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>

                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <button className="p-2 bg-gray-700/50 rounded-full hover:bg-[#DD3737] transition-all duration-300">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2V9h2v8z" />
                                            </svg>
                                        </button>
                                        <button className="p-2 bg-gray-700/50 rounded-full hover:bg-[#DD3737] transition-all duration-300">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#DD3737]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}