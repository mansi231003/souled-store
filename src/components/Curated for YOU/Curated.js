import "./Curated.css"

export default function Curated({images=[] }) {
    return (
        <>
            <div className="">
                <div className="curated-img-container grid grid-cols-4 gap-3">
                    {images.map((item,index)=>(
                    <div key={index} className="overflow-hidden" ><img className="curated-img" src={item.img}/></div>
                ))}
                
                </div>
            </div>
        </>
    )
}