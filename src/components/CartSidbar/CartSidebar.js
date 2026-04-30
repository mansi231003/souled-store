import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { removeFromCart, updateQuantity, updateSize } from "../../Redux/CartSlice/cartSlice";
import AddToCart from "../Add To cart/AddToCart";
import { Link } from "react-router-dom";
export default function CartSidebar({ sidebarOpen, close }) {
    const cartItems = useSelector(state => state.cart.items);
    const cartTotal = cartItems.reduce((total, item) => {
        return total + Number(item.price) * item.quantity;
    }, 0);

    const totalProducts = cartItems.length;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [removingId, setRemovingId] = useState(null);

    if (sidebarOpen) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = "auto";

    }


    return (
        <>
            <div className={`${sidebarOpen ? "w-full h-full fixed flex overflow-hidden top-0 z-[999]" : "hidden"}`}>
                <div className="w-[500px] bg-white z-[9999] overflow-y-auto right-0 absolute h-full sidebar flex flex-col items-center">

                    {cartItems.length > 0 && (
                        <div className="border border-[#eee] w-[100%] flex flex-col items-center h-max" >
                            <div className="flex justify-between border-b-[1.5px] border-b-[#eee] items-center p-4 w-full">
                                <div className="flex text-[13px] font-[700] gap-3">
                                    <div className="bg-[#168D8F] w-[19px] h-[19px] rounded-[2px] flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg></div>
                                    <div >{totalProducts}/{totalProducts} ITEM{totalProducts > 1 ? "S" : ""} SELECTED</div>
                                    <div className="text-[#117a7a]">(${cartTotal})</div>
                                </div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#148c8d"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg></div>
                            </div>

                            {cartItems.map((item, index) => (
                                <div key={index} className="w-full flex flex-col items-center border-b ">

                                    <div className="flex p-3 justify-between pb-0 w-full">
                                        <div className="flex justify-between gap-2">
                                            <div className="bg-[#168D8F] w-[19px] h-[19px] rounded-[2px] flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg></div>
                                            <div className="w-[110px] rounded-[6px]"><img className="rounded-[6px]" src={item.image} /></div>
                                            <div className="text-[14px] flex flex-col">
                                                <div className="font-[600]">{item.title}</div>
                                                <div className="text-[#a7a9ac] ">{item.title}</div>
                                                <div className="flex gap-2 pt-3">
                                                    <div className="font-[700] text-[13px] border border-[#e3e3e3] pl-2 rounded-[4px] text-[#58595b] w-[100px] h-[35px] flex justify-between items-center">Size: {item.size} </div>
                                                    <div className="font-[700] text-[13px] border border-[#e3e3e3] pl-2 rounded-[4px] text-[#58595b] w-[80px] h-[35px] flex justify-between items-center">Qty:
                                                        <select value={item.quantity} onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))} className="outline-none">
                                                            {[1, 2, 3, 4, 5].map(q => (
                                                                <option key={q} value={q}>{q}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-[13px] flex justify-end font-[700]">${item.price}</div>

                                        </div>
                                    </div>
                                    <div className="flex w-[91%] justify-end gap-3 text-[#58595b] text-[12px] font-[700] border-t border-t-[#eee] p-4">
                                        <div onClick={() => {
                                            if (removingId === item.id) return;
                                            setRemovingId(item.id);
                                            setTimeout(() => {
                                                dispatch(removeFromCart(item.id));
                                                setRemovingId(null);
                                            }, 2000);
                                        }}
                                            className={`rounded-[12px] border border-[#e3e3e3] pl-[26px] pr-[26px] pt-[8px] pb-[8px] 
                        ${removingId === item.id ? "bg-gray-400 text-white cursor-not-allowed" : "cursor-pointer"}`} >
                                            {removingId === item.id ? "REMOVING..." : "REMOVE"}
                                        </div>
                                        <div className="rounded-[12px] border border-[#e3e3e3] pl-[26px] pr-[26px] pt-[8px] pb-[8px]">MOVE TO WISHLIST</div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    )}
                    <Link to='/cart'><div onClick={close} className="text-white bg-[#168D8F] font-[600] flex justify-center items-center pt-[6px] pb-[6px] pl-[26px] pr-[26px] rounded-[4px] text-[15px] w-full mt-4 mb-4 cursor-pointer">
                        CHECK OUT
                    </div>
                    </Link>
                </div>

                <div onClick={close} className="fixed w-full top-0 h-full bg-[rgba(0,0,0,0.4)]"></div>
            </div>
        </>
    )
}