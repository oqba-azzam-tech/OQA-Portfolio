import "../index.css"

const Header = () => {
  const LINKS = [
    { name: "My Story", link: "#Story" },
    { name: "Skills", link: "#Skills" },
    { name: "Projects", link: "#Projects" },
    { name: "Review", link: "#Review" },
    { name: "Say Hi", link: "#Hi" },
  ]

  return (
    <section className="Header sticky w-full top-0 z-[100] bg-body text-text-primary">
      <div className="center-cont flex justify-between items-center flex-wrap px-4 sm:px-6 md:px-8 py-3 sm:py-4">
        
        {/* Logo */}
        <div>
          <h1 className="flex">
            <span className="text-text-secondry font-bold text-[clamp(28px,6vw,45px)]">
              O
            </span>
            <span className="text-accent font-bold text-[clamp(28px,6vw,45px)]">
              AZ.
            </span>
          </h1>
        </div>
        
        {/* Navigation Links */}
        <div>
          <ul className="flex gap-[clamp(15px,4vw,30px)] flex-wrap justify-center">
            {LINKS.map((e, i) => (
              <li key={i}>
                <a 
                  href={e.link}
                  className="text-[clamp(14px,3.5vw,20px)] hover:text-accent transition-colors duration-300 whitespace-nowrap"
                >
                  {e.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Header