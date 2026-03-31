import Head from "../components/head.sec.jsx";
import Progres from "../components/Progres.jsx";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiCplusplus , SiTailwindcss } from 'react-icons/si';

const Skills = () => { 

   

    const mySkills = [
        {
            name: "HTML",
            progres : "90%",
            icon : <FaHtml5/>
        },
        {
            name: "CSS",
            progres : "80%",
            icon : <FaCss3Alt/>
        },
        {
            name: "Java Script",
            progres : "60%",
            icon : <FaJs/>
        }, 
        {
            name: "React",
            progres : "50%",
            icon : <FaReact/>
        },
        {
            name: "Tailwind",
            progres : "70%",
            icon :  <SiTailwindcss />
        },
        {
            name: "C++",
            progres : "70%",
            icon : <SiCplusplus />
        }, 
    ]

    return <section className="My-Skills p-[30px] w-full h-[90%] bg-body " id="Skills">
                <Head main2={"Skills"} desc={""}/>
        <div className="center-cont flex flex-wrap gap-[10px]  items-center justify-between">
 
            {mySkills.map((e , i)=> <div key={i} className="skill-card bg-secondary rounded-[10px] p-[20px] min-w-[150px] ">
                <div className="flex flex-col justify-center items-center gap-[10px]">
                    <div className="text-[50px] hover:text-accent duration-300 ">
                    {e.icon}
                    </div>
                    <h3>{e.name}</h3>
                </div>
                
            </div>)}
           
            
        </div>
    </section>
}

export default Skills