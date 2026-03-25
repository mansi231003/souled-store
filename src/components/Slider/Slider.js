import "./Slider.css"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination,Autoplay} from 'swiper/modules';
import 'swiper/css'

export default function Slider({ slides = [], className }) {
    return (
        <>
            <div className={className}>
                <Swiper 
                    pagination={{
                        clickable: true
                    }}
                    navigation={{
                        nextEl: ".next-btn",
                        prevEl: ".prev-btn"
                    }}
                    modules={[Navigation,Pagination,Autoplay]}
                    // autoplay={{
                    //     delay:3000,
                    //     disableOnInteraction:false
                    // }}
                    loop={true}
                    slidesPerView={1}
                >
                    {slides.map((item) => (
                        <SwiperSlide>
                            <img src={item.image} />
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className="prev-btn pl-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg></div>
                <div className="next-btn right-0"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg></div>
            </div>
        </>
    )
}