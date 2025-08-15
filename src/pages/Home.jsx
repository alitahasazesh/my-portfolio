import VectorImg from "../assets/v.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import JavaScriptLogo from "../assets/JavaScript.png";
import ReactLogo from "../assets/React.png";
import NodeJSLogo from "../assets/Node.js.png";
import TailwindLogo from "../assets/Tailwind CSS.png";
import SplitText from "../components/animations/SplitText";
import { motion } from "framer-motion";
import ShinyText from "../components/animations/ShinyText";
import GradientText from "../components/animations/ShinyText";
import DotGrid from "../components/animations/Waves";
import FloatOnScroll from "../components/animations/FloatOnScroll";
import { useScroll, useTransform } from "framer-motion";
import DarkVeil from "../components/animations/Waves";




const Home = () => {

    // const { scrollY } = useScroll();


    // const y = useTransform(scrollY, [0, 500], [50, -100]);

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <div className="h-[100vh] flex tracking-tighter justify-center flex-col relative z-1">
            {/* <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
                <DarkVeil speed={1.6} />
            </div> */}

            <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.5]" style={{ background: "linear-gradient(45deg, transparent, transparent, #7832F0)" }}>
            </div>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.5]" style={{ background: "linear-gradient(-45deg, transparent, transparent, #7832F0)" }}>
            </div>

            <div initial={{opacity: 0, translateY: "-20px"}} animate={{opacity: 1, translateY: "0"}} transition={{
                duration: 2
            }} className="absolute top-0 left-0 h-full w-full" >
                <img src={JavaScriptLogo} alt="" className=" max-md:hidden w-20   absolute xl:top-[25%]  xl:left-[14%] lg:top-[15%] lg:left-[10%] md:top-[15%] md:left-[10%]  drop-shadow-[0_0_15px_#efdb4e]" />
                <img src={JavaScriptLogo} alt="" className=" max-md:hidden w-20   absolute xl:top-[25%]  xl:left-[14%] lg:top-[15%] lg:left-[10%] md:top-[15%] md:left-[10%]  drop-shadow-[0_0_15px_#efdb4e]" />
                <img src={ReactLogo} alt="" className=" max-md:hidden w-20  absolute xl:top-[20%]  xl:right-[18%]  lg:top-[10%] lg:right-[15%] md:top-[20%] md:right-[10%]   drop-shadow-[0_0_15px_#60dbfb]" />
                <img src={NodeJSLogo} alt="" className=" max-md:hidden w-20  absolute xl:top-[55%]  xl:left-[12%] lg:top-[60%] lg:left-[13%]  md:top-[60%] md:left-[10%]   drop-shadow-[0_0_15px_#83cd28]" />
                <img src={TailwindLogo} alt="" className=" max-md:hidden w-20 absolute lg:top-[60%] lg:right-[20%] md:top-[60%] md:right-[10%] drop-shadow-[0_0_15px_#38bdf9]" />
            </div>
            <div initial={{ opacity: 0, translateY: "15px" }} animate={{ opacity: 1, translateY: "0" }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
                <GradientText
                    colors={["#7832f0", "#8c51ef", "#d5d5d5", "#7832f0", "#8c51ef", "#d5d5d5"]}
                    animationSpeed={15}
                    showBorder={false}
                    className="max-sm:text-3xl max-md:text-4xl text-5xl uppercase mb-5 px-5 font-bold"
                >
                    Olivia Emma
                </GradientText>
            </div>




            <div className="font-inter uppercase text-center font-bold  text-transparent bg-clip-text cursor-pointer" style={{
                backgroundImage: "linear-gradient(273deg,rgba(217, 212, 212, 1) 0%, rgba(156, 121, 217, 1) 20%, #7832F0 50%, rgba(79, 13, 194, 1) 80%)"
            }}>

                <SplitText
                    text="FullStack Web"
                    className="max-sm:text-4xl max-md:text-6xl md:text-8xl  font-bold text-center text-[#7832F0] text-shadow-[0_0_5px_#7832F0] "
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <br />
                <SplitText
                    text="Developer"
                    className="max-sm:text-4xl max-md:text-6xl md:text-8xl  font-bold text-center text-[#7832F0] text-shadow-[0_0_5px_#7832F0] "
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <img
                    initial={{ opacity: 0, translateY: "20px" }}
                    whileInView={{
                        opacity: 1, translateY: 0, transition: {
                            duration: 1
                        }
                    }}
                    viewport={{ once: true }}
                    src={VectorImg}
                    alt=""
                    className="max-sm:w-[300px] max-md:w-[430px] w-[550px] mx-auto drop-shadow-[0_0_10px_#500dc2]" />

            </div>

            <p className="text-center text-[#c2c2c2] mt-10 font-inter tracking-wide max-w-[650px] max-sm:w-[340px] max-sm:text-sm mx-auto">
                Hey there I am Olivia Emma, A Software Engineer specializing in FullStack Web Development with latest technologies
            </p>
            <button
                initial={{ opacity: 0, translateY: "10px" }}
                animate={{
                    opacity: 1, translateY: "0", transition: {
                        duration: 1
                    }
                }}
                className="mx-auto mt-10 inline-flex
                whitespace-nowrap 
                rounded-full
                w-[150px]
                px-7
                py-3.5
                text-md
                max-sm:w-[130px]
                max-sm:px-6
                max-sm:py-3
                max-sm:text-sm
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
                hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms] cursor-pointer hover:scale-[1.03] transition-all duration-500 items-center gap-2 gradient-shiny"
            >
                See More
                <div className="bg-white rounded-full p-2 absolute top-[50%] translate-y-[-50%] right-[10px]">
                    <MdKeyboardArrowRight className="text-1xl text-black" />
                </div>
            </button>

            <div>
            </div>
        </div>

    )
}

export default Home;