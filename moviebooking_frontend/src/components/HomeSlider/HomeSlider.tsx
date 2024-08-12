import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
const width=window.innerWidth;
const height=window.innerHeight;

const HomeSlider = () => {

    const [banners, setBanners] = useState([
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1722426637448_humareramwebshowcase1240x300.jpg'
        },
        {
            imgUrl: 'https://assetscdn1.paytm.com/images/catalog/view_item/2800917/1723297056043.jpg?format=webp&imwidth=1750'
        },
        {
            imgUrl: 'https://assetscdn1.paytm.com/images/catalog/view_item/2756310/1721931372196.jpg?format=webp&imwidth=1750'
        }
    ]);

    return (
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
            loop={true}
            spaceBetween={30}
        >
            {
                banners.map((banner, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div style={{ position: 'relative'}}>
                                <Image src={banner.imgUrl} alt="banner" width={width} height={height /2}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
}

export default HomeSlider;
