import { motion } from "framer-motion";
import Blender from "../assets/techicons/Blender.png";
import CSS3 from "../assets/techicons/CSS3.png";
import Express from "../assets/techicons/Express.png";
import Go from "../assets/techicons/Go.png";
import Godot from "../assets/techicons/Godot Engine.png";
import HTML5 from "../assets/techicons/HTML5.png";
import JavaScript from "../assets/techicons/JavaScript.png";
import MongoDB from "../assets/techicons/MongoDB.png";
import NodeJS from "../assets/techicons/NodeJS.png";
import PHP from "../assets/techicons/PHP.png";
import Python from "../assets/techicons/Python.png";
import React from "../assets/techicons/React.png";
import Ruby from "../assets/techicons/Ruby.png";
import Rust from "../assets/techicons/Rust.png";
import ThreeJS from "../assets/techicons/Three.js.png";
import Unity from "../assets/techicons/Unity.png";
import { skills } from "../data";

const Skills = () => {
    return (
        <div className="h-[100vh] flex items-center justify-center flex-col gap-15 relative overflow-hidden">
            <motion.h1 initial={{ opacity: 0, translateY: "-30px" }} whileInView={{ opacity: 1, translateY: "0" }} transition={{
                duration: 1
            }} className="text-4xl realtive text-white font-inter font-bold text-center">Skills</motion.h1>
            <motion.div initial={{
                opacity: 0, translateY: "-40px"
            }} whileInView={{
                opacity: 1, translateY: "0"
            }} transition={{
                duration: 1
            }} className="max-w-[60%] w-[60%] mx-auto flex flex-wrap justify-center gap-3 text-white" >
                {
                    skills.map((skill, index) => (
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={skill.image} alt="" className="w-10 h-10 fit-cover" />
                            <div className="bg-[#9b67f426] py-2 px-4 text-sm font-inter border border-[#9b67f426] rounded-full">{skill.name}</div>
                        </div>
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Skills;