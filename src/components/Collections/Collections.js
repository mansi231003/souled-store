import Slider from "../Slider/Slider"
import "./Collections.css"

export default function Collections({children}){
    

    return(
        <>
        <div>
            <div className="flex justify-center pb-8 pt-9 font-bold text-[26px]">{children}</div>
              {/* <div  className="relative collection"><Slider slides={latestDrops}/></div> */}
        </div>
        
        </>
    )
}