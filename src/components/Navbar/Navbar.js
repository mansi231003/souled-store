import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { allProducts } from "../../data/allProducts";
import { useDispatch } from "react-redux";
import { openCart, openSidebar } from "../../Redux/CartSlice/cartSlice";
import Footer from "../Footer/Footer";

export default function Navbar() {
    const dispatch = useDispatch();
    const location = useLocation();
    const cartItems = useSelector(state => state.cart.items);

    const totalQuantity = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const wishlistItems = useSelector(state => state.wishlist.items);
    const wishlistCount = wishlistItems.length;

    const [searchTerm, setSearchTerm] = useState("");
    const filteredProducts = allProducts.filter(product =>
        product.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );


    const handleSidebarOpen = () => {
        if (location.pathname.includes("women")) {
            dispatch(openSidebar("women"));
        } else if (location.pathname.includes("sneakers")) {
            dispatch(openSidebar("sneakers"));
        } else {
            dispatch(openSidebar("men"));
        }
    };

    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="hidden offer-container bg-[#e12d2d] h-[60px] justify-between items-center text-white pl-9 pr-9 pt-6 pb-6">
                <div className="offer w-[70%]">Download Our App & Get 10% Additional Cashback On All Orders</div>
                <div className="button border-2 rounded-[8px] border-white p-1 w-[115px] flex justify-center items-center">
                    <i className="fa-solid fa-mobile-screen"></i>
                    OPEN APP
                </div>
            </div>
            <div className={`navbar-container ${isSticky ? "navbar-sticky" : ""} sticky top-0 z-[1000] bg-white flex h-[70px] justify-between w-full border border-gray-300`}>
                <div className="navmenu-container flex items-center gap-12 w-[38%] justify-center">
                    <div className="nav-button w-[6%] flex items-center text-gray-500 text-[17px] cursor-pointer" onClick={handleSidebarOpen}>
                        <i className="fa fa-bars"></i>
                    </div>
                    <ul className="nav-menu flex justify-between items-center gap-4 text-[18px] font-[700] w-[60%]">
                        <Link to="/"><li className={`${location.pathname === "/" || location.pathname.includes("/men") ? "nav-item" : "nav-link"}`}>MEN</li></Link>
                        <Link to="/womenPage"><li className={`${location.pathname.includes("/women") ? "nav-item" : "nav-link"}`}>WOMEN</li></Link>
                        <Link to='/sneakersPage'><li className={`${location.pathname.includes("/sneaker") ? "nav-item" : "nav-link"}`}>SNEAKERS</li></Link>
                    </ul>
                </div>

                <div
                    className={`img-container ${isSticky ? "sticky-logo" : ""
                        } w-[90px] flex items-center cursor-pointer`}
                >
                    <Link to="/">
                        <img className="img" src="/souledimg.webp" alt="souled" />
                    </Link>
                </div>

                <div className="search-container flex items-center w-[40%] justify-center gap-10 pr-5">

                    <div className="search-box relative border text-gray-600 items-center justify-between border-black flex bg-white h-[40px] rounded-[20px] w-[60%] p-2">
                        {searchTerm && (
                            <div className="absolute top-[45px] left-0 w-full bg-white border shadow-lg rounded-md z-50 max-h-64 overflow-y-auto">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.slice(0, 5).map(product => (
                                        <Link key={product.product_id} to={`/product/${product.product_id}`} onClick={() => setSearchTerm("")}>
                                            <div className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
                                                <img src={product.image_url} alt={product.title} className="w-10 h-10 object-cover rounded" />
                                                <span>{product.title}</span>
                                            </div></Link>
                                    ))
                                ) : (
                                    <div className="p-3 text-gray-500">No products found</div>
                                )}
                            </div>
                        )}
                        <input
                            className="h-full bg-transparent p-2 w-[80%] rounded-[20px] text-[14px] outline-none"
                            placeholder="What are you looking for?"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div><i className="fa-solid fa-microphone text-[20px]"></i></div>
                        <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="26px" fill="#4b5563"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg></div>
                    </div>
                    <div className="nav-icons flex w-[28%] gap-[7px] justify-between items-center text-gray-600">
                        <div onClick={() => setShowMobileSearch(true)} className="pl-[14px] cursor-pointer"><svg className="hidden search-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="26px" fill="#4b5563"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg></div>
                        <Link className="profile-icon" to="/registration"><div className="relative nav-icon items-center flex "><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#4b5563"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z" /></svg></div></Link>
                        <Link to="/wishlist">
                            <div className="relative nav-icon items-center"><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#4b5563"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
                                {wishlistCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-[7px] py-[2px] rounded-[50%]">
                                        {wishlistCount}
                                    </span>
                                )}
                            </div>
                        </Link>
                        <div onClick={() => dispatch(openCart())} className="relative nav-icon items-center cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#4b5563"><path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                            {totalQuantity > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-[7px] py-[2px] rounded-[50%]">
                                    {totalQuantity}
                                </span>
                            )}
                        </div>

                    </div>
                </div>

            </div>
            <div className="categories hidden h-[55px] w-full text-[17px] items-center justify-between">
                <div className={`${location.pathname === "/" || location.pathname.includes("/men") ? "nav-item" : "nav-link"} w-full items-center flex justify-center border-r-gray-400 border-r`}><Link to="/">MEN</Link></div>
                <div className={`${location.pathname.includes("/women") ? "nav-item" : "nav-link"} w-full items-center flex justify-center border-r-gray-400 border-r`}><Link to="/womenPage">WOMEN</Link></div>
                <div className={`${location.pathname.includes("/sneakers") ? "nav-item" : "nav-link"} w-full items-center flex justify-center`}><Link to="/sneakersPage">SNEAKERS</Link></div>

            </div>
            {showMobileSearch && (
                <div className="fixed mobile-search inset-0 z-[9999] bg-white hidden flex-col">

                    <div className="flex items-center gap-3 p-4 border-b">
                        <button onClick={() => { setSearchTerm(""); setShowMobileSearch(false); }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
                        </button>

                        <input autoFocus value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search products..." className="flex-1 outline-none border rounded-full px-4 py-2" />
                    </div>

                    <div className="flex-1 overflow-y-auto">

                        {searchTerm &&
                            filteredProducts.map(product => (
                                <Link key={product.product_id}
                                    to={`/product/${product.product_id}`}
                                    onClick={() => { setShowMobileSearch(false); setSearchTerm(""); }}>
                                    <div className="flex items-center gap-3 p-4 border-b">
                                        <img src={product.image_url} alt={product.title} className="w-12 h-12 rounded" />
                                        <span>{product.title}</span>
                                    </div>
                                </Link>
                            ))}
                        <Footer />
                    </div>

                </div>
            )}
        </>
    )
} 