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
            name: "Tailwind",
            progres : "70%",
            icon :  <SiTailwindcss />
        },
        {
            name: "C++",
            progres : "70%",
            icon : <SiCplusplus />
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
        
        
    ]

    return <section className="My-Skills p-[30px] mb-[30px] w-full h-[90%] " id="Skills">
                <Head main2={"Skills"} desc={""}/>
        <div className="center-cont grid gap-[15px] grid-cols-1  min-[670px]:gap-[10] min-[670px]:grid-cols-2 min-[1000px]:grid-cols-3">
 
            {mySkills.map((e , i)=> <Progres name={e.name} progres={e.progres} icon={e.icon} key={i}/>)}

        </div>
    </section>
}

export default Skills