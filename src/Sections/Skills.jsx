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
            <div className="text-2xl text-white min-h-screen w-full px-3 ">
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
               className="flex  justify-center items-center flex-wrap gap-4 sm:gap-10 rounded-md md:px-14 ">
               
               
                <div className="border-2 border-blue-800 font-light shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center hover:text-orange-500 hover:shadow-orange-400 ease-in-out duration-400 cursor-pointer flex-col text-center "> <div><FaHtml5 size={40} /></div> <div className="mt-2"> HTML</div>   </div>
                 <div className=" border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-blue-800 hover:shadow-blue-800 ease-in-out duration-400 cursor-pointer flex-col text-center"> <div><FaCss3 size={40} />  </div> <div className="mt-2"> CSS </div></div>
                  <div className=" border-2 border-blue-800 shadow-2xl  shadow-blue-600/30  h-30 w-40 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-yellow-500 hover:shadow-yellow-400 ease-in-out duration-400 cursor-pointer flex-col text-center"><div>  <FaJs size={40} /></div> <div  className="mt-2"> JS </div></div>
                   <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-blue-400 hover:shadow-blue-400 ease-in-out duration-400 cursor-pointer flex-col text-center"> <div> <FaReact size={40} /> </div> <div className="mt-2">REACT </div></div>
                    <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-blue-100 hover:shadow-blue-100 ease-in-out duration-400 cursor-pointer flex-col text-center">  <TbBrandCpp size={40} /> </div>
                     <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-cyan-500 hover:shadow-cyan-500 ease-in-out duration-400 cursor-pointer flex-col text-center">  <div><RiTailwindCssFill size={40} /></div> <div className="mt-2">Tailwind</div> </div>
                       <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center font-light  hover:text-purple-700 hover:shadow-purple-700 ease-in-out duration-400 cursor-pointer flex-col text-center"><div><TbBrandFramerMotion  size={40}/></div><div className="mt-2">Framer</div></div>
                           <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-gray-500 hover:shadow-gray-400 ease-in-out duration-400 cursor-pointer flex-col text-center"> <div><FaGithub size={40} /> </div> <div className="mt-2">GITHUB</div> </div>
                               <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-red-500 hover:shadow-red-700 ease-in-out duration-400 cursor-pointer flex-col text-center"><div> <SiNetlify size={40}/> </div> <div className="mt-2"> Netlify </div></div>


      
            
              </motion.div>


        </div>
        </section>
    )
}
export default Skills