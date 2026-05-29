import Avator from "../assets/Avator.webp"
import {Typewriter} from "react-simple-typewriter"
import {animate, easeInOut, motion} from "framer-motion"
import { Link } from "react-scroll"
function Home(){
    return(
       <section id="home" className="min-h-screen">
         <motion.div
        initial={{opacity:0, y:-60}} 
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
         className="text-2xl text-white min-h-screen w-full flex flex-col py-15 px-5 md:flex-row sm:justify-center font-mono">
            <div className="sm:mt-20 flex flex-col justify-center items-center " >
                <h1 className="font-bold text-3xl lg:text-6xl sm:mt-5 lg:mt-12 font-mono "><span className="text-blue-700 font-mono">HI, I AM</span> ARYA PANDEY✌️</h1> 
                <div className="text-sm sm:text-md md:text-xl">
                <p className="flex justify-center items-center mt-5 text-blue-500  ">
                    I turn complex ideas into seamless, high-impact web experiences by <br /> building modern, scalable and lightning fast web <br /> apps that  make a diffrence.
                </p>
             <div className="mt-6 mb-4 flex justify-center items-center text-sm sm:text-2xl font-semibold lg:text-4xl">
                 <h1>
                     
                       <span>
                       <motion.div
                       transition={{ease:easeInOut, duration:2}} 
                       className="h-auto w-auto px-5 bg-blue-700/10 py-2 rounded-lg ">
                        <span className="text-blue-700">I'm a </span>
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

                <motion.div
                
                className="hidden sm:flex gap-7 justify-center items-center ">


                    <motion.div whileHover={{y:-4}} smooth={true} duration={500}><Link to="projects" smooth={true} duration={500}> <button id="button" className="bg-blue-600 px-6 py-3 hover:cursor-pointer hover:shadow-2xl transition-all duration-500 ease-in-out rounded-xl mt-10 ">Projects</button></Link></motion.div>
                    <motion.div whileHover={{y:-4}} smooth={true} duration={500}><Link smooth={true} duration={500}><button id="button" className="border-2 px-6 py-3 hover:cursor-pointer hover:shadow-2xl transition-all duration-500 ease-in-out rounded-xl mt-10 hover:border-blue-600 hover:text-blue-600">Resume</button></Link></motion.div>
                </motion.div>
                    



                  </div> 
             </div>
        <motion.div 
        initial={{opacity:0, x:200}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.7, ease:easeInOut}}
        viewport={{once:true}}
        className="flex justify-center items-center ">
                 <img src={Avator} alt="" className="h-80 lg:h-170 md:h-120 sm:w-120 " />
         </motion.div>
              </motion.div>
       </section>
    )
}
export default Home