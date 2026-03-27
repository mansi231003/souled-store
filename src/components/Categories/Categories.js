import "./Categories.css"

export default function Categories({cards=[]}){
    return(
        <>
        <div className="w-full flex flex-col justify-center items-center">
            {/* <div className="flex justify-center p-6 font-bold text-[26px]">{children}</div> */}
            <div className="grid grid-cols-3 w-[80%] gap-3">
              
                {cards.map((item)=>(
                    <img src={item.img}/>
                ))}
            
            </div>
            </div>

        </>
    )
}