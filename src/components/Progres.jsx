const Progres = ( {name , progres ,Key ,icon  }) => {

    return <div 
            className="card-prog border-l-2 border-b-2 border-accent glow-animated duration-300 p-[30px] rounded-[30px] m-[20px]"
            
            key={Key}>
                <div className="flex justify-center items-center text-6xl">{icon}</div>
                <div className="Skill-Name">
                    <p className="text-[20px] font-extrabold">{name}</p>
                </div>
                <div className="prog-line-cont bg-secondary text-center rounded-[6px] w-full h-[15px] overflow-hidden m-[10px] ">
                    <div style={{width: progres}} className=" persent bg-accent h-full rounded-[5px]" />
                </div>

                <div>
                    <p className="text-[20px] font-extrabold">{progres}</p>
                </div>
        </div>
}

export default Progres