import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice/cartSlice";
// import { addToWishlist, removeFromWishlist } from "../../Redux/WishlistSlice/WishlistSlice";
// import { useSelector } from "react-redux";
import "./ProductPage.css"
import { allProducts } from "../../data/allProducts"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import useWishlist from "../handleWishlist";

export default function ProductPage() {
    const { id } = useParams();
    const { state } = useLocation();
    let product = state?.product
    if (!product) {
        product = allProducts.find(p => p.product_id === id);
    }

    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [error, setError] = useState("");
    const [quantity, setQuantity] = useState(1);
    const variantData = product.variant_values[0];


    const selectedVariant = product.variants.find(v => v.size === selectedSize &&
        v.color === selectedColor
    );

    const availableColors = selectedSize ? product.variants.filter(v => v.size === selectedSize).map(v => v.color)
        : [];

    let displayPrice = "";
    if (selectedVariant) {
        displayPrice = `$${selectedVariant.price}`;
    } else if (product.price_range.min) {
        displayPrice = `$${product.price_range.min} - $${product.price_range.max}`;
    } else {
        displayPrice = `$${product.price_range.max}`;
    }

    const isOutOfStock = selectedSize && selectedColor && !selectedVariant;

    const dispatch = useDispatch();

    // const wishlistItems = useSelector(state => state.wishlist.items);
    // const isWishlisted = wishlistItems.some(
    //     item => item.product_id === product.product_id
    // );
    // console.log(wishlistItems)
    const [cartStatus, setCartStatus] = useState("idle");

    const handleAddToCart = () => {
        if (!selectedSize) {
            setError("Please select a size");
            return;
        }

        if (variantData.color && !selectedColor) {
            setError("Please select a color");
            return;
        }
        setCartStatus("adding");
        setError("");

        setTimeout(() => {
            dispatch(addToCart({
                id: crypto.randomUUID(),
                product_id: product.product_id,
                title: product.title,
                image: selectedVariant?.image_url || product.image_url,
                price: selectedVariant?.price || product.price_range.max,
                size: selectedSize,
                color: selectedColor,
                quantity,
                stock: Number(selectedVariant?.stock || product.stock)
            }));
            setCartStatus("added");
            setTimeout(() => {
                setCartStatus("idle");
            }, 1000);

        }, 2000);
    };

    const [toast, setToast] = useState({
        show: false,
        message: "",
    });
    const { toggleWishlist, isWishlisted } = useWishlist();

    const handleWishlist = () => {

        const result = toggleWishlist(product);

        if (result) {
            setToast({
                show: true,
                message: result.message,
            });

            setTimeout(() => {
                setToast({ show: false, message: "" });
            }, 2000);
        }
    };


    const [openSection, setOpenSection] = useState(null);
    const [sizeChart, setSizeChart] = useState("size");
    const [openSizeChart, setOpenSizeChart] = useState(false);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const availableStock = selectedVariant
        ? Number(selectedVariant.stock)
        : Number(product.stock);

    useEffect(() => {
        if (selectedVariant) {
            setQuantity(prev =>
                Math.min(prev, Number(selectedVariant.stock))
            );
        }
    }, [selectedVariant]);


    useEffect(() => {
        document.body.style.overflow = openSizeChart ? "hidden" : "auto";
    }, [openSizeChart]);

    return (

        <>
            <Navbar />
            <div className={`${openSizeChart ? "w-full h-full fixed flex overflow-hidden top-0 z-[999]" : "hidden"}`}>
                <div className="w-[500px] cart-sidebar bg-white z-[9999] overflow-y-auto right-0 absolute h-full sidebar flex flex-col items-center">
                    <div className="flex justify-between w-full p-4 shadow-[0px_4px_4px_0px_gray] font-bold text-[16px]">Size Chart-{product.title}
                        <svg onClick={() => setOpenSizeChart(false)} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>

                    </div>
                    <div className="flex p-4 justify-between w-full border-b-2 border-b-gray-200 font-bold cursor-pointer">
                        <div onClick={() => setSizeChart("size")} className={`${sizeChart === "size" ? "text-[#148c8d]" : "text-[#909398]"}`}>Size Chart</div>
                        <div onClick={() => setSizeChart("fit")} className={`${sizeChart === "fit" ? "text-[#148c8d]" : "text-[#909398]"}`}>Fit Guide</div>
                        <div onClick={() => setSizeChart("measure")} className={`${sizeChart === "measure" ? "text-[#148c8d]" : "text-[#909398]"}`}>How To Measure</div>
                    </div>
                    {sizeChart === "size" &&
                        <div className="w-full">
                            <div className="flex px-5 py-3 justify-between w-full font-bold text-[15px]">
                                <div>Size</div>
                                <div>Length</div>
                                <div>Shoulder</div>
                            </div>
                            <div className="flex w-full justify-between px-6 py-3 border-t border-t-gray-200 text-[#525964]">
                                <div>XS</div>
                                <div>28.5</div>
                                <div>18.5</div>
                            </div>
                            <div className="flex w-full justify-between px-6 py-3 border-t border-t-gray-200 text-[#525964]">
                                <div>S</div>
                                <div>28.5</div>
                                <div>19.5</div>
                            </div>
                            <div className="flex w-full justify-between px-6 py-3 border-t border-t-gray-200 text-[#525964]">
                                <div>M</div>
                                <div>29</div>
                                <div>20.5</div>
                            </div>
                            <div className="flex w-full justify-between px-6 py-3 border-t border-t-gray-200 text-[#525964]">
                                <div>L</div>
                                <div>29.5</div>
                                <div>21</div>
                            </div>
                            <div className="flex w-full justify-between px-6 py-3 border-t border-t-gray-200 text-[#525964]">
                                <div>XL</div>
                                <div>30.5</div>
                                <div>21.5</div>
                            </div>
                        </div>
                    }
                    {sizeChart === "fit" &&
                        <div>
                            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/sizechart-images/M258F-FG-Mens-Web.jpg?w=640&dpr=2" alt="" />
                        </div>
                    }
                    {sizeChart === "measure" &&
                        <div>
                            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/sizechart-images/M258F-Measure-Mens-Web.jpg?w=480&dpr=2" alt="" />
                        </div>
                    }
                </div>
                <div onClick={() => setOpenSizeChart(false)} className="fixed w-full top-0 h-full bg-[rgba(0,0,0,0.4)]"></div>

            </div>

            <div className="pl-5 flex flex-col justify-center items-center product-page">
                <div className="w-full pt-[15px] pb-[15px] text-[12px] text-[#a7a9ac] gap-1 flex">Home /<span>T-Shirts /</span><span>The Souled Store /</span><span className="text-[#58595b]">{product.title}</span></div>
                <div className="flex gap-4 pb-6 hero-section w-full">
                    <div className="product-slider flex w-[94%]">
                        <Swiper
                            pagination={{
                                clickable: true
                            }}
                            modules={[Pagination]}
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                        >
                            {
                                [1, 2, 3, 4].map((item) => (
                                    <SwiperSlide key={item.product_id}> <img src={selectedVariant ? selectedVariant.image_url : `${product.image_url}`} alt={product.title} /></SwiperSlide>
                                ))
                            }
                        </Swiper>

                    </div>
                    <div className="product-images grid grid-cols-2 gap-2 w-[57%] h-max left-container">
                        <img src={selectedVariant ? selectedVariant.image_url : `${product.image_url}`} alt={product.title} />
                        <img src={selectedVariant ? selectedVariant.image_url : `${product.image_url}`} alt={product.title} />
                        <img src={selectedVariant ? selectedVariant.image_url : `${product.image_url}`} alt={product.title} />
                        <img src={selectedVariant ? selectedVariant.image_url : `${product.image_url}`} alt={product.title} />

                    </div>
                    <div className="pl-8 pr-3 w-[40%] right-container">
                        <div className="flex flex-col border-b pb-3">
                            <span className="font-[700] text-[25px] text-[#58595b] h-[32px]">{product.title}</span><span className="text-[14px] font-[500] text-[#a7a9ac]">T-Shirts</span>
                        </div>

                        <div className="pt-5 font-[700] text-[20px] text-[#58595b]">{displayPrice}</div>
                        <div className="text-[#888] text-[14px]">Price incl. of all taxes</div>

                        <div className="pt-3 pb-3 gap-2 flex font-[700] text-[16px] text-[#58595b]">{variantData.size.label}<u onClick={() => setOpenSizeChart(true)} className="text-[#117a7a] font-normal cursor-pointer">SIZE CHART</u></div>

                        <div className="flex gap-2 pb-3">
                            {Object.values(variantData.size.values[0]).map((val) => (
                                <div key={val.key} onClick={() => { setSelectedSize(val.key); }} className={`${selectedSize === val.key ? "bg-black text-white" : "bg-white text-[#58595b]"} rounded-[5px] text-[#58595b] border-[2px] border-[#ccc] flex justify-center items-center p-1 w-[45px] cursor-pointer }`}> {val.label}</div>
                            ))}
                        </div>
                        {variantData.color && (
                            <>
                                <div className="pt-3 pb-3 gap-2 flex font-[700] text-[16px] text-[#58595b]">{variantData.color.label}</div>
                                <div className="flex gap-2 pb-8">
                                    {Object.values(variantData.color.values[0]).map((val) => {
                                        const isAvailable = selectedSize ? availableColors.includes(val.key) : true;

                                        return (
                                            <div className={`rounded-full p-[4px] border-2  ${selectedColor === val.key ? "border-black" : "border-white"}`}><div key={val.key} onClick={() => isAvailable && setSelectedColor(val.key)} style={{ backgroundColor: val.color_code }} className={`rounded-full flex justify-center items-center w-[25px] h-[25px]   ${isAvailable ? "cursor-pointer" : "opacity-30 cursor-not-allowed"}`}></div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        )}

                        <div className="flex gap-3 items-center pb-3">
                            <div className="text-[#58595b] text-[14px]">Quantity</div>
                            <div className="flex items-center border border-[#ccc] rounded-md overflow-hidden">
                                <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="pl-2 pr-1 py-1 text-lg">
                                    -
                                </button>

                                <span className="w-[30px] text-center">
                                    {quantity}
                                </span>

                                <button onClick={() => setQuantity(prev => Math.min(availableStock, prev + 1))}
                                    className="pr-2 pl-1 py-1 text-lg"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        {isOutOfStock && (
                            <div className="text-red-500 font-semibold mb-4">Out of Stock!</div>
                        )}
                        {error && (
                            <div className="text-[#a94442] bg-[rgb(242,222,222)] rounded-[6px] p-3 mb-4 text-[14px]">{error}</div>
                        )}
                        <div className="flex gap-2 cart-buttons">

                            {cartStatus === "idle" && (
                                <div onClick={!isOutOfStock ? handleAddToCart : undefined} className={`cart-btn w-[229px] text-white pt-[8px] pb-[8px] flex justify-center items-center rounded-[3px] font-[700] text-[14px]
        ${isOutOfStock ? "bg-red-400 cursor-not-allowed opacity-60" : "bg-[#ec3d25] cursor-pointer"}`}>
                                    ADD TO CART
                                </div>
                            )}

                            {cartStatus === "adding" && (
                                <div className="cart-btn cursor-pointer bg-gray-500 w-[229px] text-white pt-[8px] pb-[8px] flex justify-center items-center rounded-[3px] font-[700] text-[14px]">
                                    ADDING TO CART...</div>
                            )}

                            {cartStatus === "added" && (
                                <div className="cart-btn cursor-pointer bg-green-600 w-[229px] text-white pt-[8px] pb-[8px] flex justify-center items-center rounded-[3px] font-[700] text-[14px]">
                                    ADDED</div>
                            )}

                            <div onClick={handleWishlist} className={`cart-btn text-[#148c8d] flex items-center w-[245px] justify-center border border-[#148c8d] h-[39px] cursor-pointer ${isWishlisted ? "text-[12px]" : "text-[14px]"}`}>
                                {
                                    isWishlisted(product.product_id) ?
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="20px" fill="#148c8d">
                                                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                                            </svg>REMOVE FROM WISHLIST
                                        </> : <>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="20px" fill="#148c8d"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
                                            ADD TO WISHLIST
                                        </>
                                }

                            </div>

                        </div>

                        <div className="flex items-center gap-[4px] text-[#58595b] text-[22px] mt-[18px] mb-[18px]">
                            <div className="text-[#58595b] text-[14px] pr-4">Share</div>
                            <i className="fa-brands fa-whatsapp"></i>
                            <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        {/* <div className="text-[15px] font-[700] text-[#282d3f]">Delivery Details</div>
                        <div className="border flex justify-between rounded-[6px] p-[6px] pl-[10px] pr-[10px] mt-[10px] mb-[14px]">
                            <input className="w-full outline-none text-[#58595b] font-[200] text-[15px]" placeholder="Enter Pincode" />
                            <div className="cursor-pointer text-[15px] text-[#148c8d] font-[700]">CHECK</div>
                        </div> */}
                        <div className=" flex shadow-[0px_1px_2px_rgba(0,0,0,0.2)] mb-[18px] p-[8px] gap-2">
                            <div className="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#58595b"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z" /></svg></div>
                            <p className="text-[13px] text-[#58595b]">This product is eligible for return or exchange under our 30-day return or exchange policy. No questions asked.</p>
                        </div>
                        <div className="border border-[rgba(0,0,0,0.125)] text-[#58595b]">
                            <div className="text-[16px] border-b p-3">
                                <div onClick={() => toggleSection("details")} className="flex justify-between font-[700] cursor-pointer">Product Details
                                    <svg className={`transition-transform duration-300 ${openSection === "details" ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === "details" ? "max-h-[200px] opacity-100 pt-2" : "max-h-0 opacity-0"}`}>Charlie Brown and Snoopy are here to keep things light, breezy, and just the right amount of nostalgic. The fit says weekend, the print says instant mood boost. Style Tip: Style with light-wash jeans for a casual, feel-good look.</div>
                            </div>
                            <div className="text-[16px] border-b p-3">
                                <div onClick={() => toggleSection("description")} className="flex justify-between font-[700] cursor-pointer">Product Description
                                    <svg className={`transition-transform duration-300 ${openSection === "description" ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                                </div>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === "description" ? "max-h-[200px] opacity-100 pt-2" : "max-h-0 opacity-0"}`}>Charlie Brown and Snoopy are here to keep things light, breezy, and just the right amount of nostalgic. The fit says weekend, the print says instant mood boost. Style Tip: Style with light-wash jeans for a casual, feel-good look.</div>

                            </div>
                            <div className="text-[16px] p-3">
                                <div onClick={() => toggleSection("artist")} className="flex justify-between font-[700] cursor-pointer">Artist's Details
                                    <svg className={`transition-transform duration-300 ${openSection === "artist" ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                                </div>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === "artist" ? "max-h-[200px] opacity-100 pt-2" : "max-h-0 opacity-0"}`}>
                                    Charlie Brown and Snoopy are here to keep things light, breezy, and just the right amount of nostalgic. The fit says weekend, the print says instant mood boost. Style Tip: Style with light-wash jeans for a casual, feel-good look.
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`fixed inset-0 flex items-center justify-center z-[9999]
    transition-opacity duration-300
    ${toast.show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                <div className="bg-red-500 text-white px-3 py-2 rounded-md shadow-lg">
                    {toast.message}
                </div>
            </div>
            <Footer />
        </>
    )
};
