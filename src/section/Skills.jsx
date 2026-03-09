import Head from "../components/head.sec.jsx";
import Progres from "../components/Progres.jsx";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiCplusplus , SiTailwindcss } from 'react-icons/si';
import SkillCard from "../components/skillCard.jsx";


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

    return <section className="My-Skills p-[30px] mb-[30px] w-full h-[90%] " id="Skills">
                <Head main2={"Skills"} desc={""}/>
        <div className="center-cont flex flex-wrap items-center justify-between">
 
            {mySkills.map((e , i)=> <SkillCard name={e.name} icon={e.icon}></SkillCard>)}

        </div>
    </section>
}

export default Skills