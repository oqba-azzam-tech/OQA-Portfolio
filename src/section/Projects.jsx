import Card from "../components/Card.jsx";
import Head from "../components/head.sec.jsx";
import projectPhoto from "../assets/pro1.png";
import projectPhoto2 from "../assets/pro2.png";
import projectPhoto3 from "../assets/pro3.png";


const Projects = () => {
    const PROJECTS = [
        {
            name : "EcoBuild" , 
            photos : `${projectPhoto}`,
            desc :"EcoBuild specializes in eco-friendly construction solutions that minimize environmental impact while maximizing efficiency and beauty." ,
            proLink : "https://eco-build-2.onrender.com",
            langUse : ["HTMl" , "CSS" , "Responsive"] 
        },
        {
            name : "Zen Digital" , 
            photos : `${projectPhoto2}`,
            desc :"We create stunning websites and digital experiences that help businesses grow and succeed in the modern world.",
            proLink : "https://zen-digital-uzz8.onrender.com",
             langUse : ["HTML" , "Tailwind CSS" , "JS" ,"Responsive" ]
        },
        {
            name : "Style Shop" , 
            photos : `${projectPhoto3}`,
            desc :"Discover the latest trends in fashion with our exclusive summer collection",
            proLink : "https://ousus-v1-x1-frontend-course.onrender.com/projects/Zen#",
             langUse : ["HTMl" , "CSS" ]
        },

    ]


    return <section className="Projects  w-full h-[80%] " id="Projects">
        <Head main={"MY "} main2={"Projects"} desc={"A selection of my recent work showcasing my design and development skills."}/>
        <div className="center-cont">
            <div className="grid grid-cols-1  min-[670px]:gap-[10] min-[670px]:grid-cols-2 min-[1000px]:grid-cols-3 gap-[30px]">
                {
                    PROJECTS.map( (e , i) => <Card name={e.name} desc={e.desc} langUsed={e.langUse} photoLink={e.photos} webSiteLink={e.proLink}  key={i} />)
                }                
            </div>
        </div>

    </section>
}

export default Projects