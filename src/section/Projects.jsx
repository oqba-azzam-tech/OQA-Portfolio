import Card from "../components/Card.jsx";
import Head from "../components/head.sec.jsx";
import Projs from "../components/Pros.jsx";
import pic1 from "../assets/pro1.png"
import pic2 from "../assets/pro2.png"
import pic3 from "../assets/pro4.png"
import { FaBuilding, FaLaptopCode } from "react-icons/fa";
import { PiFilmSlateBold } from "react-icons/pi";

const Projects = () => {
    const PROJECTS = [
        {
            name : "Anime" , 
            icons :<PiFilmSlateBold />,
            photo: pic3,
            desc :"Stream your favorite anime for free in HD and different resolutions." ,
            proLink : "https://oqa-anime-3mic.onrender.com",
            langUse : ["React" , "Tailwind CSS" , "Responsive"] 
        },
        {
            name : "EcoBuild" , 
            icons :<FaBuilding />,
            photo: pic1,
            desc :"EcoBuild specializes in eco-friendly construction solutions that minimize environmental impact while maximizing efficiency and beauty." ,
            proLink : "https://eco-build-2.onrender.com",
            langUse : ["HTMl" , "CSS" , "Responsive"] 
        },
        {
            name : "Zen Digital" , 
            icons : <FaLaptopCode />,
            photo: pic2,
            desc :"We create stunning websites and digital experiences that help businesses grow and succeed in the modern world.",
            proLink : "https://zen-digital-uzz8.onrender.com",
             langUse : ["HTML" , "Tailwind CSS" , "JS" ,"Responsive" ]
        },
    ]


    return <section className="Projects  w-full h-[80%] " id="Projects">
        <Head main={"MY "} main2={"Projects"} desc={"A selection of my recent work showcasing my design and development skills."}/>
        <div className="center-cont">
             <div className="grid grid-cols-1  min-[670px]:gap-[10] min-[670px]:grid-cols-2 min-[1000px]:grid-cols-3 gap-[30px]">
                {
                    PROJECTS.map( (e , i) => <Projs pic={e.photo} icon={e.icons} name={e.name} lang={e.langUse} linkpro={e.proLink} key={i} />)
                }                
            </div>
        </div>

    </section>
}

export default Projects