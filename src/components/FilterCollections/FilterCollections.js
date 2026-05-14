import "./FilterCollections.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductCard from "../Product card/ProductCard";
import { useLocation } from "react-router-dom";
import { allProducts } from "../../data/allProducts";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { menProducts } from "../../data/menProducts";
import { womenProducts } from "../../data/womenProducts";

export default function FilterCollections({ openCart }) {
    const { type } = useParams();
    const { state } = useLocation();
    const tag = state?.tag;
    const collection = state?.collection;
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [priceRange, setPriceRange] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState([]);

    const menCategories = [
        { name: "Cotton Linen Shirts", count: 1 },
        { name: "Drop Cut T-Shirts", count: 16 },
        { name: "Easy Fit Vests", count: 6 },
        { name: "Exclusive", count: 1 },
        { name: "Hooded T-Shirts", count: 22 },
        { name: "Men Full Sleeve T-Shirts", count: 3 },
        { name: "Men Hooded T-Shirts", count: 1 },
    ];
    const womenCategories = [
        { name: "women Cotton Linen Shirts", count: 1 },
        { name: "women Drop Cut T-Shirts", count: 16 },
        { name: "women Easy Fit Vests", count: 6 },
        { name: "women Exclusive", count: 1 },
        { name: "women Hooded T-Shirts", count: 22 },
        { name: "women Full Sleeve T-Shirts", count: 3 },
        { name: "women Hooded T-Shirts", count: 1 },
    ];

    let categories = [];

    if (type === "men") {
        categories = menCategories;
    }
    else if (type === "women") {
        categories = womenCategories;
    }

    const handleChange = (item) => {
        if (selectedCategory.includes(item)) {
            setSelectedCategory(selectedCategory.filter((i) => i !== item));
        } else {
            setSelectedCategory([...selectedCategory, item]);
        }
    };

    let baseProducts = [];
    if (type === "men") {
        baseProducts = menProducts;
    }
    else if (type === "women") {
        baseProducts = womenProducts;
    }
    // const baseProducts = tag
    //     ? allProducts.filter(product =>
    //         product.tags?.includes(tag)
    //     )
    //     : allProducts;

    const products = baseProducts.filter(product => {
        const categoryMatch =
            selectedCategory.length === 0 ||
            selectedCategory.includes(product.category);

        const variantMatch = product.variants?.some(variant => {


            const sizeMatch =
                selectedSizes.length === 0 ||
                selectedSizes.includes(variant.size);


            const price = Number(variant.price);

            const priceMatch =
                !priceRange ||
                (price >= priceRange.min && price <= priceRange.max);

            return sizeMatch && priceMatch;
        });
           return categoryMatch && variantMatch;
    });

    const [filterSidebar, setfilterSidebar] = useState(false)
    useEffect(() => {
        document.body.style.overflow = filterSidebar ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [filterSidebar]);

    return (
        <>
            <Navbar cartSidebar={openCart} />

            <div className={`${filterSidebar ? "hidden" : "w-full border p-2 sticky z-10 bg-white top-0 justify-between hidden filter-button"}`}>
                <div onClick={() => setfilterSidebar(true)} className="p-3 h-[36px] w-[120px] flex justify-center items-center rounded-[4px] top-0 cursor-pointer">Filter</div>
            </div>
            <div className="flex p-2">
                {filterSidebar && (
                    <div className="fixed filter-overlay w-full top-0 h-full bg-[rgba(0,0,0,0.4)] z-40" onClick={() => setfilterSidebar(false)} ></div>

                )}
                <div className={`${filterSidebar ? "active" : ""} filter-section p-2 w-[400px] sticky top-[160px] bg-white h-[85vh] overflow-y-auto translate-x-0 z-50`}>
                    <div>
                        <h2 className="text-[14.5px] text-[#59595b] font-[700] pt-[12px] pb-[12px] pr-[3px] pl-[3px] border-t-[1px]">CATEGORIES</h2>
                        <input className="outline-none border border-rgba(0,0,0,0.15) p-[6px] w-[95%] text-[#59595b] font-[300] text-[15px] rounded-[5px]" placeholder="Search for Categories" />
                        <div className="w-full p-2">
                            {categories.map((item, index) => (
                                <label key={index} className="flex items-center justify-between p-1 cursor-pointer" >
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategory.includes(item.name)}
                                            onChange={() => handleChange(item.name)}
                                            className="w-[16px] h-[16px]"
                                        />
                                        <span className="text-gray-700 ">
                                            {item.name}
                                        </span>
                                    </div>
                                    <span className="text-gray-500 ">
                                        {item.count}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[14.5px] text-[#59595b] font-[700] pt-[12px] pb-[12px] pr-[3px] pl-[3px] border-t-[1px]">SIZE</h2>
                        <input className="outline-none border border-rgba(0,0,0,0.15) p-[6px] w-[95%] text-[#59595b] font-[300] text-[15px] rounded-[5px]" placeholder="Search for Size" />
                        <div className="w-full p-2 pt-4 flex flex-wrap gap-3">

                            {["XS", "small", "medium", "large", "XL"].map(size => (
                                <div
                                    key={size}
                                    onClick={() => {
                                        setSelectedSizes(prev =>
                                            prev.includes(size)
                                                ? prev.filter(s => s !== size)
                                                : [...prev, size]
                                        );
                                    }}
                                    className={`border-2 rounded-[6px] pt-[2px] pb-[2px] pl-2 pr-2 w-max text-[15px] cursor-pointer
                ${selectedSizes.includes(size)
                                            ? "bg-black text-white"
                                            : "border-[#58595b]"
                                        }`}
                                >
                                    {size}
                                </div>
                            ))}

                        </div>
                    </div>
                    <div>
                        <h2 className="text-[14.5px] text-[#59595b] font-[700] pt-[12px] pb-[12px] pr-[3px] pl-[3px] border-t-[1px]">PRICES</h2>
                        <div className="w-full p-2 flex flex-col gap-2">

                            <label className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="price"
                                    onChange={() =>
                                        setPriceRange({ min: 0, max: 500 })
                                    }
                                />
                                Rs.0 - Rs.500
                            </label>

                            <label className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="price"
                                    onChange={() =>
                                        setPriceRange({ min: 500, max: 1000 })
                                    }
                                />
                                Rs.500 - Rs.1000
                            </label>

                            <label className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="price"
                                    onChange={() =>
                                        setPriceRange({ min: 1000, max: 2000 })
                                    }
                                />
                                Rs.1000+
                            </label>

                        </div>
                    </div>

                </div>
                <div className="flex flex-col w-[100%] filter-collection-right-section">
                    <div className="w-full pt-[15px] text-[12px] text-[#a7a9ac] gap-1 flex">Home /<span>T-Shirts /</span></div>
                    <div className="flex justify-between items-center pb-6">
                        <div className="text-black text-[14px]">Men T-Shirts<span className="text-[#58595b]">-1414 items</span></div>
                        <div className="flex border border-[#ccc] p-[8px] rounded-[5px] text-[#58595b] text-[14.5px]">
                            <select className="outline-none w-[220px]">
                                <option>Selecting Sorting options</option>
                                <option>e</option>
                                <option>e</option>
                            </select>
                        </div>
                    </div>
                    <div className="category-images grid grid-cols-4 gap-4">
                        {products.map((item, index) => (
                            <ProductCard key={index} product={item} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}