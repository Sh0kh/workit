import LightRays from "./LightRays";
import phote from "../../../src/Images/Logo.png";
import CardNav from "./CardNav";
import { SplitText } from "gsap/all";
import TextPressure from "./TextPressure";

export default function Home() {

    const items = [
        {
            label: "About",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "Company", ariaLabel: "About Company" },
                { label: "Careers", ariaLabel: "About Careers" },
            ],
        },
        {
            label: "Projects",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "Featured", ariaLabel: "Featured Projects" },
                { label: "Case Studies", ariaLabel: "Project Case Studies" },
            ],
        },
        {
            label: "Contact",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Email", ariaLabel: "Email us" },
                { label: "Twitter", ariaLabel: "Twitter" },
                { label: "LinkedIn", ariaLabel: "LinkedIn" },
            ],
        },
    ];

    return (
        <>
            <div className="relative">
                <CardNav
                    logo={phote}
                    logoAlt="Company Logo"
                    items={items}
                    baseColor="#000000ff"
                    menuColor="#ffffffff"
                    buttonBgColor="#111"
                    buttonTextColor="#fff"
                    ease="power3.out"
                />
                <div style={{ width: "100%", height: "600px", position: "relative" }}>
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#00ffff"
                        raysSpeed={1.5}
                        lightSpread={0.8}
                        rayLength={1.2}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0.1}
                        distortion={0.05}
                        className="custom-rays"
                    />
                </div>
                <div style={{ position: 'relative', height: '300px' }}>
                    <TextPressure
                        text="WorIT!"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#ffffff"
                        strokeColor="#ff0000"
                        minFontSize={36}
                    />
                </div>
            </div>

        </>
    );
}
