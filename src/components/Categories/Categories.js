import "./Categories.css"

export default function Categories({cards=[]}){
    return(
        <>
        <div className="w-full flex flex-col justify-center items-center">
            <div className="category-img grid grid-cols-3 w-[80%] gap-3">
              
                {cards.map((item,index)=>(
                    <img key={index} src={item.img}/>
                ))}
            
            </div>
            </div>

        </>
    )
}