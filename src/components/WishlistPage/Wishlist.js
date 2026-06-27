import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../Redux/WishlistSlice/WishlistSlice";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
// import { addToCart } from "../../Redux/CartSlice/cartSlice";
import "./Wishlist.css"
import { Link } from "react-router-dom";

export default function Wishlist({openCart}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const wishlistItems = useSelector(
        state => state.wishlist.items
    );

    return (
        <>
            <Navbar cartSidebar={openCart}/>
            <div className="p-5 flex flex-col items-center">
                <h1 className="text-[24px] text-[#58595b] font-bold pt-2 mb-5 w-[92%]">My Wishlist</h1>

                {wishlistItems.length === 0 ? (
                    <>
                    <img className="w-[20%] pt-3" src="https://prod-img.thesouledstore.com/static/wishList-empty-icon.png?w=576&dpr=2" alt=""/>
                    <p className="p-3 font-bold text-[18px]">No items in wishlist</p>
                        <Link to="/"><div className="text-white bg-[#168D8F] font-[600] flex justify-center items-center pt-[10px] pb-[10px] pl-[26px] pr-[26px] rounded-[4px] text-[15px] w-max mt-4 mb-4 cursor-pointer">
                                                        Continue Shopping...
                                                    </div></Link>

                    </>
                ) : (
                    <div className="wishlist-section grid grid-cols-4 gap-[20px] w-[92%]">
                        {wishlistItems.map(item => (

                            <div key={item.id} className="border relative w-full">
                        <div onClick={() => dispatch(removeFromWishlist(item.id))} className="absolute cursor-pointer top-[10px] backdrop-blur-[80px] right-[10px] rounded-[50%] text-[#fff] w-[30px] h-[30px] flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7B7B7"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                            </div>
                                
                                <img
                                    src={item.image.includes("/") ? item.image : `/${item.image}`}
                                    alt={item.title}
                                    className="w-full cursor-pointer"
                                    onClick={() =>
                                        navigate(`/product/${item.product_id}`)
                                    } />

                                <h2 className="font-bold p-2 pb-0 text-[#58595b]">{item.title} </h2>
                                <p className="p-2 pt-0 font-[600] text-gray-600">${item.price}</p>
                            
                                <button onClick={() => {navigate(`/product/${item.product_id}`);}}
                                    className="text-[#148c8d] font-[500] border-t pt-2 pb-2 w-full">
                                    View Product
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}