import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { products } from "../../menPage";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice/cartSlice";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {
    const { id } = useParams();
    const product = products.find(p => p.product_id === id);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [error, setError] = useState("");
    const [quantity, setQuantity] = useState(1);
    const variantData = product.variant_values[0];

    const selectedVariant = product.variants.find(v => v.size === selectedSize &&
        v.color === selectedColor
    );

    const availableColors = selectedSize
        ? product.variants
            .filter(v => v.size === selectedSize)
            .map(v => v.color)
        : [];

    let displayPrice = "";

    if (selectedVariant) {
        displayPrice = `$${selectedVariant.price}`;
    } else if (product.price_range.min) {
        displayPrice = `$${product.price_range.min} - $${product.price_range.max}`;
    } else {
        displayPrice = `$${product.price_range.max}`;
    }


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        if (!selectedSize) {
            setError("Please select a size");
            return;
        }

        if (variantData.color && !selectedColor) {
            setError("Please select a color");
            return;
        }

        setError("");

      
        dispatch(addToCart({
            product_id: product.product_id,
            title: product.title,
            image: selectedVariant?.image_url || product.image_url,
            price: selectedVariant?.price || product.price_range.max,
            size: selectedSize,
            color: selectedColor,
            quantity: quantity
        }));

        setAdded(true);
    };

    return (

        <>
            <Navbar />
            <div className="pl-10">
                <div className="pt-[15px] pb-[15px] text-[12px] text-[#a7a9ac] gap-1 flex">Home /<span>T-Shirts /</span><span>The Souled Store /</span><span className="text-[#58595b]">{product.title}</span></div>
                <div className="flex gap-4">
                    <div className="grid grid-cols-2 gap-2 w-[57%]">
                        <img src={selectedVariant ? selectedVariant.image_url : `/${product.image_url}`} alt={product.title} />
                        <img src={selectedVariant ? selectedVariant.image_url : `/${product.image_url}`} alt={product.title} />
                        <img src={selectedVariant ? selectedVariant.image_url : `/${product.image_url}`} alt={product.title} />
                        <img src={selectedVariant ? selectedVariant.image_url : `/${product.image_url}`} alt={product.title} />

                    </div>
                    <div className="pl-8 w-[40%]">
                        <div className="flex flex-col border-b pb-3">
                            <span className="font-[700] text-[25px] text-[#58595b] h-[32px]">{product.title}</span><span className="text-[14px] font-[500] text-[#a7a9ac]">T-Shirts</span>
                        </div>

                        <div className="pt-5 font-[700] text-[20px] text-[#58595b]">{displayPrice}</div>
                        <div className="text-[#888] text-[14px]">Price incl. of all taxes</div>

                        <div className="pt-3 pb-3 gap-2 flex font-[700] text-[16px] text-[#58595b]">{variantData.size.label}<u className="text-[#117a7a] font-normal">SIZE CHART</u></div>

                        <div className="flex gap-2 pb-2">
                            {Object.values(variantData.size.values[0]).map((val) => (
                                <div key={val.key} onClick={() => { setSelectedSize(val.key); setSelectedColor("") }} className={`${selectedSize === val.key ? "bg-black text-white" : "bg-white text-[#58595b]"} rounded-[5px] text-[#58595b] border-[2px] border-[#ccc] flex justify-center items-center p-1 w-[45px] }`}> {val.label}</div>
                            ))}
                        </div>
                        {variantData.color && (
                            <>
                                <div className="pt-3 pb-3 gap-2 flex font-[700] text-[16px] text-[#58595b]">{variantData.color.label}</div>
                                <div className="flex gap-2 pb-8">
                                    {Object.values(variantData.color.values[0]).map((val) => {
                                        const isAvailable = selectedSize ? availableColors.includes(val.key) : true;

                                        return (
                                            <div key={val.key} onClick={() => isAvailable && setSelectedColor(val.key)} style={{ backgroundColor: val.color_code }} className={`rounded-full flex justify-center items-center w-[35px] h-[35px]   ${isAvailable ? "cursor-pointer" : "opacity-30"} ${selectedColor === val.key ? "border-2 border-black" : ""}`}></div>
                                        );
                                    })}
                                </div>
                            </>
                        )}

                        <div className="flex gap-3 items-center pb-3">
                            <div className="text-[#58595b] text-[14px]">Quantity</div>
                            <select
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="border border-[#ccc] rounded-[5px] p-[4px] text-[15px]"
                            >
                                <option value={1}>01</option>
                                <option value={2}>02</option>
                                <option value={3}>03</option>
                            </select>
                        </div>
                        {error && (
                            <div className="text-[#a94442] bg-[#f2dede] rounded-[6px] p-3 mb-4 text-[14px]">{error}</div>
                        )}
                        <div className="flex gap-2">
                            {!added ? (
                                <div onClick={handleAddToCart} className="bg-[#ec3d25] w-[229px] text-white pt-[8px] pb-[8px] flex justify-center items-center rounded-[3px] font-[700] text-[14px] cursor-pointer">
                                    ADD TO CART
                                </div>
                            ) : (
                                <div onClick={() => navigate("/cart")} className="bg-green-600 w-[229px] text-white pt-[8px] pb-[8px] flex justify-center items-center rounded-[3px] font-[700] text-[14px] cursor-pointer">
                                    GO TO CART
                                </div>
                            )}
                            <div className="flex justify-center items-center text-[14px] pt-[5px] pb-[5px] font-[400] text-[#148c8d] border border-[#148c8d] rounded-[2px] w-[147px] gap-[1px]"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#148c8d"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>ADD TO WISHLIST</div>

                        </div>

                        <div className="flex items-center gap-[4px] text-[#58595b] text-[22px] mt-[18px] mb-[18px]">
                            <div className="text-[#58595b] text-[14px] pr-4">Share</div>
                            <i className="fa-brands fa-whatsapp"></i>
                            <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div className="text-[15px] font-[700] text-[#282d3f]">Delivery Details</div>
                        <div className="border flex justify-between rounded-[6px] p-[6px] pl-[10px] pr-[10px] mt-[10px] mb-[14px]">
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
};
