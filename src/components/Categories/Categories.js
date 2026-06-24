import "./Categories.css"
import { useNavigate } from "react-router-dom"

export default function Categories({cards=[],tag}){
     const navigate = useNavigate();

    return(
        <>
        <div className="w-full flex flex-col justify-center items-center">
            <div className="category-img grid grid-cols-3 cursor-pointer w-[80%] gap-3">
              
                {cards.map((item,index)=>(
                    <img key={index} alt="filterImg" onClick={() => navigate(`/filter/${tag}`)} src={item.img}/>
                ))}
            
            </div>
            </div>

        </>
    )
}