import { Children } from "react"
import Slider from "../Slider/Slider"
import "./Collections.css"

export default function Collections({children}){
     const latestDrops=[
        {image:"latestDrop-img1.png"},
        {image:"latestDrop-img2.png"},
        {image:"latestDrop-img3.png"},
    
      ]

    return(
        <>
        <div>
            <div className="flex justify-center p-6 font-bold text-[26px]">{children}</div>
              <div  className="relative collection"><Slider slides={latestDrops}/></div>
        </div>
        
        </>
    )
}