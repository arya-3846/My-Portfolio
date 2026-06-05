import Avator from "../assets/Avator.webp"
import {Typewriter} from "react-simple-typewriter"
import {animate, easeInOut, motion} from "framer-motion"
import { Link } from "react-scroll"
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
function Home(){
    return(
       <section id="home" className="min-h-screen ">
        
         <motion.div
        initial={{opacity:0, y:-20}} 
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.4}}
        viewport={{once:true}}
         className="text-2xl text-white min-h-screen w-full flex flex-col py-15 px-5 md:flex-row sm:justify-center font-mono">
            <div className="sm:mt-20 flex flex-col justify-center items-center " >
                <h1 className="font-bold text-3xl sm:text-5xl lg:text-7xl sm:mt-5 lg:mt-12 "><span className="text-blue-700 ">HI,<span className=""> I AM</span></span> <span className="">ARYA✌️</span></h1> 
                <div className="text-sm sm:text-md md:text-xl">
                <div className="mt-5  text-blue-600 " >
                    <p>
                    I turn complex ideas into seamless, high-impact web experiences by<br /> building mordern, scalable and lightning fast web <br /> apps that make a diffrence. 
                </p>
                </div>
             <div className="mt-6 mb-4 flex justify-center sm:justify-start items-center text-sm sm:text-2xl font-semibold lg:text-4xl">
                 <h1>
                     
                       <span>
                       <motion.div
                       transition={{ease:easeInOut, duration:2}} 
                       className="h-auto w-auto px-5 bg-blue-700/10 py-2  rounded-lg mask-r-from-neutral-100 ">
                        <span className="text-blue-700 ">I'm a </span>
                         <Typewriter
                        smooth
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        words={[' Frontend Developer', ' UI/UX Designer', ' DSA learner' ]}
                        
                        />
                       </motion.div>
                   </span>
                 </h1>
                
                       </div>
                       <div  className=" px-2 py-3 flex flex-wrap gap-3 justify-center sm:justify-start items-center ">
                       <motion.div whileHover={{y:-2}} transition={{duration:0.1, easeInOut}} className="border-2 border-blue-600/20 flex items-center gap-2 w-min rounded-md px-2 py-2 hover:text-blue-400 hover:border-blue-400 cursor-pointer transition-all ease-in-out duration-400 "><FaReact className="text-blue-400"/><span> React</span></motion.div>
                       <motion.div whileHover={{y:-2}} transition={{duration:0.1, easeInOut}} className="border-2 border-blue-600/20 flex items-center gap-2 w-min rounded-md px-2 py-2 hover:text-green-400 hover:border-green-400 cursor-pointer transition-all duration-400 ease-in-out"><FaNodeJs  className="text-green-400"/><span> NodeJS</span></motion.div>
                       <motion.div whileHover={{y:-2}} transition={{duration:0.1, easeInOut}} className="border-2 border-blue-600/20 flex items-center gap-2 w-min rounded-md px-2 py-2 cursor-pointer hover:border-white transition-all ease-in-out duration-400"><RiNextjsFill /><span> NextJS</span></motion.div>
                       <motion.div whileHover={{y:-2}} transition={{duration:0.1, easeInOut}} className="border-2 border-blue-600/20 flex items-center gap-2 w-min rounded-md px-2 py-2 hover:text-green-700 hover:border-green-700 cursor-pointer transition-all ease-in-out duration-400"><DiMongodb className="text-green-600" /><span> MongoDB</span></motion.div>
                       <motion.div whileHover={{y:-2}} transition={{duration:0.1, easeInOut}} className="border-2 border-blue-600/20 flex items-center gap-2 w-min rounded-md px-2 py-2 hover:text-blue-300 hover:border-blue-300 cursor-pointer transition-all ease-in-out duration-400"><SiCplusplus /><span> C++</span></motion.div>
                       
                       </div>

                <motion.div
                
                className="hidden sm:flex gap-7 justify-center items-center ">
 

                    <motion.div whileHover={{y:-4}} smooth={true} duration={500}><Link to="projects" smooth={true} duration={500}> <button id="button" className="bg-blue-600 px-6 py-3 hover:cursor-pointer hover:shadow-lg transition-all duration-500 ease-in-out rounded-xl mt-10 ">Projects</button></Link></motion.div>
                    <motion.div whileHover={{y:-4}} smooth={true} duration={500}><Link smooth={true} duration={500}><button id="button" className="border-2 px-6 py-3 hover:cursor-pointer hover:shadow-lg transition-all duration-500 ease-in-out rounded-xl mt-10 hover:border-blue-600 hover:text-blue-600">Resume</button></Link></motion.div>
                </motion.div>
                    



                  </div> 
             </div>
        <motion.div 
        initial={{opacity:0, x:20}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.4, ease:easeInOut}}
        viewport={{once:true}}
        className="flex justify-center items-center ">
                 <img src={Avator} loading="eager" fetch-priority="high" alt="" className="h-80 lg:h-170 md:h-120 sm:h-100 " />
         </motion.div>
              </motion.div>
       </section>
    )
}
export default Home