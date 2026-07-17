import "./Heading.css"
// import { useContext } from "react"
// import UserContext from "../../UserContext"

export default function Heading({children}){
    // const user=useContext(UserContext);

    return(
        <>
        <div>
            {/* <h1>{user.name}</h1> */}
            {/* <h1>{user.age}</h1> */}
            <div className="flex justify-center pb-8 pt-9 font-bold text-[26px]">{children}</div>
        </div>
        
        </>
    )
}