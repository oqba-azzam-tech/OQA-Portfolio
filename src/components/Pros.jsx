import Btn from "./Btn"


const Projs = ({name , linkpro , lang , icon , pic}) => {

    return<div className="overflow-hidden bg-secondary rounded-[40px] border-l-4 border-b border-accent hover:scale-[1.05] duration-300 ">

        <div className="proj-icon flex justify-center items-center  w-full h-[100px] overflow-hidden relative">
            <img src={pic} className="w-full grayscale-100 object-fill" alt="" />
        </div>
        

        <div className="proj-det p-[30px] ">

            <div className="flex justify-between items-center ">
                <h3 className="text-3xl font-semibold">{name}</h3>
                <h3 className="text-3xl">{icon}</h3>
            </div>

            <div className="flex gap-[5px] my-[15px] ">
                {lang.map((l) => <span title={l} className="lang-t duration-300 text-text-secondary text-xs px-3 py-1 bg-accent/20 rounded-full">{l}</span>)}
            </div>

             <Btn msg={"See Pro"} link={linkpro} className="hover:translate-1"/>
        </div>
    </div>
}

export default Projs