import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
// import Herosection from './components/Hero Section/Herosection';
import Collections from './components/Collections/Collections';
import ProductSlider from './components/Product slider/ProductSlider';
import Slider from './components/Slider/Slider';
import Categories from './components/Categories/Categories';
import Curated from './components/Curated for YOU/Curated';
import CategorySection from './components/Category Section/CategorySection';
import Footer from './components/Footer/Footer';
import './App.css';
import FeaturesBar from './components/Features bar/FeaturesBar';
import { useState } from 'react';
import CartSidebar from './components/CartSidbar/CartSidebar';
function MenPage() {


  const menProducts = [
    {
      image: "newArrival-img1.png",
      title: "Peanuts:Works Out",
      category: "T-Shirts",
      price: 799
    },
    {
      image: "newArrival-img2.png",
      title: "Ben10:Tennyson",
      category: "Oversized Jerseys",
      price: 1199
    },
    {
      image: "newArrival-img3.png",
      title: "Relaxed-Fit Shirt:Champagne",
      category: "Cotton Linen Shirts",
      price: 1799
    },
    {
      image: "newArrival-img4.png",
      title: "Oversized T-Shirt:Wan Blue",
      category: "Oversized T-Shirts",
      price: 1099
    },
    {
      image: "newArrival-img3.png",
      title: "Peanuts:Works Out",
      category: "T-Shirts",
      price: 799
    },
    {
      image: "newArrival-img4.png",
      title: "Ben10:Tennyson",
      category: "Oversized Jerseys",
      price: 1199
    },
    {
      image: "newArrival-img1.png",
      title: "Relaxed-Fit Shirt:Champagne",
      category: "Cotton Linen Shirts",
      price: 1799
    },
    {
      image: "newArrival-img2.png",
      title: "Oversized T-Shirt:Wan Blue",
      category: "Oversized T-Shirts",
      price: 1099
    },

  ]

  const menSlides1 = [
    { image: "man-img1.png" },
    { image: "man-img2.png" },
    { image: "man-img3.png" },
    { image: "man-img4.png" }

  ]
  const menSlides2 = [
    { image: "man-img1.avif" },
    { image: "man-img2.avif" },
    { image: "man-img3.avif" },
    { image: "man-img4.avif" },

  ]

  const menCategoriesImg = [
    { img: "men-category1.png" },
    { img: "men-category2.png" },
    { img: "men-category3.png" },
    { img: "men-category4.png" },
    { img: "men-category5.png" },
    { img: "men-category6.png" },

  ]

  const curatedImages = [
    { img: "curated-img1.png" },
    { img: "curated-img2.png" },
    { img: "curated-img3.png" },
    { img: "curated-img4.png" },
  ]

  const latestDrops = [
    { image: "latestDrop-img1.png" },
    { image: "latestDrop-img2.png" },
    { image: "latestDrop-img3.png" },

  ]

  const menCategories=[
    "Trending",
    "Oversized T-shirts",
    "Shirts",
    "Polos",
    "Hoodies",
    "Jackets",
    "Men Pants",
    "Men Joggers",
    "Men Jackets",
    "Men High Top Sneakers",
    "Men Low Top Sneakers",
  ]

  const menSidebarProducts=[
     {
      image: "sidebar-img1.png",
      title: "Summer Home",

    },
    {
      image: "sidebar-img2.png",
      title: "Hot Merch",
    },
    {
      image: "sidebar-img3.png",
      title: "Collab Kicks",

    },
    {
      image: "sidebar-img4.png",
      title: "Culture Code",
    },
    {
      image: "sidebar-img3.png",
      title: "T-Shirts",
    },
    {
      image: "sidebar-img4.png",
      title: "Marvel",
    },
    {
      image: "sidebar-img1.png",
      title: "Relaxed-Fit",
    
    },
    {
      image: "sidebar-img2.png",
      title: "Socks",
    },

  ]

 
 const [sidebar,setSidebar]=useState(false)
  const [cartSidebar,setcartSidebar]=useState(false)
  return (
    
    <div className='men-page'>
      <Sidebar isOpen={sidebar} closeSidebar={()=>setSidebar(false)}>
         <ProductSlider products={menSidebarProducts}/>
         <Categories cards={menCategoriesImg}/>
         <ProductSlider products={menSidebarProducts}/>

      </Sidebar>
     <CartSidebar sidebarOpen={cartSidebar} close={()=>setcartSidebar(false)} />
      <Navbar toggleSidebar={()=>setSidebar(true)} cartSidebar={()=>setcartSidebar(true)}/>
      <Slider className="slider1" slides={menSlides1} />
      <Slider className="slider2" slides={menSlides2} />
      <FeaturesBar />

      <div className='collections'>
        <Collections>LATEST DROPS</Collections>
        <Slider slides={latestDrops} />
      </div>
      <Collections>NEW ARRIVALS</Collections>
       <ProductSlider products={products} />
      <Collections>CATEGORIES</Collections>
      <Categories cards={menCategoriesImg} />
      <Collections>CURATED FOR YOU</Collections>
      <Curated images={curatedImages} />
      <CategorySection products={products} buttons={menCategories}/>

      <Footer />
    </div>
  );
}

export default MenPage;

