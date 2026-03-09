
const SkillCard = ({name , icon}) => {

    return <div className="card">
        <div className="text-accent text-[30px]">
            {icon}
        </div>
        <h2 className="z-10">{name}</h2>
        
    </div>
}

export default SkillCard