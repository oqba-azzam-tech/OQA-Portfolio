const Head = ({main2, desc}) => {

    // window.addEventListener()

return <div className=" mx-[100px]  flex flex-col justify-center gap-[20px] max-w-[1000px] relative">
            <h2 className="text-5xl text-secondery font-bold ">{main2} </h2>
            <p className=" text-center text-text-secondry">{desc} </p>

            <div className=" absolute h-[50px] bg-accent w-[5px] top-[0] left-[-20px]"></div>
        </div>
}

export default Head 