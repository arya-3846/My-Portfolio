import { useRef, useState } from "react"
import {easeInOut, motion, scale} from "framer-motion"
import emailjs from "@emailjs/browser"
import Astra from "../assets/Astra.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

function Contact(){  
      const formRef = useRef();
      const [issending, setIsSending] = useState(false);
     console.log("ENV:", import.meta.env);

       const sendEmail =(e)=>{
              e.preventDefault();

              setIsSending(true);

              emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                  formRef.current,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
              )
              .then(
                ()=>{
                  alert("Email Sent Succesfully");
                  formRef.current.reset();
                  setIsSending(false)

                },
                (error)=>{
                  alert("failed to send Email");
                  console.error(error);
                  setIsSending(false)
                }
              )
       }

    return(
      <section id="contact" className="py-15 font-mono text-white">
            
           <motion.div
           initial={{opacity:0, y:-30}}
           whileInView={{opacity:1, y:0}}
           transition={{ease:easeInOut, duration:0.4}}
           viewport={{once:true}}
           >
             <div className="flex flex-col gap-3 justify-center items-center">
               <div className="text-blue-600 text-3xl sm:text-4xl font-semibold px-2 ">
                 Let's Get In touch 
               </div>
               <div className="px-6">Tell me something regarding yourself or Just drop a Helloww</div>
            </div>
                   
              <div className="flex flex-col md:flex-row justify-center items-center px-3 py-6">
               <div>
                   <img src={Astra} className="md:h-120 h-80 animate-bounce [animation-duration:2s]" alt="" />
                    
               </div>
               
                   
                 <div className="w-full md:w-2/3 border-2 h-auto border-blue-500/20 hover:border-blue-700 rounded-lg hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] bg-blue-500/5 transition-all duration-300 ease-in-out h-115 xl:h-112 px-3 ">
                    <div className="flex justify-center items-center py-10 text-xl">Contact Me</div>
                     
                <form action="" ref={formRef} onSubmit={sendEmail}>
                    <div className="flex justify-start flex-col xl:flex-row xl:justify-between gap-5 md:px-5 lg:px-10  ">
                    <input type="text" name="from_name" required placeholder="Your Name" className="border-blue-500/20 border-2 px-3 py-2 xl:w-1/2 focus:border-blue-800 outline-none rounded-lg" />
                    <input type="email" name="from_email" required placeholder="Your Email" className="border-blue-500/20 border-2 px-3 xl:w-1/2 py-2 focus:border-blue-800 outline-none rounded-lg" />
                  </div>
                    
                    <div className="flex justify-start flex-col  gap-5 md:px-5 lg:px-10 mt-6">
                      <textarea name="message" className="border-2 border-blue-500/20 px-3 py-2 focus:border-blue-800 outline-none rounded-lg  " rows={5} placeholder="Describe"></textarea>
                   <div className="flex flex-col items-center justify-center">
                      <button
                        type="submit"
                        disabled={issending}
                         className="bg-blue-700 w-50 hover:w-full transition-all duration-300 ease-in-out py-2 px-6 rounded-lg cursor-pointer"
                        >
                        {issending ? "Sending..." : "Send Message"}
                         </button>
                         <div className="flex justify-center items-center gap-5 sm:justify-start mt-5 ">
                 <motion.div whileHover={{y:-5}} transition={{ease:easeInOut, duration:0.3}} ><a href="https://github.com/arya-3846" target="_blank"><div   className="border-2 border-blue-500/20 hover:border-blue-600 transtion-all duration-300 ease-in-out px-2 py-2 rounded-full "><FaGithub size={20}/></div></a></motion.div>
                 <motion.div whileHover={{y:-5}} transition={{ease:easeInOut, duration:0.3}}> <a href="https://www.linkedin.com/in/arya-pandey-b82634313" target="_blank"><div  className="border-2 border-blue-500/20 hover:border-blue-600 transtion-all duration-300 ease-in-out px-2 py-2 rounded-full "><FaLinkedin size={20}/></div></a></motion.div>
                 <motion.div whileHover={{y:-5}} transition={{ease:easeInOut, duration:0.3}}> <a href="https://x.com/aryape3846" target="_blank"><div  className="border-2 border-blue-500/20 hover:border-blue-600 transtion-all duration-300 ease-in-out px-2 py-2 rounded-full "><FaXTwitter size={20}/></div></a></motion.div>
                 <motion.div whileHover={{y:-5}} transition={{ease:easeInOut, duration:0.3}}><a href="mailto:aryape3846@gmail.com" target="_blank"> <div  className="border-2 border-blue-500/20 hover:border-blue-600 transtion-all duration-300 ease-in-out px-2 py-2 rounded-full "><MdAlternateEmail size={20}/></div></a></motion.div>
                </div>
                   </div>
                    </div>
                </form>
                

                    
                 </div>
               </div>     
           </motion.div>
             


      </section>
      
    )
}
export default Contact