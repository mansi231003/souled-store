import "./Categories.css"
import { useNavigate } from "react-router-dom"

export default function Categories({cards=[],tag}){
     const navigate = useNavigate();

    return(
        <>
        <div className="w-full flex flex-col justify-center items-center">
            <div className="category-img grid grid-cols-3 w-[80%] gap-3">
              
                {cards.map((item,index)=>(
                    <img key={index}  onClick={() =>
                            navigate("/filter", { state: { tag } })} src={item.img}/>
                ))}
            
            </div>
            </div>

        </>
    )
}