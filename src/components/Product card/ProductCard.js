

export default function ProductCard({ image, title, category, price }) {
    return (
        <><div>
    
                    <div className="card pr-3 w-[23%]">
                    <div><img src={image} /></div>
                    <div className="pl-2">
                        <h2 className="font-[700] text-[#58595b] border-b">{title}</h2>
                        <p className="text-[#58595b]">{category}</p>
                        <p className="text-[#58595b]">{price}</p>
                    </div>
                </div>



        </div>
        </>
    )
}