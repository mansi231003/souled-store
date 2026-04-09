import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function ProductPage() {

    // const products = [
    //     {
    //         "product_id": "1",
    //         "title": "Peanuts:Works Out",
    //         "price_range": { "min": "700", "max": "900" },
    //         "stock": "80",
    //         "image_url": "newArrival-img1.png",
    //         "number_of_variants": "3",
    //         "variant_options": ["size", "color"],
    //         "variant_values": [
    //             {
    //                 "size": {
    //                 "label": "Select Size",
    //                 "values": [
    //                         {
    //                             "1": { "label": "S", "key": "small" },
    //                             "2": { "label": "M", "key": "medium" },
    //                             "3": { "label": "L", "key": "large" }
    //                         }
    //                     ]
    //                 },
    //                 "color": {
    //                 "label": "Select Color",
    //                 "values": [
    //                         {
    //                             "1": { "label": "Red", "key": "red", "color_code": "#ff0000" },
    //                             "2": { "label": "Blue"," key": "blue", "color_code": "#0000ff" }
    //                         }
    //                     ]
    //                 }
    //             }
    //         ],
    //         "variants": [
    //             { "id": "1a", "size": "medium","color": "red", "price": "800", "image_url": "newArrival-img2.png", "stock": "20" },
    //             { "id": "1b", "size": "small", "color": "blue", "price": "850", "image_url": "newArrival-img3.png", "stock": "40" },
    //             { "id": "1c", "size": "large", "color": "blue", "price": "750", "image_url": "newArrival-img4.png", "stock": "20" }
    //         ]
    //     },

    //     {
    //         "product_id": "2",
    //         "title": "Casual T-Shirt",
    //         "price_range": { "min": null, "max": "500" },
    //         "stock": "120", // 50 + 70
    //         "image_url": "newArrival-img2.png",
    //         "number_of_variants": "2",
    //         "variant_options": ["size"],
    //         "variant_values": [
    //             {
    //                 "size": {
    //                     "label": "Select Size",
    //                     "values": [
    //                         {
    //                             "1": { "label": "M", "key": "medium" },
    //                             "2": { "label": "L", "key": "large" }
    //                         }
    //                     ]
    //                 }
    //             }
    //         ],
    //         "variants": [
    //             { "id": "2a", "size": "medium"," price": "500"," stock": "50" },
    //             { "id": "2b", "size": "large", "price": "500", "stock": "70" }
    //         ]
    //     },

    //     {
    //         "product_id": "3",
    //         "title": "Sports Hoodie",
    //         "price_range": { "min": "1200", "max": "1500" },
    //         "stock": "50", // 20 + 30
    //         "image_url": "newArrival-img3.png",
    //         "number_of_variants": "2",
    //         "variant_options": ["size", "color"],
    //         "variant_values": [
    //             {
    //                 "size": {
    //                     "label": "Select Size",
    //                     "values": [
    //                         {
    //                             "1": { "label": "S", "key": "small" },
    //                             "2": { "label": "M", "key": "medium" }
    //                         }
    //                     ]
    //                 },
    //                 "color": {
    //                 "    label": "Select Color",
    //                 "    values": [
    //                         {
    //                             "1": { "label": "Black"," key": "black", "color_code": "#000000" },
    //                             "2": { "label": "Grey", "key": "grey", "color_code": "#808080" }
    //                         }
    //                     ]
    //                 }
    //             }
    //         ],
    //         "variants": [
    //             { "id": "3a", "size": "small", "color": "black", "price": "1200", "image_url": "newArrival-img1.png", "stock": "20" },
    //             { "id": "3b", "size": "medium"," color": "grey", "price": "1500", "image_url": "newArrival-img2.png", "stock": "30" }
    //         ]
    //     },

    //     {
    //         "product_id": "4",
    //         "title": "Denim Jeans",
    //         "price_range": { "min": "1000", "max": "1300" },
    //         "stock": "40", // 15 + 25
    //         "image_url": "newArrival-img4.png",
    //         "number_of_variants": "2",
    //         "variant_options": ["size"],
    //         "variant_values": [
    //             {
    //                 "size": {
    //                     "label": "Select Size",
    //                     "values": [
    //                         {
    //                             "1": { "label": "30", "key": "30" },
    //                             "2": { "label": "32", "key": "32" }
    //                         }
    //                     ]
    //                 }
    //             }
    //         ],
    //         "variants": [
    //             { "id": "4a", "size": "30", "price": "1000", "stock": "15" },
    //             { "id": "4b", "size": "32", "price": "1300", "stock": "25" }
    //         ]
    //     },

    //     {
    //         "product_id": "5",
    //         "title": "Summer Shirt",
    //         "price_range": { "min": null, "max": "750" },
    //         "stock": "70", // 20 + 30
    //         "image_url": "newArrival-img5.png",
    //         "number_of_variants": "3",
    //         "variant_options": ["size", "color"],
    //         "variant_values": [
    //             {
    //                 "size": {
    //                     "label": "Select Size",
    //                     "values": [
    //                         {
    //                             "1": { "label": "S", "key": "small" },
    //                             "2": { "label": "M", "key": "medium" },
    //                             "3": { "label": "XL", "key": "xl" }
    //                         }
    //                     ]
    //                 },
    //                 "color": {
    //                     "label": "Select Color",
    //                     "values": [
    //                         {
    //                             "1": { "label": "Green", "key": "green", "color_code": "#00ff00" },
    //                             "2": { "label": "Yellow"," key": "yellow", "color_code": "#ffff00" }
    //                         }
    //                     ]
    //                 }
    //             }
    //         ],
    //         "variants": [
    //             { "id": "5a", "size": "small", "color": "green", "price": "750", "image_url": "newArrival-img1.png", "stock": "20" },
    //             { "id": "5b", "size": "medium"," color": "yellow", "price": "750", "image_url": "newArrival-img4.png", "stock": "30" },
    //             { "id": "5c", "size": "xl"," color": "yellow", "price": "750", "image_url": "newArrival-img3.png", "stock": "20" },
    //         ]
    //     }
    // ];

    return (
        <>
            <Navbar />
            <div className="pl-10">
                <div className="pt-[15px] pb-[15px] text-[12px] text-[#a7a9ac] gap-1 flex">Home /<span>T-Shirts /</span><span>The Souled Store /</span><span className="text-[#58595b]">Peanuts:Works Out</span></div>
                <div className="flex gap-4">
                    <div className="grid grid-cols-2 gap-2 w-[57%]">
                        <div><img src="newArrival-img1.png" /></div>
                        <div><img src="newArrival-img1.png" /></div>
                        <div><img src="newArrival-img1.png" /></div>
                        <div><img src="newArrival-img1.png" /></div>
                    </div>
                    <div className="pl-8 w-[40%]">
                        <div className="flex flex-col border-b pb-3">
                            <span className="font-[700] text-[25px] text-[#58595b] h-[32px]">Peanuts:Works Out</span><span className="text-[14px] font-[500] text-[#a7a9ac]">T-Shirts</span>
                        </div>
                        <div className="pt-5 font-[700] text-[20px] text-[#58595b]">$ 799</div>
                        <div className="text-[#888] text-[14px]">Price incl. of all taxes</div>
                        <div className="pt-3 pb-3 gap-2 flex font-[700] text-[16px] text-[#58595b]">Please select a size.<u className="text-[#117a7a] font-normal">SIZE CHART</u></div>
                        <div className="flex gap-2 pb-8">
                            <div className="rounded-[5px] text-[#58595b] border-[2px] border-[#ccc] flex justify-center items-center p-1 w-[45px]">XS</div>
                            <div className="rounded-[5px] text-[#58595b] border-[2px] border-[#ccc] flex justify-center items-center p-1 w-[45px]">S</div>
                            <div className="rounded-[5px] text-[#58595b] border-[2px] border-[#ccc] flex justify-center items-center p-1 w-[45px]">M</div>
                            <div className="rounded-[5px] text-[#58595b] border-[2px] border-[#ccc] flex justify-center items-center p-1 w-[45px]">XL</div>
                            <div className="rounded-[5px] text-[#58595b] border-[2px] border-[#ccc] flex justify-center items-center p-1 w-[45px]">XXL</div>
                        </div>
                        <div className="flex gap-3 items-center pb-3">
                            <div className="text-[#58595b] text-[14px]">Quantity</div>
                            <select className="border border-[#ccc] rounded-[5px] p-[4px] text-[15px]">
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                            </select>
                        </div>
                        <div className="flex gap-2">
                            <div className="bg-[#ec3d25] w-[229px] text-white pt-[8px] pb-[8px] pl-[18px] pr-[18px] flex justify-center items-center rounded-[3px] font-[700] text-[14px]">ADD TO CART</div>
                            <div className="flex justify-center items-center text-[14px] pt-[5px] pb-[5px] font-[400] text-[#148c8d] border border-[#148c8d] rounded-[2px] w-[147px] gap-[1px]"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#148c8d"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>ADD TO WISHLIST</div>
                        </div>
                        <div className="flex items-center gap-[4px] text-[#58595b] text-[22px] mt-[18px] mb-[18px]">
                            <div className="text-[#58595b] text-[14px] pr-4">Share</div>
                            <i class="fa-brands fa-whatsapp"></i>
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                        <div className="text-[15px] font-[700] text-[#282d3f]">Delivery Details</div>
                        <div className="border border-[] flex justify-between rounded-[6px] p-[6px] pl-[10px] pr-[10px] mt-[10px] mb-[14px]">
                            <input className="w-full outline-none text-[#58595b] font-[200] text-[15px]" placeholder="Enter Pincode" />
                            <div className="cursor-pointer text-[15px] text-[#148c8d] font-[700]">CHECK</div>
                        </div>
                        <div className=" flex shadow-[0px_1px_2px_rgba(0,0,0,0.2)] mb-[18px] p-[8px] gap-2">
                            <div className="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#58595b"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z" /></svg></div>
                            <p className="text-[13px] text-[#58595b]">This product is eligible for return or exchange under our 30-day return or exchange policy. No questions asked.</p>
                        </div>
                        <div className="border border-[rgba(0,0,0,0.125)] text-[#58595b]">
                            <div className="flex justify-between text-[16px] border-b font-[700] p-3">Product Details<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#58595b"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>
                            <div className="flex justify-between text-[16px] border-b font-[700] p-3">Product Description<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#58595b"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>
                            <div className="flex justify-between text-[16px] font-[700] p-3">Artist's Details<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#58595b"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}