import "./Curated.css"

export default function Curated({images=[] }) {
    return (
        <>
            <div className="">
                <div className="curated-images grid grid-cols-4 gap-3">
                    {images.map((item)=>(
                    <div><img src={item.img}/></div>
                ))}
                
                </div>
            </div>
        </>
    )
}