import aboutImg from"../assets/prof.png";
import { ABOUT_TEXT } from"../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl" >About 
          <span className="bg-gradient-to-r from-orange-400 via0slate-500 to-yellow-200 bg-clip-text text-4xl 
                   tracking-tight text-transparent"> Me</span>
        </h1> 
          <div className="flex flex-wrap">
            <motion.div
            whileInView={{ opacity: 1, x:-50 }} 
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 0.5}}
            className="w-full lg:w-1/2 lg:p-8">
              <div className="flex items-center justify-center">
                <img clasName="rounded-2xl" src={aboutImg} alt="about" /></div>
             </motion.div>
             <motion.div 
             whileInView={{ opacity:1, x:0 }}
             initial={{ opacity: 0, x:100 }}
             transition={{ duration: 0.5}}
             className="w-full lg:w-1/2"> 
              <div className="flex justfiy-center lg:justify-start">
                <p className="my-2 max-w-xl py-10"dangerouslySetInnerHTML={{ __html:ABOUT_TEXT}} />
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default About