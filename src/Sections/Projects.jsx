import { easeInOut, motion } from "motion/react"
import Todo from "../assets/todo.png"
import Netflix from "../assets/Netflix.png"
import Property from "../assets/Property.png"
import Portfolio from "../assets/Portfolio.png"

function Projects(){
    return(
        <motion.section 
        initial={{opacity:0 , y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease:easeInOut}}
        viewport={{once:true}}
        id="projects" className="py-15 font-mono " >
            <div className="text-2xl text-white  w-full">
             <div className="flex justify-center items-center py-5 px-5">
               <div className=""> <h1 className="text-4xl mb-5 text-blue-600 fborder-blue-700 font-bold">My Projects</h1></div>
             </div>
             <div id="project container all" className="flex justify-center items-center gap-10 flex-wrap px-4">


                <div className="h-80 w-60 sm:w-75 border-2 hover:scale-110 border-blue-700 hover:border-blue-800 transition-all ease-in-out duration-400 hover:shadow-2xl shadow-blue-800 rounded-lg"><img src={Netflix} className="rounded-md h-1/2 object-cover" alt="" /> <div className="text-sm mt-2 px-2 ">A nextflix clone built using HTML and CSS only </div></div>
                 <div className="h-80 w-60 sm:w-75 border-2 hover:scale-110 border-blue-700 transition-all ease-in-out duration-400 hover:shadow-2xl shadow-blue-800 rounded-lg"><img src={Todo} className="h-1/2 w-full" alt="" />   <div className="rounded-md text-sm mt-2 px-2"> Just a Todo- list app where u can add tasks with date and on completion delete it</div></div>
                   <div className="h-80 w-60 sm:w-75 border-2 hover:scale-110 border-blue-700 transition-all ease-in-out duration-400 hover:shadow-2xl shadow-blue-800 rounded-lg"><img src={Property} className="h-1/2 w-full" alt="" />  <div className="rounded-md text-sm mt-2 px-2"> A property investment website made with Html and tailwind css only</div> </div>
                    <div className="h-80 w-60 sm:w-75 border-2 hover:scale-110 border-blue-700 transition-all ease-in-out duration-400 hover:shadow-2xl shadow-blue-800 rounded-lg"><img src={Portfolio} className="h-1/2 w-full" alt="" />  <div className="rounded-md text-sm mt-2 px-2"> A personal Portfolio website made using React,Tailwind,FramerMotion etc </div> </div>
                   



               

             </div>
        </div>
        </motion.section>
    )
}
export default Projects