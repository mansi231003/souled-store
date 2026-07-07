import Navbar from './components/Navbar/Navbar';
import Heading from './components/Heading/Heading';
import ProductSlider from './components/Product slider/ProductSlider';
import Slider from './components/Slider/Slider';
import Categories from './components/Categories/Categories';
import Curated from './components/Curated for YOU/Curated';
import CategorySection from './components/Category Section/CategorySection';
import Footer from './components/Footer/Footer';
import './App.css';
import FeaturesBar from './components/Features bar/FeaturesBar';
import { womenProducts } from './data/womenProducts';

function WomenPage({sidebarOpen,setSidebarOpen}) {


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
  

  const womenCategories=[
        "Trending",
       "women Cotton Linen Shirts",
       "women Drop Cut T-Shirts",
       "women Easy Fit Vests",
       "women Exclusive",
       "women Hooded T-Shirts",
       "women Full Sleeve T-Shirts",
    
  ]


  return (
    <div className='women-page'>
      <Navbar toggleSidebar={()=>setSidebarOpen(true)}/>
      <Slider className="slider1" slides={womenSlides1} tag="women"  />
      <Slider className="slider2" slides={womenSlides2} tag="women" />
      <FeaturesBar />

      <div className='collections'>
        <Heading>NEW IN:COLLLECTIONS</Heading>
        <Slider slides={newCollections} tag="women"/>
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
