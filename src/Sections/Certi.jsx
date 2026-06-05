import { GrCertificate } from "react-icons/gr";

function Certi(){
    return(
      <section id="Certificates" className="py-15 min-h-screen px-5 ">
          <div className="text-2xl text-white w-full">
             
             <div>
              <div className="flex items-center justify-center font-bold text-blue-600 font-mono sm:text-3xl md:text-4xl py-10">
                Certfications 
              </div>
             <div className="flex justify-center items-center flex-wrap gap-10">
              
              <div className="px-10 flex gap-5 justify-center flex-wrap ">
                <div className="h-90 w-70 md:w-90 md:h-80 shrink-0 bg-blue-700/20 rounded-lg px-5 py-7 border-2 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] border-blue-500/20 hover:border-blue-700 transition-all ease-in-out duration-300"> 
                 <GrCertificate className="text-blue-400" /> <div className="font-bold font-mono py-2 text-blue-400">Cisco </div>
                <div className="font-medium text-blue-400">C++ Essentials 1</div>
                 <div className="text-sm py-2">Learned the fundamentals of C++ programming, including data types, control flow, functions, pointers, memory management, and object-oriented programming concepts.</div> 
                 <div className="text-sm "><button className="border border-blue-400 px-2 py-2 rounded-lg"><a href="https://www.linkedin.com/in/arya-pandey-b82634313/overlay/Certifications/2138308094/treasury/?profileId=ACoAAE-mTJIBYxhrHGQABRRgWXh2euE7k6LEBCk" target="_blank">View Certificate</a></button></div>
                 </div>
              </div>




              <div className="px-10 flex gap-5 justify-center flex-wrap  ">
                <div className="h-90 w-70 md:w-90 md:h-80 shrink-0 bg-blue-700/20 hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] rounded-lg px-5 py-7 border-2 border-blue-500/20 hover:border-blue-700 transition-all ease-in-out duration-300"> 
                 <GrCertificate className="text-blue-500" /> <div className="font-bold font-mono py-2 text-blue-500">Deloitte </div>
                <div className="font-medium text-blue-500 ">Data Analytics Simulation</div>
                 <div className="text-sm py-2 ">Gained hands-on experience in data analysis,data visualization, and business intelligence. Worked with real-world datasets to present findings through effective visualizations and reports.</div> 
                 <div className="text-sm "><button className="border border-blue-500 px-2 py-2 rounded-lg"><a href="https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_69c9ee179e540b401f31824b_1779952688673_completion_certificate.pdf" target="_blank">View Certificate</a></button></div>
                 </div>
             </div>




             
               
              </div>
              
              
             </div>
       


        </div>
      </section>
    )
}
export default Certi