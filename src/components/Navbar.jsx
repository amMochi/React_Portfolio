import logo from "../assets/gop.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>

    <div className="m-18 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/godfreyponce" target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}
      >
         <FaLinkedin/>
      </motion.div>
    </a>
    <a href="https://github.com/amMochi/react-portfolio-godfrey" target="_blank" rel="noopener noreferrer">
     <motion.div
       whileHover={{ scale: 1.4 }}
       whileTap={{ scale: 0.9 }}
    >
      <FaGithub/> 
    </motion.div>
    </a>
    <a href="https://www.instagram.com/_ggeov/" target="_blank" rel="noopener noreferrer">
   
    <motion.div
        whileHover={{ scale: 1.4}}
        whileTap={{ scale: 0.9}}  
    >
      
      <FaInstagram/>
      
    </motion.div>
    </a>
         

     

      </div>
    </nav>
  );
};

export default Navbar