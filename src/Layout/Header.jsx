import "../index.css"
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
    return<section className="Header sticky w-full top-[0px] z-[100] bg-body text-text-primary" > 
  
    <div className="center-cont flex justify-between items-center flex-wrap text-[20px]">

      <div>

        <h1>
          <span className="text-text-secondry font-bold text-[45px]">
            O
          </span>
          <span className="text-accent font-bold text-[45px]">
            AZ.
          </span>
        </h1>

      </div>
      
      <div>

        <ul className="flex gap-[30px] ">
          {LINKS.map((e , i) =>  <li key={i} className="">
            
             <a href={e.link}>{e.name}</a>
             </li>)}
        </ul>

      </div>
    </div>

    </section>
}

export default Header