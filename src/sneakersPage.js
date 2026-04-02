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

function SneakersPage() {

  const sneakers = [
    {
      image: "sneaker1.png",
      title: "Peanuts:Works Out",
      category: "T-Shirts",
      price: 799
    },
    {
      image: "sneaker2.png",
      title: "Ben10:Tennyson",
      category: "Oversized Jerseys",
      price: 1199
    },
    {
      image: "sneaker3.png",
      title: "Relaxed-Fit Shirt:Champagne",
      category: "Cotton Linen Shirts",
      price: 1799
    },
    {
      image: "sneaker4.png",
      title: "Oversized T-Shirt:Wan Blue",
      category: "Oversized T-Shirts",
      price: 1099
    },
    {
      image: "sneaker3.png",
      title: "Peanuts:Works Out",
      category: "T-Shirts",
      price: 799
    },
    {
      image: "sneaker4.png",
      title: "Ben10:Tennyson",
      category: "Oversized Jerseys",
      price: 1199
    },
    {
      image: "sneaker1.png",
      title: "Relaxed-Fit Shirt:Champagne",
      category: "Cotton Linen Shirts",
      price: 1799
    },
    {
      image: "sneaker2.png",
      title: "Oversized T-Shirt:Wan Blue",
      category: "Oversized T-Shirts",
      price: 1099
    },

  ]

  const sneakerSlides1 = [
    { image: "sneaker-img1.png" },
    { image: "sneaker-img2.png" },
    { image: "man-img3.png" },
    { image: "man-img4.png" }

  ]
  const sneakerSlides2 = [
    { image: "sneaker-img1.avif" },
    { image: "sneaker-img2.avif" },
    { image: "man-img3.avif" },
    { image: "man-img4.avif" },

  ]

  const sneakersCategoryImg = [
    { img: "sneaker5.png" },
    { img: "sneaker6.png" },
    { img: "sneaker7.png" },
    { img: "sneaker8.png" },
    { img: "sneaker9.png" },
    { img: "sneaker10.png" },

  ]

  const curatedImages = [
    { img: "curated-img1.png" },
    { img: "curated-img2.png" },
    { img: "curated-img3.png" },
    { img: "curated-img4.png" },
  ]

  const dropZone = [
    { image: "drop-img1.png" },
    { image: "drop-img2.png" },
    { image: "drop-img3.png" },

  ]

  const menSidebarProducts=[
     {
      image: "newArrival-img1.png",
      title: "Summer Home",

    },
    {
      image: "newArrival-img2.png",
      title: "Hot Merch",
    },
    {
      image: "newArrival-img3.png",
      title: "Collab Kicks",

    },
    {
      image: "newArrival-img4.png",
      title: "Culture Code",
    },
    {
      image: "newArrival-img3.png",
      title: "T-Shirts",
    },
    {
      image: "newArrival-img4.png",
      title: "Marvel",
    },
    {
      image: "newArrival-img1.png",
      title: "Relaxed-Fit",
    
    },
    {
      image: "newArrival-img2.png",
      title: "Socks",
    },

  ]

  const sneakersCategory=[
     'Trending',
      'Men High Top Sneakers',
      'Men Low Top Sneakers',
      'Men Mid Top Sneakers',
      'Women Mid Top Sneakers',
      'Women Low Top Sneakers',
      'Socks'
  ]

  const [sidebar,setSidebar]=useState(false)

  return (
    
    <div className='sneaker-page'>
      <Sidebar isOpen={sidebar} closeSidebar={()=>setSidebar(false)}>
         <ProductSlider products={menSidebarProducts}/>
         <Categories cards={sneakersCategoryImg}/>
         <ProductSlider products={menSidebarProducts}/>

      </Sidebar>
     
      <Navbar toggleSidebar={()=>setSidebar(true)}/>
      <Slider className="slider1" slides={sneakerSlides1} />
      <Slider className="slider2" slides={sneakerSlides2} />
      <FeaturesBar />

      <div className='collections'>
        <Collections>DROP ZONE</Collections>
        <Slider slides={dropZone} />
      </div>
      <Collections>FRESH OUT THE LAB</Collections>
      <ProductSlider products={sneakers} />
      <Collections>CATEGORIES</Collections>
      <Categories cards={sneakersCategoryImg} />
      <Collections>CURATED FOR YOU</Collections>
      <Curated images={curatedImages} />
      <CategorySection products={sneakers} buttons={sneakersCategory}/>

      <Footer />
    </div>
  );
}

export default SneakersPage;
