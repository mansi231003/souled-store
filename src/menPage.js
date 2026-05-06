import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Heading from './components/Heading/Heading';
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
import { menProducts } from './data/menProducts';

function MenPage() {

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
        <Heading>LATEST DROPS</Heading>
        <Slider slides={latestDrops} />
      </div>
      <Heading>NEW ARRIVALS</Heading>
       <ProductSlider products={menProducts} />
      <Heading>CATEGORIES</Heading>
      <Categories cards={menCategoriesImg} tag="men" />
      <Heading>CURATED FOR YOU</Heading>
      <Curated images={curatedImages} />
      <CategorySection products={menProducts} buttons={menCategories}/>

      <Footer />
    </div>
  );
}

export default MenPage;
