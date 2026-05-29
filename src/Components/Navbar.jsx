import { useState } from "react";
import { AnimatePresence, easeInOut, motion, scale, useScroll } from "framer-motion";
import {Link} from "react-scroll"


function Navbar() {
    const scrollYProgress= useScroll().scrollYProgress

    const [open, setOpen] = useState(false);

    return (
        <div className="text-white font-mono sticky top-0 z-50 backdrop-blur-xl py-0.5 mt-4">

            <div className="flex items-center justify-between px-5 py-1 sm:px-10 xl:px-20 ">

               
                <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">
                    Arya Pandey
                </h1>

               
                <motion.ul 
                whileTap={{scale:0.9}}
                transition={{duration:0.2, ease:"easeInOut"}}
                className="hidden lg:flex gap-8 text-xl opacity-70 px-3 ">

                    <Link to="home" smooth={true} duration={1000}>  <motion.li id="hi" className=" hover:text-blue-700 rounded-md transition-all ease-in-out border border-transparent hover:border-blue-700 duration-500  hover:border-1 border-blue-700 px-3 py-2 "><a href="#home">Home</a></motion.li></Link>
                    <Link to="about" smooth={true} duration={1000}><motion.li id="hi" className="hover:text-blue-700 rounded-md transition-all ease-in-out duration-500 border border-transparent hover:border-blue-700  hover:border-1 border-blue-700 px-4 py-2"><a href="#about">About</a></motion.li></Link>
                    <Link to="projects" smooth={true} duration={1000}><motion.li id="hi" className="hover:text-blue-700 rounded-md transition-all ease-in-out duration-500 border border-transparent hover:border-blue-700  hover:border-1 border-blue-700 px-4 py-2"><a href="#projects">Projects</a></motion.li></Link>
                    <Link to="skills" smooth={true} duration={1000}><motion.li id="hi" className="hover:text-blue-700 rounded-md transition-all ease-in-out duration-500 border border-transparent hover:border-blue-700 hover:border-1 border-blue-700 px-4 py-2"><a href="#skills">Skills</a></motion.li></Link>
                    <Link to="contact" smooth={true} duration={1000}><motion.li id="hi" className="hover:text-blue-700 rounded-md transition-all  ease-in-out duration-500 border border-transparent hover:border-blue-700  hover:border-1 border-blue-700 px-4 py-2"><a href="#contact">Contact</a></motion.li></Link>

                </motion.ul>

                
                <motion.button
                    
                     whileTap={{scale:0.3}}
                    transition={{ duration:0.2, ease:easeInOut
                    }}
                    className="lg:hidden text-3xl md:text-5xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : "☰"}
                </motion.button>
           
            </div>

           <AnimatePresence>
            {open && (
               
                    <motion.ul 
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, x:0 }}
                exit={{opacity:0, y:-100}}
                
                transition={{ease:easeInOut, duration:0.3}}
                className="lg:hidden flex flex-col gap-6 px-10 pb-6 text-xl bg-black/30 backdrop-blur-sm">

                  <Link to="home" smooth={true} duration={1000}>  <li><a href="#home">Home</a></li></Link>
                    <Link to="about" smooth={true} duration={1000}><li><a href="#about">About</a></li></Link>
                    <Link to="projects" smooth={true} duration={1000}><li><a href="#projects">Projects</a></li></Link>
                    <Link to="skills" smooth={true} duration={1000}><li><a href="#skills">Skills</a></li></Link>
                    <Link to="contact" smooth={true} duration={1000}><li><a href="#contact">Contact</a></li></Link>

                </motion.ul>
               
            )}
            </AnimatePresence>
          <motion.div
          transition={{ease:easeInOut}}
          style={{
            scaleX:scrollYProgress
          }}
           className="h-1 w-full bg-blue-800 rounded-2xl">

          </motion.div>
        </div>
    );
}

export default Navbar;