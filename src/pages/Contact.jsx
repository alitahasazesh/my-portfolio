import { motion } from "framer-motion";
import Threads from "../components/animations/Particles";
import Squares from "../components/animations/Particles";
import LightRays from "../components/animations/Particles";
import Particles from "../components/animations/Particles";

import { FaPaperPlane } from "react-icons/fa6";
import Beams from "../components/animations/Particles";


const Contact = () => {
    return (
        <div className="h-[100vh] flex items-center justify-center flex-col gap-15 relative">
            <div className="z-100">
                <motion.h1 initial={{ opacity: 0, translateY: "-30px" }} whileInView={{ opacity: 1, translateY: "0" }} transition={{
                    duration: 1
                }} className="text-4xl realtive text-white font-inter font-bold text-center mb-10">Contact Me</motion.h1>
                <motion.form initial={{opacity: 0, translateY: "-20px"}} whileInView={{opacity: 1, translateY: "0"}} transition={{
                    duration: 1
                }} className="bg-[#05000d] w-[500px]  p-10 rounded-[10px] border border-[#9b67f42c] font-inter shadow-[0_0_10px_#16003b]">
                    <div className="flex flex-col gap-5">
                        <input type="text" placeholder="Your Name" className="text-white placeholder:text-[#c2c2c2] border border-[#9b67f426] py-3 pl-3 outline-none focus:ring focus:ring-[#7832f0] rounded-[5px]" />
                        <input type="email" placeholder="you@example.com" className="text-white placeholder:text-[#c2c2c2] border border-[#9b67f426] py-3 pl-3 outline-none focus:ring focus:ring-[#7832f0] rounded-[5px]" />
                        <textarea placeholder="Write your message..." className="text-white placeholder:text-[#c2c2c2] border border-[#9b67f426] py-3 pl-3 outline-none focus:ring focus:ring-[#7832f0] rounded-[5px] h-[130px]"></textarea>
                        <button
                            initial={{ opacity: 0, translateY: "10px" }}
                            animate={{
                                opacity: 1, translateY: "0", transition: {
                                    duration: 1
                                }
                            }}
                            className="mx-auto mt-10 inline-flex
                                             justify-center
                                        whitespace-nowrap 
                                        rounded-full
                                        w-full
                                        text-center
                                        px-7
                                        py-3.5
                                        text-md
                                        font-medium
                                        text-slate-200
                                        bg-[#4f0dc2]
                                        relative
                                        before:absolute
                                        before:inset-0
                                        before:rounded-[inherit]
                                        before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%,transparent_100%)]
                                        before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0]
                                        before:bg-no-repeat
                                        before:[transition:background-position_0s_ease]
                                        shadow-[0_0_20px_rgba(79,13,194,1)]
                                        hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms] cursor-pointer hover:scale-[1.03] transition-all duration-500 items-center gap-2"
                        >
                            Send
                        </button>
                    </div>
                </motion.form>
            </div>
            <div className=" w-full h-full absolute top-0 left-0 z-1">
                <Beams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={12}
                    lightColor="#805bd7"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={45}
                />
            </div>

        </div>
    )
}

export default Contact;