export const products=[
        {
            "product_id": "1",
            "title": "Peanuts:Works Out",
            "price_range": { "min": "700", "max": "900" },
            "stock": "80",
            "image_url": "newArrival-img1.png",
            "number_of_variants": "3",
            "variant_options": ["size", "color"],
            "variant_values": 
            
            [
                {
                    "size": {
                    "label": "Select Size",
                    "values": [
                            {
                                "1": { "label": "S", "key": "small" },
                                "2": { "label": "M", "key": "medium" },
                                "3": { "label": "L", "key": "large" }
                            }
                        ]
                    },
                    "color": {
                    "label": "Select Color",
                    "values": [
                            {
                                "1": { "label": "Red", "key": "red", "color_code": "#ff0000" },
                                "2": { "label": "Blue","key": "blue", "color_code": "#0000ff" }
                            }
                        ]
                    }
                }
            ],
            "variants": [
                { "id": "1a", "size": "medium","color": "red", "price": "850", "image_url": "/newArrival-img2.png", "stock": "20" },
                { "id": "1b", "size": "small", "color": "blue", "price": "800", "image_url": "/newArrival-img3.png", "stock": "40" },
                { "id": "1c", "size": "large", "color": "blue", "price": "900", "image_url": "/newArrival-img4.png", "stock": "20" }
            ]
        },

        {
            "product_id": "2",
            "title": "Casual T-Shirt",
            "price_range": { "min": null, "max": "500" },
            "stock": "120", // 50 + 70
            "image_url": "newArrival-img2.png",
            "number_of_variants": "2",
            "variant_options": ["size"],
            "variant_values": [
                {
                    "size": {
                        "label": "Select Size",
                        "values": [
                            {
                                "1": { "label": "M", "key": "medium" },
                                "2": { "label": "L", "key": "large" }
                            }
                        ]
                    }
                }
            ],
            "variants": [
                { "id": "2a", "size": "medium","price": "500"," stock": "50" },
                { "id": "2b", "size": "large", "price": "500", "stock": "70" }
            ]
        },

        {
            "product_id": "3",
            "title": "Sports Hoodie",
            "price_range": { "min": "1200", "max": "1500" },
            "stock": "50", // 20 + 30
            "image_url": "newArrival-img3.png",
            "number_of_variants": "2",
            "variant_options": ["size", "color"],
            "variant_values": [
                {
                    "size": {
                        "label": "Select Size",
                        "values": [
                            {
                                "1": { "label": "S", "key": "small" },
                                "2": { "label": "M", "key": "medium" }
                            }
                        ]
                    },
                    "color": {
                    "label": "Select Color",
                    "values": [
                            {
                                "1": { "label": "Black","key": "black", "color_code": "#000000" },
                                "2": { "label": "Grey", "key": "grey", "color_code": "#808080" }
                            }
                        ]
                    }
                }
            ],
            "variants": [
                { "id": "3a", "size": "small", "color": "black", "price": "1200", "image_url": "/newArrival-img1.png", "stock": "20" },
                { "id": "3b", "size": "medium","color": "grey", "price": "1500", "image_url": "/newArrival-img2.png", "stock": "30" }
            ]
        },

        {
            "product_id": "4",
            "title": "Denim Jeans",
            "price_range": { "min": null, "max": "1300" },
            "stock": "40", // 15 + 25
            "image_url": "newArrival-img4.png",
            "number_of_variants": "2",
            "variant_options": ["size"],
            "variant_values": [
                {
                    "size": {
                        "label": "Select Size",
                        "values": [
                            {
                                "1": { "label": "30", "key": "30" },
                                "2": { "label": "32", "key": "32" }
                            }
                        ]
                    }
                }
            ],
            "variants": [
                { "id": "4a", "size": "30", "price": "1000", "stock": "15" },
                { "id": "4b", "size": "32", "price": "1300", "stock": "25" }
            ]
        },

        {
            "product_id": "5",
            "title": "Summer Shirt",
            "price_range": { "min": "750", "max": "950" },
            "stock": "70", // 20 + 30
            "image_url": "newArrival-img2.png",
            "number_of_variants": "3",
            "variant_options": ["size", "color"],
            "variant_values": [
                {
                    "size": {
                        "label": "Select Size",
                        "values": [
                            {
                                "1": { "label": "S", "key": "small" },
                                "2": { "label": "M", "key": "medium" },
                                "3": { "label": "XL", "key": "xl" }
                            }
                        ]
                    },
                    "color": {
                        "label": "Select Color",
                        "values": [
                            {
                                "1": { "label": "Green", "key": "green", "color_code": "#00ff00" },
                                "2": { "label": "Yellow","key": "yellow", "color_code": "#ffff00" }
                            }
                        ]
                    }
                }
            ],
            "variants": [
                { "id": "5a", "size": "small", "color": "green", "price": "750", "image_url": "/newArrival-img1.png", "stock": "20" },
                { "id": "5b", "size": "medium","color": "yellow", "price": "800", "image_url": "/newArrival-img4.png", "stock": "30" },
                { "id": "5c", "size": "xl","color": "yellow", "price": "950", "image_url": "/newArrival-img3.png", "stock": "20" },
            ]
        }
    ];

