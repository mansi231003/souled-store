
export default function ProductCard({ image, title, category, price }) {
    return (
        <><div>
    
                    <div className="card">
                    <div><img src={image} /></div>
                    <div className="pl-2 pt-2 text-[14px]">
                        <h2 className="font-[700] text-[#58595b] border-b">{title}</h2>
                        <p className="text-[#58595b]">{category}</p>
                        {price?
                        <p className="price text-[#58595b] flex items-center"><svg className="icon" xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#58595b"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z"/></svg>{price}</p>
                         :null} 
                    </div>
                </div>

        </div>
        </>
    )
}