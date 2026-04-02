import { useState } from "react"
import ProductCard from "../Product card/ProductCard"
import "./CategorySection.css"

export default function CategorySection({ products, buttons}) {

    const [active,setActive]=useState("Trending");

    return (
        <>
            <div className="pb-5">
                <div className="p-2 pt-4 pb-4 flex gap-4 bg-white z-[9] overflow-x-auto scroll-smooth scroll-hide whitespace-nowrap">
                    {buttons.map((item, i) => (
                        <button onClick={()=>setActive(item)} key={i} className={`${active===item?"bg-black text-white":"bg-white text-[#58595b]"} text-[#58595b] h-[35px] border border-[#ddd] pt-[8px] pr-[14px] pl-[14px] pb-[8px] rounded-[15px] text-[14px] flex justify-center items-center whitespace-nowrap}`}>{item}</button>

                    ))}
                </div>
                <div className="category-images grid grid-cols-4 gap-4">
                    {
                        products.map((item, index) => (
                            <ProductCard key={index} {...item} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}