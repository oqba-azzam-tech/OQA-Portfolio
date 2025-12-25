import Btn from "./Btn";

const Card = ({name , desc , photoLink , langUsed ,webSiteLink}) => {

return <div className="card duration-300 project-card shadow-2 bg-back-ground-1 rounded-lg overflow-hidden border border-gray-900 transition">
                    <div className="h-48 bg-primary-img relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src={photoLink} alt="no foto" className="img-grey pro-img" />
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="min-h-[180px]">
                          <h3 className="text-xl text-white font-bold mb-1">{name}</h3>
                          <div className="under-line  duration-300 w-[50px] h-0.5 bg-secondery mb-2 "></div>
                          <p className="text-gray-300 mb-4 font-light text-[20px]">{desc}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {langUsed.map((l) => <span title={l} className="lang-t shadow-2 cursor-pointer text-xs px-3 py-1 bg-primary-alpha  text-gray-50 rounded-full">{l}</span>)}
                        </div>
                        <Btn msg={"View Project"} link={webSiteLink}/>
                       
                    </div>
                </div>
 
}


export default Card;