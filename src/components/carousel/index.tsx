import './index.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import HamburguesImage from '../../assets/hamburgues.jpg'
import DessertImage from '../../assets/dessert.jpg'

interface CarouselDto {
}

const Carousel = ({ }: CarouselDto) => {


    return <Swiper className="mySwiper" autoplay={{
        delay: 2500,
        disableOnInteraction: true,
    }}
        centeredSlides={true}
        modules={[Autoplay]}>
        <SwiperSlide><img className='main-image' src={HamburguesImage} alt="Hamburgues" /></SwiperSlide>
        <SwiperSlide><img className='main-image' src={DessertImage} alt="Postre" /></SwiperSlide>
    </Swiper>
}

export default Carousel;