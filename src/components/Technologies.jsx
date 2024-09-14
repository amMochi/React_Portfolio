import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri"; //dont need
import { FaPython } from "react-icons/fa"; //dont need
import { FaAws } from "react-icons/fa"; //dont need
import { FaNodeJs } from "react-icons/fa"; 
import { motion } from "framer-motion"; 

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        
     transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
     },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-netural-800 pb-24">
        <motion.h2 
        whileInView={{ opacity: 1, y:0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>

        <motion.div
        whileInView={{ opacity: 1, x:0 }}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
            
           
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/> 
            </motion.div>

            <motion.div 
            variants={iconVariants(1.6)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-sky-700"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.15)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-yellow-500"/>
            </motion.div>

            <motion.div
            variants={iconVariants(2.25)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl text-white-700"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.40)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-400"/>
            </motion.div>
        </motion.div>
    </div>
  );
};

export default Technologies