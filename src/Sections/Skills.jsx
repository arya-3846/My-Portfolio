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
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";

function Skills(){
   
    return(
        <section id="skills" className="py-15  sm:mt-0 lg:mt-15 font-mono ">
            <div className="text-2xl text-white min-h-screen w-full   ">
                <motion.div
                
                initial={{opacity:0, y:-30}}
                whileInView={{opacity:1, y:0}}
                transition={{ease:easeInOut, duration:0.4,}}
                viewport={{once:true}}
                className="flex justify-center items-center text-3xl font-bold py-4 mb-10 animate-pulse text-blue-600">Techs I work upon</motion.div>
             
             
                 <div className="flex justify-center items-center flex-row">
                    
              <motion.div
               initial={{opacity:0, y:-30}}
                whileInView={{opacity:1, y:0}}
                transition={{ease:easeInOut, duration:0.4}}
                viewport={{once:true}}
               className="flex  justify-center items-center flex-wrap gap-15 sm:gap-10 rounded-md md:px-6 ">

               <motion.div
               whileHover={{y:-3}}
               transition={{easeInOut, duration:0.3}}
               >
                
               <div  className="h-auto md:min-h-screen border-2 w-70 lg:w-100 border-blue-500/20 hover:border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)]  transition-all ease-in-out duration-300 bg-blue-800/10 rounded-lg">
                <div className="h-0.5 w-full border border-blue-700 px-4 py-10 text-center flex justify-center items-center rounded-lg">Frontend</div>
               <div className="px-10 py-5 gap-8 flex justify-start items-start sm:items-center flex-col ">
               <div className="h-auto w-full px-3 py-1 bg-blue-500/20 border-2 border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all ease-in-out duration-300  flex gap-4 rounded-lg items-center justify-center"> <FaHtml5 size={40} className="text-orange-700 text-center"/><div className="text-center">HTML</div></div>
                <div className="h-auto w-full border-2 border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all ease-in-out duration-300 px-3 py-2 bg-blue-500/20 flex gap-4 rounded-lg items-center justify-center"><FaCss3 size={40} className="text-blue-600"/> <div className="text-center">CSS</div></div>
                <div className="h-auto w-full border-2 border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all ease-in-out duration-300 px-3 py-2 bg-blue-500/20 flex gap-4 rounded-lg items-center justify-center"><FaJs size={40} className="text-yellow-400"/><div className="text-center">Javascript</div></div>
                <div className="h-auto w-full border-2 border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all ease-in-out duration-300 px-3 py-2 bg-blue-500/20 flex gap-4 rounded-lg items-center justify-center" ><FaReact size={40} className="text-blue-300"/><div className="text-center">React</div></div>
                <div className="h-auto w-full border-2 border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all ease-in-out duration-300 px-3 py-2 bg-blue-500/20 flex gap-4 rounded-lg items-center justify-center"><TbBrandFramerMotion size={40} className="text-purple-600"/><div className="text-center">Framer</div></div>
               <div className="h-auto w-full border-2 border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all ease-in-out duration-300 px-3 py-2 bg-blue-500/20 flex gap-4 rounded-lg items-center justify-center"> <RiTailwindCssFill size={40} className="text-blue-300"/><div className="text-center">Tailwind</div></div>
               </div>
               </div>
               </motion.div>





               <motion.div
               whileHover={{y:-3}}
               transition={{easeInOut, duration:0.3}}
               >
                 <div className="h-auto md:min-h-screen border-2 w-70 border-blue-500/20 lg:w-100 hover:border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)]  transition-all ease-in-out duration-400 bg-blue-800/10 rounded-lg">
                <div className="h-0.5 w-full border border-blue-700 px-4 py-10 text-center flex justify-center items-center rounded-lg">Backend</div>
               <div className="px-10 py-5 gap-8 flex justify-start items-start sm:items-center flex-col">
               <div className="h-auto w-full px-3 py-1 bg-blue-500/20 border-2 border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all ease-in-out duration-300  flex gap-4 rounded-lg items-center justify-center"> <FaNodeJs size={40} className="text-green-600 text-center"/><div className="text-center">Node.js</div></div>
                <div className="h-auto w-full border-2 border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all ease-in-out duration-300 px-3 py-2 bg-blue-500/20 flex gap-4 rounded-lg items-center justify-center"><RiNextjsFill size={40} className="text-white"/> <div className="text-center">Next.js</div></div>
                <div className="h-auto w-full border-2 border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all ease-in-out duration-300 px-3 py-2 bg-blue-500/20 flex gap-4 rounded-lg items-center justify-center"><DiMongodb size={40} className="text-green-400"/><div className="text-center">MongoDB</div></div>
               
         
               </div>
               </div>
               </motion.div>






             <motion.div
               whileHover={{y:-3}}
               transition={{easeInOut, duration:0.3}}
             >
                 <div className="h-auto md:min-h-screen border-2 w-70 lg:w-100  border-blue-500/20 hover:border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)]  transition-all ease-in-out duration-400 bg-blue-800/10 rounded-lg">
                <div className="h-0.5 w-full border border-blue-700 px-4 py-10 text-center flex justify-center items-center rounded-lg">Langauges and Tools</div>
               <div className="px-10 py-5 gap-8 flex justify-start items-start sm:items-center flex-col">
               <div className="h-auto w-full px-3 py-1 bg-blue-500/20 border-2 border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all ease-in-out duration-300  flex gap-4 rounded-lg items-center justify-center"> <FaJs size={40} className="text-yellow-400 text-center"/><div className="text-center">Javascript</div></div>
                <div className="h-auto w-full border-2 border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all ease-in-out duration-300 px-3 py-2 bg-blue-500/20 flex gap-4 rounded-lg items-center justify-center"><SiCplusplus size={40} className="text-blue-300"/> <div className="text-center">C++</div></div>
                 <div className="h-auto w-full border-2 border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all ease-in-out duration-300 px-3 py-2 bg-blue-500/20 flex gap-4 rounded-lg items-center justify-center"><FaPython size={40} className="text-blue-500"/> <div className="text-center">Python</div></div>
                                 <div className="h-auto w-full border-2 border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all ease-in-out duration-300 px-3 py-2 bg-blue-500/20 flex gap-4 rounded-lg items-center justify-center"><SiNetlify size={40} className="text-red-300"/> <div className="text-center">Netlify</div></div>         
                 <div className="h-auto w-full border-2 border-blue-700 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all ease-in-out duration-300 px-3 py-2 bg-blue-500/20 flex gap-4 rounded-lg items-center justify-center"><FaGithub size={40} className="text-grey-300"/> <div className="text-center">Github</div></div>
               </div>
               </div>
             </motion.div>

              </motion.div>

                 </div>

        </div>
        </section>
    )
}
export default Skills



 
                // <div className="border-2 border-blue-800 font-light shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center hover:text-orange-500 hover:shadow-orange-400 ease-in-out duration-400 cursor-pointer flex-col text-center "> <div><FaHtml5 size={40} /></div> <div className="mt-2"> HTML</div>   </div>
                //  <div className=" border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-blue-800 hover:shadow-blue-800 ease-in-out duration-400 cursor-pointer flex-col text-center"> <div><FaCss3 size={40} />  </div> <div className="mt-2"> CSS </div></div>
                //   <div className=" border-2 border-blue-800 shadow-2xl  shadow-blue-600/30  h-30 w-40 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-yellow-500 hover:shadow-yellow-400 ease-in-out duration-400 cursor-pointer flex-col text-center"><div>  <FaJs size={40} /></div> <div  className="mt-2"> JS </div></div>
                //    <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-blue-400 hover:shadow-blue-400 ease-in-out duration-400 cursor-pointer flex-col text-center"> <div> <FaReact size={40} /> </div> <div className="mt-2">REACT </div></div>
                //     <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-blue-100 hover:shadow-blue-100 ease-in-out duration-400 cursor-pointer flex-col text-center">  <TbBrandCpp size={40} /> </div>
                //      <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-cyan-500 hover:shadow-cyan-500 ease-in-out duration-400 cursor-pointer flex-col text-center">  <div><RiTailwindCssFill size={40} /></div> <div className="mt-2">Tailwind</div> </div>
                //        <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center font-light  hover:text-purple-700 hover:shadow-purple-700 ease-in-out duration-400 cursor-pointer flex-col text-center"><div><TbBrandFramerMotion  size={40}/></div><div className="mt-2">Framer</div></div>
                //            <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-gray-500 hover:shadow-gray-400 ease-in-out duration-400 cursor-pointer flex-col text-center"> <div><FaGithub size={40} /> </div> <div className="mt-2">GITHUB</div> </div>
                //                <div className="border-2 border-blue-800 shadow-2xl  shadow-blue-600/30 h-30 w-40 rounded-md md:w-80 flex justify-center items-center  font-light  hover:text-red-500 hover:shadow-red-700 ease-in-out duration-400 cursor-pointer flex-col text-center"><div> <SiNetlify size={40}/> </div> <div className="mt-2"> Netlify </div></div>