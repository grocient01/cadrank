
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';


const sponsorList = [
    {
        imgUrl: 'assets/images/sponsor/google-analytic.webp',
        imgAlt: 'sponsor rajibraj91 rajibraj',
    },
    {
        imgUrl: 'assets/images/sponsor/google-2.png',
        imgAlt: 'sponsor rajibraj91 rajibraj',
    },
    {
        imgUrl: 'assets/images/sponsor/google-3.png',
        imgAlt: 'sponsor rajibraj91 rajibraj',
    },
    {
        imgUrl: 'assets/images/sponsor/google-4.webp',
        imgAlt: 'sponsor rajibraj91 rajibraj',
    },
    {
        imgUrl: 'assets/images/sponsor/google-5.webp',
        imgAlt: 'sponsor rajibraj91 rajibraj',
    },
    {
        imgUrl: 'assets/images/sponsor/google-6.webp',
        imgAlt: 'sponsor rajibraj91 rajibraj',
    },
]


const Sponsor = () => {
    return (
        <div className="sponsor-section section-bg">
            <div className="container">
                <div className="section-wrapper">
                    <div className="sponsor-slider">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            loop={'true'}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            breakpoints={{
                                0: {
                                    width: 0,
                                    slidesPerView: 2,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 3,
                                },
                                1200: {
                                    width: 1200,
                                    slidesPerView: 5.5,
                                },
                            }}
                        >
                            {sponsorList.map((val, i) => (
                                <SwiperSlide key={i}>
                                    <div className="sponsor-iten">
                                        <div className="sponsor-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sponsor;