import "./Herosection.css"
import Slider from "../Slider/Slider"
import FeaturesBar from "../Features bar/FeaturesBar"

export default function Herosection() {
     const menSlides1=[
        {image:"man-img1.png"},
        {image:"man-img2.png"},
        {image:"man-img3.png"},
        {image:"man-img4.png"}
    
      ]
        const menSlides2=[
        {image:"man-img1.avif"},
        {image:"man-img2.avif"},
        {image:"man-img3.avif"},
        {image:"man-img4.avif"},

      ]

    return (
        <>
            <div className="hero-section">
                <div className="relative"><Slider className="slider1" slides={menSlides1}/>
                <Slider className="slider2" slides={menSlides2}/></div>
                <FeaturesBar/>
            </div>
        </>
    )
}