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
            <div className="text-2xl text-white  w-full ">
             <div className="flex justify-center items-center py-5 px-5">
               <div className=""> <h1 className="text-4xl mb-5 text-blue-600 fborder-blue-700 font-bold">My Projects</h1></div>
             </div>
             <div id="project container all" className="flex justify-center items-center gap-10 flex-wrap px-4">

             <motion.div
             whileHover={{y:-3}} 
             transition={{easeInOut, duration:0.3}}
             >
              
                <div className="h-110 w-70 sm:w-80 border-2  border-blue-500/20  hover:border-blue-600 transition-all ease-in-out duration-400 hover:shadow-2xl/70 shadow-blue-800 rounded-lg overflow-hidden"><img src={Netflix} className="rounded-lg h-1/2 object-cover" alt="" /> <div className="text-sm mt-2 px-2 ">A nextflix clone built using HTML and CSS only. Just for practise it was my first project </div>
                 <div className=" h-10 w-full">
                   <div className="flex gap-2 items-start text-center mt-3 px-2 flex-col">

                  <div className="flex gap-2">                   
                       <div className="px-3 py-1 border rounded-full text-sm border-blue-700 text-blue-500">HTML</div>
                     <div className="px-3 py-1 rounded-full text-sm border border-blue-700 text-blue-500"> CSS</div>
                  </div>
                    <div className="h-0.5 w-full bg-white"></div>
                     <div className="flex px-3 gap-4 justify-center py-3 mb-10">
                      <button className="px-3 text-sm border-blue-600 border rounded-lg cursor-pointer py-1 text-center bg-blue-600">Code</button>
                      <a href="https://radiant-marzipan-34994c.netlify.app" className="text-center text-sm hover:text-blue-500 transition-all ease-in-out duration-150 border border-blue-600 px-2 py-2 rounded-lg" target="_blank">View project</a>
                     </div>
                   </div>
                </div>
                </div>
             </motion.div>









               <motion.div
                whileHover={{y:-3}} 
             transition={{easeInOut, duration:0.3}}
               >
                  <div className="h-110 w-70 sm:w-80 border-2  border-blue-500/20  hover:border-blue-600 transition-all ease-in-out duration-400 hover:shadow-2xl/70 shadow-blue-800 rounded-lg "><img src={Todo} className="rounded-lg h-1/2 w-full" alt="" />   <div className="rounded-md text-sm mt-2 px-2"> Just a Todo- list app where u can add tasks with date and on completion delete it</div>
                 <div className=" h-10 w-full mt-2">
                   <div className="flex gap-2 items-start text-center mt-3 px-2 flex-col">

                  <div className="flex gap-2">                   
                       <div className="px-4 py-1 border rounded-full text-sm border-blue-700 text-blue-500">HTML</div>
                     <div className="px-4 py-1 rounded-full text-sm border border-blue-700 text-blue-500"> CSS</div>
                     <div className="px-4 py-1 rounded-full text-sm border border-blue-700 text-blue-500"> JS</div>
                  </div>
                   <div className="h-0.5 w-full bg-white"></div>
                     <div className="flex px-3 gap-4 justify-center py-3 mb-10">
                     <button className="px-3 text-sm border-blue-600 border rounded-lg cursor-pointer py-1 text-center bg-blue-600">Code</button>
                      <a href="https://magenta-marshmallow-32a9a0.netlify.app/" className=" text-sm hover:text-blue-500 transition-all ease-in-out duration-150 border border-blue-600 px-3 py-2 rounded-lg" target="_blank">View project</a>
                     </div>
                   </div>
                </div>
                 </div>

               </motion.div>








                 <motion.div
                 whileHover={{y:-3}} 
             transition={{easeInOut, duration:0.3}}
                 >
                    <div className="h-110 w-70 sm:w-80 border-2  border-blue-500/20  hover:border-blue-600 transition-all ease-in-out duration-400 hover:shadow-2xl/70 shadow-blue-800 rounded-lg"><img src={Property} className="rounded-lg h-1/2 w-full" alt="" />  <div className="rounded-md text-sm mt-2 px-2"> A property investment website made with the help of Html and the Tailwind css only</div>
                   <div className=" h-10 w-full mt-2">
                   <div className="flex gap-2 items-start text-center mt-3 px-2 flex-col">

                  <div className="flex gap-2">                   
                       <div className="px-4 py-1 border rounded-full text-sm border-blue-700 text-blue-500">HTML</div>
                     <div className="px-4 py-1 rounded-full text-sm border border-blue-700 text-blue-500">JS</div>
                     <div className="px-4 py-1 rounded-full text-sm border border-blue-700 text-blue-500">Tailwind</div>
                  </div>
                     <div className="h-0.5 w-full bg-white"></div>
                     <div className="flex px-3 gap-4 justify-center py-3 mb-10">
                     <button className="px-3 text-sm border-blue-600 border rounded-lg cursor-pointer py-1 text-center bg-blue-600">Code</button>
                      <a href="https://beautiful-beignet-8e7e76.netlify.app/" className="text-sm hover:text-blue-500 transition-all ease-in-out duration-150 border border-blue-600 px-3 py-2 rounded-lg" target="_blank">View project</a>
                     </div>
                   </div>
                </div>
                    </div>
                 </motion.div>





              <motion.div
              whileHover={{y:-3}} 
             transition={{easeInOut, duration:0.3}}
              >
                

                    <div className="h-110 w-70 sm:w-80 border-2  border-blue-500/20  hover:border-blue-600 transition-all ease-in-out duration-400 hover:shadow-2xl/70 shadow-blue-800 rounded-lg"><img src={Portfolio} className="rounded-lg h-1/2 w-full " alt="" />  <div className="rounded-md text-sm mt-2 px-2"> A personal Portfolio website made using HTML, React, CSS, Tailwind, Framer Motion etc </div> 
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
                   <button className="px-3 text-sm border-blue-600 border rounded-lg cursor-pointer py-1 text-center bg-blue-600">Code</button>
                      <a href="https://my-portfolio-one-rho-56.vercel.app/" className="text-sm hover:text-blue-500 transition-all ease-in-out duration-150 border border-blue-600 px-3 py-2 rounded-lg " target="_blank">View Project</a>
                     </div>
                   </div>
                </div>
                    </div>
              </motion.div>
                   



               

             </div>
        </div>
        </motion.section>
    )
}
export default Projects