const Head = ({main2, desc}) => {

    // window.addEventListener()

return <div className="text-center my-[30px] flex flex-col gap-[20px]">
            <h2 className="text-5xl text-secondery font-bold text-center relative  ">{main2} </h2>
            <p className=" text-center text-text-secondry">{desc} </p>
        </div>
}

export default Head 