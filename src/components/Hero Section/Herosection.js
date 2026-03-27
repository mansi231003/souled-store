import "./Herosection.css"
import FeaturesBar from "../Features bar/FeaturesBar"

export default function Herosection({children}) {
   

    return (
        <>
            <div className="hero-section">{children}
                {/* <div className="relative"><Slider className="slider1" slides={menSlides1}/> */}
                {/* <Slider className="slider2" slides={menSlides2}/></div> */}
                {/* <FeaturesBar/> */}
            </div>
        </>
    )
}