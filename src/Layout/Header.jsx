import "../index.css"
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiCplusplus , SiTailwindcss } from 'react-icons/si';

//Component
const Header = ( ) => {

const LINKS = [
  
      {
        name : "My Story" ,
        link : "#Story"
    },
      {
        name : "Skills" ,
        link : "#Skills"
    },
      {
        name : "Projects" ,
        link : "#Projects"
    },
     {
        name : "Review" ,
        link : "#Review"
    },
    {
        name : "Say Hi " ,
        link : "#Hi"
    },
] 
    return<section className="Header shadow-2 sticky bg-back-ground-1 w-full top-[0px] z-[100]  " > 
  
    <div className="center-cont flex justify-between items-center max-[520px]:flex-col flex-wrap max-[520px]:text-[14px] ">

      <div>

        <h1>
          <span className="text-text-secondry font-bold text-[40px]">
            O
          </span>
          <span className="text-secondery font-bold text-[40px]">
            AZ.
          </span>
        </h1>

      </div>
      
      <div>

        <ul className="flex gap-[20px]">
          {LINKS.map((e , i) =>  <li key={i} className="head-link duration-300 text-text-secondry cursor-pointer ">
            {/* <Btn msg={e.name} link={e.link}/> */}
             <a href={e.link}>{e.name}</a>
             </li>)}
        </ul>

      </div>
    </div>

    </section>
}

export default Header