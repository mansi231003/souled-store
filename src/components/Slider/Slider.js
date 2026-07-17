import "./Slider.css"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import 'swiper/css'
import { useRef} from "react";

export default function Slider({ slides, className,tag }) {
    const navigate = useNavigate();
   const swiperRef = useRef(null); 
    
    return (
        <>
            <div className={className}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}

                    pagination={{
                        clickable: true
                    }}
                    onSwiper={(swiper) => {swiperRef.current = swiper;}} 
                    navigation
     
                    
                    // autoplay={{
                    //     delay:3000,
                    //     disableOnInteraction:false
                    // }}
                    
                    loop={true}
                    slidesPerView={1}
                >
                    {slides.map((item,index) => (
                        <SwiperSlide key={index}>
                            <img onClick={() => navigate(`/filter/${tag}`)} className="cursor-pointer w-full" src={item.image} alt="" />
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div onClick={() => swiperRef.current.slidePrev()} className="pl-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg></div>
                <div onClick={() => swiperRef.current.slideNext()} className="right-0"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg></div>
            </div>
        </>
    )
}