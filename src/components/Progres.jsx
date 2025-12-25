const Progres = ( {name , progres ,Key ,icon  }) => {

    return <div 
            className="card-prog duration-300 bg-back-ground-1 text-text-secondry p-[30px] border-2 border-primary rounded-[8px] m-[20px]"
            key={Key}>
                <div className="flex justify-center items-center text-6xl">{icon}</div>
                <div className="">
                    <p className="text-[20px] font-extrabold">{name}</p>
                </div>
                <div className="prog-line-cont bg-text-secondry text-center rounded-[6px] w-full h-[15px] overflow-hidden m-[10px] ">
                    <div style={{width: progres}} className=" persent bg-primary h-full rounded-[5px]" />
                    </div>

                    <div>
                    <p className="text-[20px] font-extrabold">{progres}</p>
                    </div>
            </div>
}

export default Progres