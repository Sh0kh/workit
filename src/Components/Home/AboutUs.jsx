"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "../../../src/Images/bgAboutus.jpeg";

export default function AboutUs() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <section className="relative flex items-center justify-center min-h-screen py-[50px]">
            {/* Статичный фон */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Темный оверлей с красным оттенком */}
                <div className="absolute inset-0 bg-black/85"></div>
                <div className="absolute inset-0 bg-[#DD3737]/10"></div>
            </div>

            {/* Контент */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <div
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    className="mb-12"
                >
                    <h2 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl mb-6">
                        WorkIT!
                    </h2>
                    <div className="h-1 w-32 mx-auto bg-[#DD3737] rounded-full mb-2"></div>
                    <div className="h-1 w-20 mx-auto bg-[#DD3737] rounded-full opacity-70"></div>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-[#DD3737]/20 shadow-2xl"
                >
                    <p className="text-xl md:text-2xl text-white leading-relaxed font-light mb-6">
                        Biz har qanday murakkablikdagi{" "}
                        <span className="text-[#DD3737] font-semibold">
                            veb-saytlar
                        </span>{" "}
                        va{" "}
                        <span className="text-[#DD3737] font-semibold">
                            web-ilovalarni
                        </span>{" "}
                        yaratamiz
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="text-[#DD3737] font-medium">✓ Biznes Saytlar</div>
                        <div className="text-[#DD3737] font-medium">✓ E-commerce</div>
                        <div className="text-[#DD3737] font-medium">✓ Landing Page</div>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="text-lg text-gray-300 italic border-t border-[#DD3737]/30 pt-6"
                    >
                        Sizning texnologik g'oyalaringizni hayotga tatbiq etamiz!
                    </div>
                </div>

                {/* Кнопка призыва к действию */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="700"
                    className="mt-12"
                >
                    <button className="group relative px-10 py-4 bg-[#DD3737] rounded-full text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:bg-[#c52a2a] hover:scale-105 hover:shadow-xl">
                        <span className="relative z-10">Loyihangizni Boshlang</span>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    </button>
                </div>

                {/* Дополнительная информация */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="900"
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-white"
                >
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#DD3737]/10 hover:border-[#DD3737]/30 transition-all duration-300">
                        <div className="text-2xl mb-3 flex items-center justify-center"><svg className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M194.82 496a18.36 18.36 0 0 1-18.1-21.53v-.11L204.83 320H96a16 16 0 0 1-12.44-26.06L302.73 23a18.45 18.45 0 0 1 32.8 13.71c0 .3-.08.59-.13.89L307.19 192H416a16 16 0 0 1 12.44 26.06L209.24 489a18.45 18.45 0 0 1-14.42 7"></path></svg></div>
                        <h3 className="text-lg font-semibold mb-2 text-[#DD3737]">Tez Natijalar</h3>
                        <p className="text-gray-300 text-sm">Qisqa muddatlarda yuqori sifatli mahsulotlar</p>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#DD3737]/10 hover:border-[#DD3737]/30 transition-all duration-300">
                        <div className="text-2xl mb-3 flex items-center justify-center">
                            <svg className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142s-10.237 3.905-14.142 0s-3.905-10.237 0-14.142m12.02 2.121a7 7 0 0 0-9.899 0a1 1 0 0 0 1.414 1.414a5 5 0 0 1 7.072 0A1 1 0 0 0 16.95 7.05z"></path></svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-[#DD3737]">Yuqori Sifat</h3>
                        <p className="text-gray-300 text-sm">Zamonaviy texnologiyalar va eng yaxshi amaliyotlar</p>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#DD3737]/10 hover:border-[#DD3737]/30 transition-all duration-300">
                        <div className="text-2xl mb-3 flex items-center justify-center">
                            <svg className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M7 0c.345 0 .625.28.625.625v1.288a5.13 5.13 0 0 1 4.462 4.462h1.288a.625.625 0 1 1 0 1.25h-1.288a5.13 5.13 0 0 1-4.462 4.462v1.288a.625.625 0 1 1-1.25 0v-1.288a5.13 5.13 0 0 1-4.462-4.462H.625a.625.625 0 1 1 0-1.25h1.288a5.13 5.13 0 0 1 4.462-4.462V.625C6.375.28 6.655 0 7 0M3.125 7a3.875 3.875 0 1 0 7.75 0a3.875 3.875 0 0 0-7.75 0M5.75 7a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" clipRule="evenodd"></path></svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-[#DD3737]">Aniq Yondashuv</h3>
                        <p className="text-gray-300 text-sm">Har bir loyiha uchun individual yechimlar</p>
                    </div>
                </div>
            </div>
        </section>
    );
}