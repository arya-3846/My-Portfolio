import { useState } from "react";
import Navbar from "./Components/Navbar"
import StarsBackground from "./Starsbackground"
import "./index.css"; 
import Introanimation from "./Components/Introanimation";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Contact from "./Sections/Contact";
import Footer from  "./Sections/Footer"
import Certi from "./Sections/Certi"
function App(){
  const[introDone, setIntroDone]= useState(false);
  return(
    <>

    {!introDone && <Introanimation onFinish={()=> setIntroDone(true)} /> }

   {introDone && (
   <div >
   <StarsBackground/>
   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Projects/>
   <Certi/>
   <Contact/>
   <Footer/>
   
   </div>
   )}
   </>
  )
}
export default App