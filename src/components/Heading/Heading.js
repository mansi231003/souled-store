
import "./Heading.css"

export default function Heading({children}){
    

    return(
        <>
        <div>
            <div className="flex justify-center pb-8 pt-9 font-bold text-[26px]">{children}</div>
        </div>
        
        </>
    )
}