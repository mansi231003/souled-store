import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";

export default function AddToCart() {
    const cartItems = useSelector(state => state.cart.items);
   const cartTotal = cartItems.reduce((total, item) => {
        return total + Number(item.price) * item.quantity;
    }, 0);

const totalProducts = cartItems.length;
    return (
        <>
            <Navbar />
            <div>
                <div className="flex justify-center font-[700] text-[14px] text-[#58595b] p-[10px] mt-[6px] gap-2 border-b border-b-[#eee]">
                    <div className="text-[#117a7a]">MY BAG</div>
                    <div>- - - - - - - - - - -</div>
                    <div>ADDRESS</div>
                    <div>- - - - - - - - - - -</div>
                    <div>PAYMENT</div>
                </div>
  {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                      )
                    :(
                <div className="flex p-5 justify-center gap-4" >
                    
                    {cartItems.length > 0 && (
                            <div className="border border-[#eee] w-[58%] flex flex-col items-center h-max" >
                                <div className="flex justify-between border-b-[1.5px] border-b-[#eee] items-center p-4 w-full">
                                    <div className="flex text-[13px] font-[700] gap-3">
                                        <div className="bg-[#168D8F] w-[19px] h-[19px] rounded-[2px] flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg></div>
                                        <div >{totalProducts}/{totalProducts} ITEM{totalProducts > 1 ? "S" : ""} SELECTED</div>
                                        <div className="text-[#117a7a]">(${cartTotal})</div>
                                    </div>
                                    <div><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#148c8d"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg></div>
                                </div>

{
                        cartItems.map((item, index) => (
                                <div key={index} className="w-full flex flex-col items-center border-b border-b-[#ccc]">

                                <div className="flex p-3 justify-between pb-0 w-full">
                                    <div className="flex justify-between gap-2">
                                        <div className="bg-[#168D8F] w-[19px] h-[19px] rounded-[2px] flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg></div>
                                        <div className="w-[170px] rounded-[6px]"><img className="rounded-[6px]" src={item.image} /></div>
                                        <div className="text-[14px] flex flex-col gap-2">
                                            <div className="font-[600]">{item.title}</div>
                                            <div className="text-[#a7a9ac] ">{item.title}</div>
                                            <div className="flex gap-2">
                                                <div className="font-[700] text-[13px] border border-[#e3e3e3] pl-2 rounded-[4px] text-[#58595b] w-[120px] h-[35px] flex justify-between items-center">Size:{item.size} <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#58595b"><path d="M480-360 280-560h400L480-360Z" /></svg></div>
                                                <div className="font-[700] text-[13px] border border-[#e3e3e3] pl-2 rounded-[4px] text-[#58595b] w-[120px] h-[35px] flex justify-between items-center">Qty:{item.quantity} <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#58595b"><path d="M480-360 280-560h400L480-360Z" /></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-[13px] flex justify-end font-[700]">${item.price}</div>
                                        <div className="text-[rgb(88,89,91)] font-[700] text-[13px]">MRP incl. of all taxes</div>
                                    </div>
                                </div>
                                <div className="flex w-[91%] justify-end gap-3 text-[#58595b] text-[12px] font-[700] border-t border-t-[#eee] p-4">
                                    <div className="rounded-[12px] border border-[#e3e3e3] pl-[33px] pr-[33px] pt-[8px] pb-[8px]">REMOVE</div>
                                    <div className="rounded-[12px] border border-[#e3e3e3] pl-[33px] pr-[33px] pt-[8px] pb-[8px]">MOVE TO WISHLIST</div>
                                </div>
                            </div>
                        ))
                    }
                            </div>
                    )}
                    <div className="w-[29%] flex flex-col gap-3">
                        <div className="border border-[rgba(0,0,0,0.15)]">
                            <div className="flex justify-center items-center text-[16.5px] h-[45px] font-[600] bg-[linear-gradient(90deg,_#f4e9fd,_#d8c0e9,_#d6f1fe,_#f2f1fe,_#d9c1ea,_#f8def4)] ">YOU ARE MISSING OUT ON!</div>
                            <div className="flex justify-between p-3 items-center border-dashed border-b border-b-[#dfdfdf]">
                                <div className="font-[500] text-[14px] w-[66%]">Save an additional $95 by adding membership to your cart</div>
                                <div className="rounded-[4px] text-[13px] w-[63px] h-[28px] flex justify-center items-center border border-[rgba(0,0,0,0.15)]">ADD</div>
                            </div>
                            <div className="p-3 pb-2 text-[12px]">
                                <div className=" text-[#787878]">Free shipping on all orders</div>
                                <div className="font-[500] flex items-center">View all benefits<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>
                            </div>
                        </div>
                        <div className="border border-[rgba(0,0,0,0.15)]">
                            <div className="flex text-[14px] font-[640] justify-between p-2 border-b border-b-[rgba(0,0,0,0.15)]"><div className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#58595b"><path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM513-160l286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Z" /></svg>Apply Coupon</div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>
                            <div className="flex text-[14px] font-[640] justify-between p-2 border-b border-b-[rgba(0,0,0,0.15)]"><div className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#58595b"><path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM513-160l286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Zm220 160Z" /></svg>Gift Voucher</div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>
                            <div className="flex text-[14px] font-[640] justify-between p-2 border-b border-b-[rgba(0,0,0,0.15)]"><div className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#58595b"><path d="M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm371.5-748.5Q520-817 520-800t11.5 28.5Q543-760 560-760t28.5-11.5Q600-783 600-800t-11.5-28.5Q577-840 560-840t-28.5 11.5ZM360-800q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z" /></svg>Gift Wrap</div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>
                            <div className="flex text-[14px] font-[640] justify-between p-2"><div className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#58595b"><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" /></svg>TSS Money/TSS Points</div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></div>
                        </div>
                        <div className="text-[#a7a9ac] text-[15px] pt-2 pb-2">BILLING DETAILS</div>
                        <div className="border border-[rgba(0,0,0,0.15)]">
                            <div className="border-b border-b-[rgba(0,0,0,0.15)] p-2 flex justify-between text-[#787878] text-[14px]">
                                <div className="">Cart Total<span className="text-[12px]">  (Incl. all taxes)</span></div>
                                <div className="font-[700]">$1299.00</div>
                            </div>
                            <div className="p-2 border-b border-b-[rgba(0,0,0,0.15)] flex justify-between text-[#787878] text-[14.5px]">
                                <div>Shipping Charges</div>
                                <div>Free<strike>$50.00</strike></div>
                            </div>
                            <div className="p-3 flex justify-between text-[14px]">
                                <div className="text-[#787878] font-[700]">Total Amount<span className="font-[400]">(Incl. of GST)</span></div>
                                <div className="font-[700]">${cartTotal.toFixed(2)}</div>
                            </div>
                        </div>
                        <div className="text-white bg-[#168D8F] font-[700] flex justify-center items-center pt-[14px] pb-[14px] pl-[20px] pr-[20px] rounded-[4px] text-[15px]">PLACE ORDER</div>
                    </div>
                </div>
                    )}
            </div>
            <Footer />
        </>
    )
}