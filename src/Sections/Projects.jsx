import { easeInOut, motion } from "motion/react"
import Todo from "../assets/todo.png"
import Netflix from "../assets/Netflix.png"
import Property from "../assets/Property.png"
import Portfolio from "../assets/Portfolio.png"
import { FaGithub } from "react-icons/fa";
function Projects(){
    return(
        <motion.section 
        initial={{opacity:0 , y:-100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease:easeInOut}}
        viewport={{once:true}}
        id="projects" className="py-15 font-mono text-sm " >
            <div className="text-2xl text-white  w-full">
             <div className="flex justify-center items-center py-5 px-5">
               <div className=""> <h1 className="text-4xl mb-5 text-blue-600 fborder-blue-700 font-bold">My Projects</h1></div>
             </div>
             <div id="project container all" className="flex justify-center items-center gap-10 flex-wrap px-4">


                <div className="h-100 w-60 sm:w-75 border-2 hover:scale-105 border-blue-700 hover:border-blue-800 transition-all ease-in-out duration-400 hover:shadow-2xl shadow-blue-800 rounded-lg"><img src={Netflix} className="rounded-md h-1/2 object-cover" alt="" /> <div className="text-sm mt-2 px-2 ">A nextflix clone built using HTML and CSS only. Just for practise it was my first project </div>
                 <div className=" h-10 w-full">
                   <div className="flex gap-2 items-start text-center mt-3 px-2 flex-col">

                  <div className="flex gap-2">                   
                       <div className="px-4 py-1 border rounded-full text-sm border-blue-700 text-blue-500">HTML</div>
                     <div className="px-4 py-1 rounded-full text-sm border border-blue-700 text-blue-500"> CSS</div>
                  </div>
                    <div className="h-0.5 w-full bg-white"></div>
                     <div className="flex px-3 gap-4 justify-center py-3 mb-10">
                      <FaGithub/>
                      <a href="https://radiant-marzipan-34994c.netlify.app" className="text-sm hover:text-blue-500 transition-all ease-in-out duration-150" target="_blank">View project</a>
                     </div>
                   </div>
                </div>
                </div>









                 <div className="h-100 w-60 sm:w-75 border-2 hover:scale-105 border-blue-700 transition-all ease-in-out duration-400 hover:shadow-2xl shadow-blue-800 rounded-lg"><img src={Todo} className="h-1/2 w-full" alt="" />   <div className="rounded-md text-sm mt-2 px-2"> Just a Todo- list app where u can add tasks with date and on completion delete it</div>
                 <div className=" h-10 w-full mt-2">
                   <div className="flex gap-2 items-start text-center mt-3 px-2 flex-col">

                  <div className="flex gap-2">                   
                       <div className="px-4 py-1 border rounded-full text-sm border-blue-700 text-blue-500">HTML</div>
                     <div className="px-4 py-1 rounded-full text-sm border border-blue-700 text-blue-500"> CSS</div>
                     <div className="px-4 py-1 rounded-full text-sm border border-blue-700 text-blue-500"> JS</div>
                  </div>
                   <div className="h-0.5 w-full bg-white"></div>
                     <div className="flex px-3 gap-4 justify-center py-3 mb-10">
                      <FaGithub/>
                      <a href="https://magenta-marshmallow-32a9a0.netlify.app/" className="text-sm hover:text-blue-500 transition-all ease-in-out duration-150" target="_blank">View project</a>
                     </div>
                   </div>
                </div>
                 </div>









                   <div className="h-100 w-60 sm:w-75 border-2 hover:scale-105 border-blue-700 transition-all ease-in-out duration-400 hover:shadow-2xl shadow-blue-800 rounded-lg"><img src={Property} className="h-1/2 w-full" alt="" />  <div className="rounded-md text-sm mt-2 px-2"> A property investment website made with the help of Html and tailwind css only</div>
                   <div className=" h-10 w-full mt-2">
                   <div className="flex gap-2 items-start text-center mt-3 px-2 flex-col">

                  <div className="flex gap-2">                   
                       <div className="px-4 py-1 border rounded-full text-sm border-blue-700 text-blue-500">HTML</div>
                     <div className="px-4 py-1 rounded-full text-sm border border-blue-700 text-blue-500">JS</div>
                     <div className="px-4 py-1 rounded-full text-sm border border-blue-700 text-blue-500">Tailwind</div>
                  </div>
                     <div className="h-0.5 w-full bg-white"></div>
                     <div className="flex px-3 gap-4 justify-center py-3 mb-10">
                      <FaGithub/>
                      <a href="https://my-portfolio-one-rho-56.vercel.app/" className="text-sm hover:text-blue-500 transition-all ease-in-out duration-150" target="_blank">View project</a>
                     </div>
                   </div>
                </div>
                    </div>







                    <div className="h-100 w-60 sm:w-75 border-2 hover:scale-105 border-blue-700 transition-all ease-in-out duration-400 hover:shadow-2xl shadow-blue-800 rounded-lg"><img src={Portfolio} className="h-1/2 w-full" alt="" />  <div className="rounded-md text-sm mt-2 px-2"> A personal Portfolio website made using React,Tailwind,FramerMotion etc </div> 
                    <div className=" h-10 w-full mt-2">
                   <div className="flex gap-2 items-start text-center mt-3 px-2 flex-col">

                  <div className="flex gap-2">                   
                       <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 border rounded-full text-sm border-blue-700 text-blue-500">HTML</div>
                     <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-sm border border-blue-700 text-blue-500"> CSS</div>
                     <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-sm border border-blue-700 text-blue-500">React</div>
                      <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-sm border border-blue-700 text-blue-500">Framer</div>
                  </div>
                       <div className="h-0.5 w-full bg-white"></div>
                     <div className="flex px-3 gap-4 justify-center py-3 mb-10">
                      <FaGithub/>
                      <a className="text-sm hover:text-blue-500 transition-all ease-in-out duration-150" target="_blank">currently Viewing</a>
                     </div>
                   </div>
                </div>
                    </div>
                   



               

             </div>
        </div>
        </motion.section>
    )
}
export default Projects