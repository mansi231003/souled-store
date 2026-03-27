import "./ProductSlider.css"
import ProductCard from "../Product card/ProductCard"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css/navigation';
import { Navigation, Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css'

export default function ProductSlider({ products }) {
    return (
        <>
            {/* <div className="flex justify-center p-7 font-bold text-[26px]">{children}</div> */}
            <div className="collections relative">
                <Swiper
                       navigation={{
                        nextEl: ".next-button",
                        prevEl: ".prev-button"
                    }}
                      pagination={{
                        clickable: true
                    }}
                    modules={[Navigation,Pagination]}

                    slidesPerView={4}
                    slidesPerGroup={4}
                    spaceBetween={10}
                    breakpoints={{
                        0:{slidesPerView:2,slidesPerGroup:2},
                        800:{slidesPerView:4}
                    }}
                    loop={true}
                    >
                    {
                        products.map((item) => (
                            <SwiperSlide><ProductCard  {...item} /></SwiperSlide>
                        ))
                    }
                </Swiper>

                <div className="prev-button pl-3"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg></div>
                <div className="next-button right-0"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg></div>
            </div>
        </>
    )
}