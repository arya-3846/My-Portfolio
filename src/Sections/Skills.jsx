import { easeInOut, motion } from "motion/react"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Skills(){
   
    return(
        <section id="skills" className="py-15  sm:mt-0 lg:mt-15 font-mono">
            <div className="text-2xl text-white min-h-screen w-full px-18 ">
                <motion.div
                
                initial={{opacity:0, y:-30}}
                whileInView={{opacity:1, y:0}}
                transition={{ease:easeInOut, duration:0.4,}}
                viewport={{once:true}}
                className="flex justify-center text-3xl font-bold py-4 mb-10 animate-pulse text-blue-600">My Skills</motion.div>
             
             

              <motion.div
               initial={{opacity:0, y:-30}}
                whileInView={{opacity:1, y:0}}
                transition={{ease:easeInOut, duration:0.4}}
                viewport={{once:true}}
               className="flex  justify-center items-center flex-wrap gap-4 sm:gap-10 rounded-md ">
               
               
                <div className="border-2 border-blue-800 font-light shadow-2xl  shadow-blue-600/30 h-30 w-60 rounded-md md:w-80 flex justify-center items-center hover:text-orange-500 hover:shadow-orange-400 ease-in-out duration-400 cursor-pointer "> <FaHtml5 size={40} /> - HTML   </div>
                 <div className=" border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-60 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-blue-800 hover:shadow-blue-800 ease-in-out duration-400 cursor-pointer"> <FaCss3 size={40} /> - CSS   </div>
                  <div className=" border-2 border-blue-800 shadow-2xl  shadow-blue-600/30  h-30 w-60 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-yellow-500 hover:shadow-yellow-400 ease-in-out duration-400 cursor-pointer">  <FaJs size={40} /> - JS </div>
                   <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-60 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-blue-400 hover:shadow-blue-400 ease-in-out duration-400 cursor-pointer">  <FaReact size={40} /> - REACT  </div>
                    <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-60 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-blue-100 hover:shadow-blue-100 ease-in-out duration-400 cursor-pointer">  <TbBrandCpp size={40} /> </div>
                     <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-60 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-cyan-500 hover:shadow-cyan-500 ease-in-out duration-400 cursor-pointer">  <RiTailwindCssFill size={40} /> - Tailwind </div>
                       <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-60 rounded-md md:w-80 flex justify-center items-center font-light  hover:text-purple-700 hover:shadow-purple-700 ease-in-out duration-400 cursor-pointer"><TbBrandFramerMotion  size={40}/> - Framer</div>
                           <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-60 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-gray-500 hover:shadow-gray-400 ease-in-out duration-400 cursor-pointer"> <FaGithub size={40} /> - GITHUB  </div>
                               <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-60 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-red-500 hover:shadow-red-700 ease-in-out duration-400 cursor-pointer"> <SiNetlify size={40}/> - Netlify   </div>


      
            
              </motion.div>


        </div>
        </section>
    )
}
export default Skills