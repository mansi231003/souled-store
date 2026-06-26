import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addToWishlist } from "../../Redux/WishlistSlice/WishlistSlice";
import { removeFromCart, updateQuantity, closeCart } from "../../Redux/CartSlice/cartSlice";
import { Link } from "react-router-dom";
import "./CartSidebar.css"

export default function CartSidebar() {
    const cartItems = useSelector(state => state.cart.items);
    const cartTotal = cartItems.reduce((total, item) => {
        return total + Number(item.price) * item.quantity;
    }, 0);

    const totalProducts = cartItems.length;
    const dispatch = useDispatch();
    const [removingId, setRemovingId] = useState(null);
    const cartSidebarOpen = useSelector(state => state.cart.isCartOpen);

    useEffect(() => {
        document.body.style.overflow = cartSidebarOpen ? "hidden" : "auto";
    }, [cartSidebarOpen]);


    return (
        <>
            <div className={`${cartSidebarOpen ? "w-full h-full fixed flex overflow-hidden top-0 z-[999]" : "hidden"}`}>
                <div className="w-[500px] cart-sidebar bg-white z-[9999] overflow-y-auto right-0 absolute h-full sidebar flex flex-col items-center">
                    {cartItems.length === 0 ? (
                        <>
                                        <div onClick={() => dispatch(closeCart())} className=" cursor-pointer w-full p-4 justify-end flex"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></div>

                            <div className="flex justify-center items-center h-full flex-col">
                                
                                <div>
                                    <img src="/emptyCart.avif" alt="emptyCart" />
                                </div>
                                <p className="flex justify-center text-[20px] font-[600] h-[60px] items-center">Your cart is empty!</p>
                                <div onClick={() => dispatch(closeCart())} className="text-white bg-[#168D8F] font-[600] flex justify-center items-center pt-[10px] pb-[10px] pl-[26px] pr-[26px] rounded-[4px] text-[15px] w-max mt-4 mb-4 cursor-pointer">
                                    Continue Shopping...
                                </div>


                            </div>
                        </>
                    )
                        : (<div className="w-full flex flex-col items-center">
                            {cartItems.length > 0 && (
                                <div className="border border-[#eee] w-[100%] flex flex-col items-center h-max" >
                                    <div className="flex justify-between border-b-[1.5px] border-b-[#eee] items-center p-4 w-full">
                                        <div className="flex text-[13px] font-[700] gap-3">
                                            <div className="bg-[#168D8F] w-[19px] h-[19px] rounded-[2px] flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg></div>
                                            <div >{totalProducts}/{totalProducts} ITEM{totalProducts > 1 ? "S" : ""} SELECTED</div>
                                            <div className="text-[#117a7a]">(${cartTotal})</div>
                                        </div>
                                        <div onClick={() => dispatch(closeCart())} className=" cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></div>
                                    </div>

                                    {cartItems.map((item, index) => (
                                        <div key={index} className="w-full flex flex-col items-center border-b ">

                                            <div className="flex p-3 justify-between pb-0 w-full">
                                                <div className="flex justify-between gap-2">
                                                    <div className="bg-[#168D8F] w-[19px] h-[19px] rounded-[2px] flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg></div>
                                                    <div className="image w-[110px] rounded-[6px]">
                                                        <img className="rounded-[6px]" src={item.image.includes("/") ? item.image : `/${item.image}`} alt="productimage" />
                                                    </div>
                                                    <div className="text-[14px] flex flex-col">
                                                        <div className="font-[600]">{item.title}</div>
                                                        <div className="text-[#a7a9ac] ">{item.title}</div>
                                                        <div className="flex gap-2 pt-3">
                                                            <div className="size-btn font-[700] text-[13px] border border-[#e3e3e3] pl-2 rounded-[4px] text-[#58595b] w-[100px] h-[35px] flex justify-between items-center">Size: {item.size} </div>
                                                            <div className="size-btn font-[700] text-[13px] border border-[#e3e3e3] px-2 rounded-[4px] text-[#58595b] w-[90px] h-[35px] flex justify-between items-center">Qty:
                                                                <div className="flex items-center w-[40px] justify-between">
                                                                    <button onClick={() =>dispatch(updateQuantity({
                                                                                id: item.id,quantity: Math.max(1, item.quantity - 1)}))}
                                                                        className="">
                                                                        -
                                                                    </button>

                                                                    <span className="">{item.quantity}</span>

                                                                    <button
                                                                        onClick={() =>
                                                                            dispatch(updateQuantity({
                                                                                id: item.id,
                                                                                quantity: Math.min(
                                                                                    Number(item.stock),
                                                                                    item.quantity + 1
                                                                                )
                                                                            }))
                                                                        }
                                                                        className="">
                                                                        +
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-[13px] flex justify-end font-[700]">${item.price}</div>

                                                </div>
                                            </div>
                                            <div className="flex w-[91%] justify-end gap-3 text-[#58595b] text-[12px] font-[700]  border-t-[#eee] p-4">
                                                <div onClick={() => {
                                                    if (removingId === item.id) return;
                                                    setRemovingId(item.id);
                                                    setTimeout(() => {
                                                        dispatch(removeFromCart(item.id));
                                                        setRemovingId(null);
                                                    }, 1000);
                                                }}
                                                    className={`rounded-[12px] button border border-[#e3e3e3] pl-[26px] pr-[26px] pt-[8px] pb-[8px] 
                        ${removingId === item.id ? "bg-gray-400 text-white cursor-not-allowed" : "cursor-pointer"}`} >
                                                    {removingId === item.id ? "REMOVING..." : "REMOVE"}
                                                </div>
                                                <div onClick={() => {
                                                    dispatch(addToWishlist({
                                                        id: crypto.randomUUID(),
                                                        product_id: item.product_id,
                                                        title: item.title,
                                                        image: item.image,
                                                        price: item.price,
                                                        size: item.size,
                                                        color: item.color,
                                                    }));

                                                    dispatch(removeFromCart(item.id));
                                                }} className="rounded-[12px] button cursor-pointer border border-[#e3e3e3] pl-[26px] pr-[26px] pt-[8px] pb-[8px]">MOVE TO WISHLIST</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <Link to='/cart'><div onClick={closeCart} className="text-white bg-[#168D8F] font-[600] flex justify-center items-center pt-[10px] pb-[10px] pl-[26px] pr-[26px] rounded-[4px] text-[15px] w-max mt-4 mb-4 cursor-pointer">
                                CHECK OUT
                            </div>
                            </Link>
                        </div>
                        )}
                </div>

                <div onClick={() => dispatch(closeCart())} className="fixed w-full top-0 h-full bg-[rgba(0,0,0,0.4)]"></div>
            </div>

        </>
    )
}