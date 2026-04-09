import "./ProductCard.css"
export default function ProductCard({ image_url, title, category, price_range }) {
    return (
        <><div>
    
                    <div className="card relative">
                        <div className="like absolute top-[10px] backdrop-blur-[80px] right-[10px] rounded-[50%] text-[#fff] w-[30px] h-[30px] flex justify-center items-center "><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z"/></svg></div>
                    <div className="card-img-container"><img className="card-img" src={image_url} /></div>
                    <div className="pl-2 pt-2 text-[14px] name">
                        <h2 className="font-[700] text-[#58595b] border-b title">{title}</h2>
                        <p className="text-[#58595b]">{title}</p>
                        {price_range?
                        <p className="price text-[#58595b] flex items-center"><svg className="icon" xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#58595b"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z"/></svg>{price_range.max}</p>
                         :null} 
                    </div>
                </div>

        </div>
        </>
    )
}