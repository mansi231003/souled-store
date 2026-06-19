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
// import { useState } from 'react';
import { womenProducts } from './data/womenProducts';

function WomenPage({openCart,sidebarOpen,setSidebarOpen}) {


  const womenSlides1 = [
    { image: "woman-img1.png" },
    { image: "woman-img2.png" },
    { image: "man-img3.png" },
    { image: "man-img4.png" }

  ]
  const womenSlides2 = [
    { image: "woman-img1.avif" },
    { image: "woman-img2.avif" },
    // { image: "man-img3.avif" },
    // { image: "man-img4.avif" },

  ]

  const womenCategoriesImg = [
    { img: "women-category1.png" },
    { img: "women-category2.png" },
    { img: "women-category3.png" },
    { img: "women-category4.png" },
    { img: "women-category1.png" },
    { img: "women-category2.png" },

  ]

  const womenCuratedImages = [
    { img: "w-curated-img1.png" },
    { img: "w-curated-img2.png" },
    { img: "w-curated-img3.png" },
    { img: "w-curated-img4.png" },
  ]

  const newCollections = [
    { image: "new-coll1.png" },
    { image: "new-coll2.png" },
    { image: "latestDrop-img3.png" },

  ]

  const womenSidebarProducts=[
     {
      image_url: "w-sidebar-img.png",
      title: "Summer Home",

    },
    {
      image_url: "w-sidebar-img2.png",
      title: "Hot Merch",
    },
    {
      image_url: "w-sidebar-img3.png",
      title: "Collab Kicks",

    },
    {
      image_url: "w-sidebar-img4.png",
      title: "Culture Code",
    },
    {
      image_url: "w-sidebar-img3.png",
      title: "T-Shirts",
    },
    {
      image_url: "w-sidebar-img.png",
      title: "Marvel",
    },
    {
      image_url: "w-sidebar-img4.png",
      title: "Relaxed-Fit",
    
    },
    {
      image_url: "w-sidebar-img2.png",
      title: "Socks",
    },

  ]

  const womenCategories=[
        "Trending",
        "Women T-Shirts",
        "Women Shirts",
        "Women Jeans",
        "Women Pants",
        "Women Cropped Tops",
        "Women Shorts",
        "Women Dresses",
        "Women Winter Wear",
        "Women High Top Sneakers",
        "Women Low Top Sneakers"
  ]

  // const [sidebar,setSidebar]=useState(false);

  return (
    <div className='women-page'>
      <Sidebar isOpen={sidebarOpen} closeSidebar={()=>setSidebarOpen(false)}>
         <ProductSlider products={womenSidebarProducts} sidebar={true}/>
         <Categories cards={womenCategoriesImg} tag="women"/>
         <ProductSlider products={womenSidebarProducts}/>

      </Sidebar>
     
      <Navbar toggleSidebar={()=>setSidebarOpen(true)} cartSidebar={openCart}/>
      <Slider className="slider1" slides={womenSlides1} />
      <Slider className="slider2" slides={womenSlides2} />
      <FeaturesBar />

      <div className='collections'>
        <Heading>NEW IN:COLLLECTIONS</Heading>
        <Slider slides={newCollections} />
      </div>
      <Heading>NEW ARRIVALS</Heading>
      <ProductSlider products={womenProducts} />
      <Heading>CATEGORIES</Heading>
      <Categories cards={womenCategoriesImg} tag="women" />
      <Heading>CURATED FOR YOU</Heading>
      <Curated images={womenCuratedImages} />
      <CategorySection products={womenProducts} buttons={womenCategories}/>
        

      <Footer />
    </div>
  );
}

export default WomenPage;
