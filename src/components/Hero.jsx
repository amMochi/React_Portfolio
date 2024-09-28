import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/pong.png";
import { motion } from "framer-motion";
import resume from '../assets/GodfreyPonce_Resume.pdf';


const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-100 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className ="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                   <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6.5xl">Hello ,   I'm  Godfrey Ponce</motion.h1> 
                   <motion.span 
                   variants={container(0.5)}
                   initial="hidden"
                   animate="visible"whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} drag="x" dragConstraints= {{ left: -100, right: 100 }} className="bg-gradient-to-r from-orange-400 via0slate-500 to-yellow-200 bg-clip-text text-4xl 
                   tracking-tight text-transparent">Student Developer</motion.span>
                   <motion.p 
                   variants={container(1)}
                   initial="hidden"
                   animate="visible"className="my-2 max-w-xl py-6 text-2xl font-light tracking-tighter">
                    {HERO_CONTENT}
                    </motion.p>
                    <motion.a
                        whileHover={{ textDecoration: 'underline', scale: 1.1}}
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible"
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-100 font-light">
                        View Resume as a PDF
                    </motion.a>
                </div>
            </div>
             <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                    initial={{ x:100 , opacity: 0}}
                    animate= {{ x:0 , opacity: 1}}
                    transition={{ duration:1 , delay: 1.2}}
                     src={profilePic} alt="Godfrey Ponce"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero 