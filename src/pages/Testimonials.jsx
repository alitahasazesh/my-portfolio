import { motion } from "framer-motion";
import { testimonials } from "../data";

const Testimonials = () => {


    return (
        <div className="h-fit flex items-center justify-center flex-col gap-15">
            <motion.h1 initial={{ opacity: 0, translateY: "-30px" }} whileInView={{ opacity: 1, translateY: "0" }} transition={{
                duration: 1
            }} className="text-4xl realtive text-white font-inter font-bold text-center">Testimoials</motion.h1>
            <motion.div initial={{opacity: 0, translateX: "-20px"}} whileInView={{opacity: 1, translateX: "0"}} transition={{duration: 1}} className="grid grid-cols-3 gap-3 w-[80%] mx-auto grid-flow-dense">
                {
                    testimonials.map((test, index) => (
                    <div className={`bg-[#9b67f426] p-4 text-white font-inter rounded-[10px] border border-[#9b67f426] ${test.classNames}`}>
                        <div className="flex items-center gap-5 ">
                            <img src={test.img} alt="" className="w-15 rounded-full object-cover" />
                            <div>
                                <p className="font-semibold">{test.name}</p>
                                <p className="text-[#e8e4e4]">{test.job}</p>
                            </div>
                        </div>
                        <p className="whitespace-normal mt-2 text-justify text-[#c2c2c2]">
                            {test.quote}
                        </p>
                    </div>
    
                    ))
                }
            </motion.div>
        </div>
    )
}

export default Testimonials;