import PortfolioImg from "../assets/portfolio.jpg";
import ChatAppImg from "../assets/chatapp.png";
import DashboardImg from "../assets/dashboard.jpg";
import EcommerceImg from "../assets/ecommerce.jpg";
import { portfolio } from "../data";
import { FaGithub } from "react-icons/fa6";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div className="h-[100vh] max-md:h-fit flex items-center justify-center flex-col gap-15 max-sm:gap-5 max-sm:mt-10 w-[80%] mx-auto">
            <motion.h1 initial={{ opacity: 0, translateY: "-30px" }} whileInView={{ opacity: 1, translateY: "0" }} viewport={{once: true}}   transition={{
                duration: 1
            }} className="text-4xl realtive text-white font-inter font-bold text-center">Projects</motion.h1>

            <motion.div initial={{ opacity: 0, translateY: "-30px" }} whileInView={{ opacity: 1, translateY: "0" }}  viewport={{once: true}}  transition={{
                duration: 1
            }} className="grid grid-col-1 md:grid-cols-3 gap-15 mt-4 ">
                {portfolio.map((p, index) => (
                    <div key={index} className="bg-[#7832f01f] rounded-[10px] relative h-fit overflow-hidden  group cursor-pointer hover:scale-[1.01] transition-all duration-[0.5s] border border-white/10 ">
                        <div className="absolute top-3 right-2 z-100 flex items-center gap-1">
                            <button className="p-2 flex items-center justify-center border border-[#240e4a3a] rounded-full cursor-pointer backdrop-blur-2xl hover:border-[#8668bb] transition-all">
                                <FaGithub className="text-black" />
                            </button>
                            <button className="p-2 flex items-center justify-center border border-[#240e4a3a] rounded-full cursor-pointer backdrop-blur-2xl hover:border-[#8668bb] transition-all">
                                <LuSquareArrowOutUpRight className="text-black " />
                            </button>

                        </div>
                        <img src={p.image} alt="" className="group-hover:scale-[1.02] transition-all duration-[0.5s] brightness-90 h-[350px] w-full object-cover" />
                        <div className="p-5">
                            <h1 className="text-white font-inter mt-4 mb-2 text-2xl font-semibold">{p.title}</h1>
                            <p className="text-[#c2c2c2] font-inter text-sm">{p.desc}</p>
                            <div className="font-inter text-white flex text-xs  gap-2 mt-2 flex-wrap">
                                {p.techs.map((tech, index) => (
                                    <p key={index} className="py-2 px-4 bg-[#9b67f426] rounded-[5px]">{tech}</p>
                                ))}
                            </div>
                        </div>
                        <div className="w-full h-full absolute top-0 left-[-150%] z-10 group-hover:left-[150%] group-hover:scale-[1.2] transition-all duration-[1s] ease-in-out" style={{
                            background: "linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.3) 50%, transparent 100%)"
                        }}></div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects;