import { motion } from "framer-motion";
import { testimonials } from "../data";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";


const Testimonials = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);



    return (
        <div className="h-[100vh] flex items-center justify-center flex-col gap-15 max-lg:mt-20">
            <motion.h1 initial={{ opacity: 0, translateY: "-30px" }} whileInView={{ opacity: 1, translateY: "0" }} viewport={{ once: true }} transition={{
                duration: 1
            }} className="text-4xl realtive text-white font-inter font-bold text-center">Testimoials</motion.h1>

            <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="text-white font-inter w-[50%] max-lg:w-[80%] h-[350px] relative"
            >
                <button className="absolute top-[50%] -translate-y-[50%] left-0 z-100 before:content-[''] before:absolute before:-top-[150px] before:left-0 before:w-[300px] before:h-[350px] before:bg-[linear-gradient(90deg,#100000bd,transparent,transparent)] before:duration-500 before:opacity-0 hover:before:opacity-100 cursor-pointer ">
                    <IoMdArrowDropleft ref={prevRef} className="text-5xl text-[#7832F0]  drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] " />
                </button>
                <button className="absolute top-[50%] -translate-y-[50%] right-0 z-100 before:content-[''] before:absolute before:-top-[150px] before:right-0 before:w-[300px] before:h-[350px] before:bg-[linear-gradient(270deg,#100000bd,transparent,transparent)] before:duration-500 before:opacity-0 hover:before:opacity-100 cursor-pointer ">
                    <IoMdArrowDropright ref={nextRef} className="text-5xl text-[#7832F0] drop-shadow-[0_0_10px_rgba(0,0,0,0.2)] " />
                </button>
                {testimonials.map((test, index) => (
                    <SwiperSlide>
                        <div className="bg-[#9b67f426] h-full w-full p-4 py-6 rounded-[10px]">
                            <div className="flex items-center gap-2">
                                <img src={test.img} alt="" className="w-15 rounded-full object-fit" />
                                <div>
                                    <p className="font-bold">{test.name}</p>
                                    <p className="text-[#c2c2c2]">{test.job}</p>
                                </div>
                            </div>
                            <p className="text-md text-[#c2c2c2] mt-4 max-md:text-sm">
                                {test.quote}
                            </p>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default Testimonials;