import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode,Pagination } from 'swiper/modules';

import { MovieCardType } from '@/types/types';
import MovieCard from './MovieCard';

const MovieCarousel = () => {
    const Movies:MovieCardType[]=[
        {
            title:"Stree 2: Sarkate Ka Atank",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjE2LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364249-sdjypzxxnn-portrait.jpg",
            _id:"1",
            rating:8.5,
            type:"Comedy/Horror"
        },
        {
            title:"Deadpool & Wolverine",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAxMTguNUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00341295-hkxdcvckhs-portrait.jpg",
            _id:"2",
            rating:8.7,
            type:"Action/Adventure/Comedy"
        },
        {
        title:"Vedaa",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTUuNksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386426-sztympuezh-portrait.jpg",
            _id:"3",
            rating:8.5,
            type:"Action/Adventure/Comedy"
        },
        {
            title:"Bad Newz",
                imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4yLzEwICA2NS45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00391805-avuuxnlqzz-portrait.jpg",
                _id:"4",
                rating:8.5,
                type:"Comedy"
        },
        {
            title:"Vedaa",
                imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTUuNksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386426-sztympuezh-portrait.jpg",
                _id:"6",
                rating:8.5,
                type:"Action/Adventure/Comedy"
        }
    ];

  return (
    <div className='sliderout'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
        }}
        
        breakpoints={{
            '@0.00':{
                slidesPerView:1,
                spaceBetween:2,
            },
            '@0.75':{
                slidesPerView:2,
                spaceBetween:2,
            },
            '@1.00':{
                slidesPerView:3,
                spaceBetween:2,
            },
            '@1.50':{
                slidesPerView:6,
                spaceBetween:2,
            },

        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
            Movies.map((Movie)=>{
                return(
                    <SwiperSlide>
                        <MovieCard {...Movie}/>
                    </SwiperSlide>
                )
            })
        }

      </Swiper>
      
    </div>
  )
}

export default MovieCarousel
