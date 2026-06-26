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
    {img:"men-category1.png"},
    {img:"men-category2.png"},
    {img:"men-category3.png"},
    {img:"men-category4.png"},
    {img:"men-category5.png"},
    {img:"men-category6.png"},

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

  const menCategories = [
    "Trending",
    "Cotton Linen Shirts",
    "Drop Cut T-Shirts",
    "Easy Fit Vests",
    "Exclusive",
    "Hooded T-Shirts",
    "Men Full Sleeve T-Shirts",
    "Men Hooded T-Shirts",
  ]

 

  return (

    <div className='men-page'>
      <Navbar />
      <Slider className="slider1" slides={menSlides1} tag="men" />
      <Slider className="slider2" slides={menSlides2} tag="men"/>
      <FeaturesBar />

      <div className='collections'>
        <Heading>LATEST DROPS</Heading>
        <Slider slides={latestDrops} tag="men" />
      </div>
      <Heading>NEW ARRIVALS</Heading>
      <ProductSlider products={menProducts} />
      <Heading>CATEGORIES</Heading>
      <Categories cards={menCategoriesImg} tag="men" />
      <Heading>CURATED FOR YOU</Heading>
      <Curated images={curatedImages} />
      <CategorySection products={menProducts} buttons={menCategories} />

      <Footer />
    </div>
  );
}

export default MenPage;
