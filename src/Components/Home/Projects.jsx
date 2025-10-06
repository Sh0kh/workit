import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ava from "../../Images/universitet.png";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectsRef = useRef(null);
  const galleryRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Examify",
      category: "Web Study",
      description:
        "Interaktiv IELTS sinov platformasi: to‘liq vaqtli testlar, darhol natijalar va o‘zlashtirishni kuzatish imkoniyati bilan.",
      image:
        "https://st-07.netlify.app/static/media/FotoPortfolio7.344e44cd1dac74bc53e8.png",
      technologies: ["React", "Go"],
      link: "https://examify.uz/",
    },
    {
      id: 2,
      title: "TICTY",
      category: "Web Application",
      description:
        "O‘zbekistondagi yetakchi oliy ta’lim muassasasi – kimyo muhandisligi, oziq-ovqat texnologiyasi va sanoat innovatsiyalariga ixtisoslashgan. Zamonaviy ta’lim, ilmiy tadqiqot va amaliy ko‘nikmalar orqali raqobatbardosh mutaxassislar tayyorlaydi.",
      image: ava,
      technologies: ["React", "Node.js"],
      link: "https://ticty.uz/",
    },
    {
      id: 3,
      title: "Savol xona",
      category: "Exam Development",
      description:
        "Turli fanlar bo‘yicha bilim darajasini baholovchi interaktiv test platformasi. Mavzuga asoslangan testlar, darhol natijalar, batafsil izohlar va shaxsiy tavsiyalar orqali o‘quvchilarga rivojlanish imkonini beradi.",
      image:
        "https://st-07.netlify.app/static/media/FotoPortfolio8.6efb3d579fb417cfdb39.png",
      technologies: ["React", "Node.js"],
      link: "https://savol-xona.uz/",
    },
    {
      id: 4,
      title: "Darxon",
      category: "Web Restaurant",
      description:
        "Zamonaviy onlayn restoran platformasi – menyuni ko‘rish, buyurtma berish, stol bron qilish, sharhlar o‘qish va shaxsiy taom tavsiyalarini olish imkonini beradi.",
      image:
        "https://st-07.netlify.app/static/media/FotoPortfolio4.648e1069278369580328.png",
      technologies: ["Next.js", "Tailwind", "Framer Motion"],
      link: "https://darxon-res.uz/",
    },
    {
      id: 5,
      title: "NFT",
      category: "NFT",
      description:
        "Animatsion NFT bozor maydoni: foydalanuvchilar noyob raqamli san’at asarlarini ko‘rish, yaratish, sotib olish va sotishlari mumkin. Interaktiv dizayn va blokcheyn texnologiyasi bilan boyitilgan tajriba.",
      image:
        "https://st-07.netlify.app/static/media/FotoPortfolio.c6e02c680370a8e1a423.png",
      technologies: ["React", "Gsap"],
      link: "https://nft-st-prollax.netlify.app/",
    },
    {
      id: 6,
      title: "Oltin Vodiy",
      category: "Development",
      description:
        "Zamonaviy onlayn restoran tizimi – menyuni ko‘zdan kechirish, onlayn buyurtma berish, stol bron qilish, sharhlar o‘qish va taomlar bo‘yicha shaxsiy tavsiyalarni olish imkonini beradi.",
      image:
        "https://st-07.netlify.app/static/media/FotoPortfolio2.a2a80066fb9610872fb2.png",
      technologies: ["React", "Php"],
      link: "https://oltinvodiyrestaurant.netlify.app/",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".section-title",
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
          toggleActions: "play none none reverse",
        },
      }
    );

    const projectCards = gsap.utils.toArray(".project-card");
    projectCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0, scale: 0.8, rotationY: 15 },
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
            toggleActions: "play none none reverse",
          },
        }
      );

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <section
      ref={projectsRef}
      className="relative py-20 bg-gradient-to-br from-black to-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="bg-particle absolute rounded-full bg-[#DD3737]"
            style={{
              width: Math.random() * 100 + 50 + "px",
              height: Math.random() * 100 + 50 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-6xl font-black text-white mb-4">
            Bizning <span className="text-[#DD3737]">Loyihalar</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Biz yaratgan innovatsion yechimlar va muvaffaqiyatli loyihalar
          </p>
          <div className="w-24 h-1 bg-[#DD3737] mx-auto mt-6 rounded-full"></div>
        </div>

        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => window.open(project.link, "_blank")}
              className="project-card cursor-pointer group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-[#DD3737]/30 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 group-hover:scale-110 transition-transform duration-700"
                  src={project.image}
                  alt=""
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
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
                <span className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-[#DD3737] text-sm rounded-full font-semibold backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#DD3737] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.link, "_blank");
                    }}
                    className="px-4 py-2 bg-[#DD3737] text-white rounded-full text-sm font-semibold hover:bg-[#c52a2a] transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    Ko'rish
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#DD3737]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
