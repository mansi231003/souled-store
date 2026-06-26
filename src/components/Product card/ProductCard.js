import "./ProductCard.css"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../Redux/WishlistSlice/WishlistSlice";
import { useState } from "react";

export default function ProductCard({ product }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.wishlist.items);
    const isWishlisted = wishlistItems.some(
        item => item.product_id === product.product_id
    );
    const [toast, setToast] = useState({
        show: false,
        message: "",
    });

    const handleWishlist = (e) => {
        e.stopPropagation();

        const exists = wishlistItems.find(
            item => item.product_id === product.product_id
        );

        if (exists) {
            dispatch(removeFromWishlist(exists.id));

            setToast({
                show: true,
                message: "Product is removed from wishlist",
            });
        } else {
            dispatch(addToWishlist({
                id: crypto.randomUUID(),
                product_id: product.product_id,
                title: product.title,
                image: product.image_url,
                price: product.price_range?.min || product.price_range?.max,
            }));

            setToast({
                show: true,
                message: "Product is added to wishlist",
            });
        }

        setTimeout(() => {
            setToast({
                show: false,
                message: "",
            });
        }, 2000);
    };

    return (
        <>
            <div>
                <div className="card relative" onClick={() => navigate(`/product/${product.product_id}`)}>
                    <div onClick={handleWishlist} className="like absolute top-[10px] backdrop-blur-[80px] right-[10px] rounded-[50%] text-[#fff] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                        {
                            isWishlisted ?
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                                        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                                    </svg>
                                </> : <>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
                                </>
                        }
                    </div>
                    <div className="card-img-container cursor-pointer"><img className="card-img" src={product.image_url} alt="img" /></div>
                    <div className="pl-2 pt-2 text-[14px] name">
                        <h2 className="font-[700] text-[#58595b] border-b title break-words min-w-0">{product.title}</h2>
                        {/* <p className="text-[#58595b]">{product.category}</p> */}
                        {product.price_range ?
                            <p className="price text-[#58595b] flex items-center"><svg className="icon" xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#58595b"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z" /></svg>{product.price_range.min ? `${product.price_range.min}-${product.price_range.max}` : product.price_range.max}</p>
                            : null}
                    </div>
                </div>
            </div>
            <div
                className={`fixed top-14 right-5 z-[9999]
  bg-red-500 text-white text-[15px] px-3 py-2 rounded-md shadow-md
  transition-all duration-300 ease-out
  ${toast.show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
            >
                {toast.message}
            </div>
        </>
    )
}