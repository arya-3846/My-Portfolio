import photo from "../assets/p.jpg"
import { easeInOut, motion } from "motion/react"

function About(){
    return(
       <section id="about" className="font-mono mt-8 min-h-screen w-full ">
        <motion.div
        initial={{opacity:0, y:-60}} 
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease:easeInOut}}
        viewport={{once:true}}
        className="flex justify-center items-center flex-col md:flex-row ">
          
           <motion.div 
           initial={{opacity:0, x:-200,}}
           whileInView={{opacity:1, x:10, x:0}}
           transition={{duration:1, ease:easeInOut}}
           viewport={{once:true}}
           >
            <img src={photo} alt="" className="h-40 sm:h-50 md:h-60 ml-3 rounded-full shadow-2xl shadow-blue-700 object-cover" />
          </motion.div>

        <motion.div 
        className="flex flex-col gap-4 ">
           <div className="text-white flex justify-center items-center flex-col px-2 py-13">
          <p className="text-white mt-3 font-semibold text-2xl md:text-5xl py-1">I'm Arya👀 </p>
          <p className="text-blue-700 shadow-blue-900 font-semibold text-lg md:text-2xl animate-pulse">Web Developer 🧑‍🚀</p>
          <p className="text-sm mt-4 sm:text-md lg:text-xl px-4">I build scalable, modern applications with a strong focus on <br /> clean architecture, delightful UX, and performance. <br /> <p/>
          <p className="mt-2">My toolkit spans HTML, CSS, Javascript, React, Tailwind CSS,<br /> and FastAPI—bringing ideas to life from concept to production with <br /> robust APIs and smooth interfaces.</p></p>
         </div>

       <div className="flex flex-col gap-2 justify-center items-center flex-wrap text-white ">
        
        <motion.div  
          whileHover={{y:-4}}
         className="h-15 w-50 border bg-transparent border-blue-700 shadow-2xl  rounded-lg px-3 py-4 text-sm text-center align-middle sm:w-70 sm:text-md"> <span>Pursuing- B.Tech CSE 2024-28</span> <span></span>  </motion.div>
 <div className="flex flex-col sm:flex-row gap-3">
            <motion.div
               whileHover={{y:-4}}
             className="h-15 w-50 border bg-transparent e border-blue-700 shadow-2xl  rounded-lg px-3 py-5 text-sm"> <span>Senior Secondary</span> 83.4%  </motion.div>
        <motion.div 
         whileHover={{y:-4}}
        className="h-15 w-50 border bg-transparent  border-blue-700 shadow-2xl  rounded-lg px-3 py-5 text-sm"> <span>Higher Secondary</span> 82.4% </motion.div>
          </div>
       </div>


     

        
        </motion.div>
        </motion.div>
         <motion.div
         initial={{opacity:0, y:-60}} 
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease:easeInOut}}
        viewport={{once:true}}
          className="flex  sm:flex-row justify-center items-center flex-wrap gap-5 md:gap-10 xl:gap-30 mt-9 text-white text-2xl">
           <motion.div whileHover={{y:-10}} className="h-30 w-50 border-2 lg:w-70 text-center flex justify-center items-center border-blue-700 shadow-2xl shadow-blue-700 animate-pulse rounded-lg ">6+ certifications</motion.div>
        <motion.div whileHover={{y:-10}} className="h-30 w-50 border-2 lg:w-70 text-center flex justify-center items-center border-blue-700 shadow-2xl shadow-blue-700 animate-pulse rounded-lg">6+ Projects</motion.div>
        <motion.div whileHover={{y:-10}} className="h-30 w-50 border-2 lg:w-70 text-center flex justify-center items-center border-blue-700 shadow-2xl shadow-blue-700 animate-pulse rounded-lg">Endless Thoughts</motion.div>
      </motion.div>
       </section>
    )
}
export default About