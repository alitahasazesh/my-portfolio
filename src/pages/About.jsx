import GirlImage from "../assets/girl.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { motion } from "framer-motion";

// Facebook #1877F2
// Instagram #405DE6        
// Linkedin #0077B5
// Discord #7289da

const About = () => {
    return (
        <div className="h-[100vh] relative pt-10 flex items-center justify-center">
            <div className="absolute -top-[20%] right-0 w-[600px] h-[600px] opacity-[0.2]" style={{ background: "radial-gradient(circle at center right, #7832F0, transparent, transparent)" }}>
            </div>


            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.2]" style={{ background: "radial-gradient(circle at center left, #7832F0, transparent, transparent)" }}></div>
            <p initial={{ opacity: 0, translateY: "20px" }} whileInView={{ opacity: 1, translateY: 0 }} viewport={{ once: true }} transition={{ duration: 2 }} className="text-[#c2c2c2] text-2xl max-md:text-xl max-sm:text-sm    leading-10 max-w-[600px] mx-auto font-inter relative text-justify w-[80%]">
                <span className="text-[150px] max-md:text-[120px] max-md:hidden  font-arial text-transparent text-stroke absolute top-5 -left-15 max-md:-left-13 floating1" >“</span>
                Hi. <br />
                I'm a passionate Software Engineer specializing in full-stack web development with a focus on building modern, scalable, and responsive applications. With experience in JavaScript, React, Node.js, Express, and MongoDB, I enjoy transforming ideas into real-world products that are fast, functional, and user-friendly.

                I love writing clean code, solving complex problems, and constantly learning new technologies. Whether it's developing APIs, creating pixel-perfect UIs, or optimizing performance, I aim to build seamless digital experiences.

                When I'm not coding, you'll find me exploring the latest in tech, contributing to open-source, or leveling up my skills through side projects. hope you liked it! <span className="text-[150px] max-md:text-[120px] max-md:hidden font-arial text-transparent text-stroke absolute -bottom-11 max-md:-bottom-8 right-[90px] max-md:left-[170px] text-shadow-[0_0_5px_#7832F0,0_0_10px_#7832F0,0_0_20px_#7832F00_0_40px_#7832F0] floating1">”</span>
                <img src={GirlImage} alt="" className="w-20 h-20 object-cover absolute -top-18 -right-18 max-md:-right-8  max-sm:left-[50%] max-sm:-translate-x-[50%] max-sm:-top-22 rounded-full floating1 drop-shadow-[0_0_10px_#7832F0] z-2000" />
            </p>
        </div>
    )
}

export default About;