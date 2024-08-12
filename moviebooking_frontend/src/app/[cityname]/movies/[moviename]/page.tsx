"use client"
import React from 'react'
import { BsFillStarFill, BsShare } from 'react-icons/bs'
import './MoviePage.css'
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel'


import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper,SwiperSlide} from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules'
import CelebCard from '@/components/CelebCard/CelebCard'

const MoviePage = () => {

     const movie={
        wideposter:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/stree-2-et00364249-1721725490.jpg",
        portraitposter:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
        title:"Stree 2:Sarkate Ka Aatank",
        rating:8.5,
        halls:[
            "2D ", 
            "3D"
        ],
        languages:[
            "Hindi"
        ],
        duration:"2h 29m",
        type:"Comedy/Horror",
        releasedate:"15 Aug 2024",
        cast:[
            {
                _id:"1",
                name:"Shraddha Kapoor",
                role:"Actor",
                imageUrl:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg"
            },
            {
                _id:"1",
                name:"Shraddha Kapoor",
                role:"Actor",
                imageUrl:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg"
            },
            {
                _id:"1",
                name:"Shraddha Kapoor",
                role:"Actor",
                imageUrl:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg"
            },
            {
                _id:"1",
                name:"Shraddha Kapoor",
                role:"Actor",
                imageUrl:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg"
            },
            {
                _id:"1",
                name:"Shraddha Kapoor",
                role:"Actor",
                imageUrl:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg"
            },
            {
                _id:"1",
                name:"Shraddha Kapoor",
                role:"Actor",
                imageUrl:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg"
            }
        ],
        crew:[
            {
                _id:"1",
                name:"Amar Kaushik",
                role:"Director",
                imageUrl:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amar-kaushik-iein008750-24-03-2017-14-02-49.jpg"
            },
            {
                _id:"1",
                name:"Amar Kaushik",
                role:"Director",
                imageUrl:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amar-kaushik-iein008750-24-03-2017-14-02-49.jpg"
            },
            {
                _id:"1",
                name:"Amar Kaushik",
                role:"Director",
                imageUrl:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amar-kaushik-iein008750-24-03-2017-14-02-49.jpg"
            },
            {
                _id:"1",
                name:"Amar Kaushik",
                role:"Director",
                imageUrl:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amar-kaushik-iein008750-24-03-2017-14-02-49.jpg"
            },
            {
                _id:"1",
                name:"Amar Kaushik",
                role:"Director",
                imageUrl:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amar-kaushik-iein008750-24-03-2017-14-02-49.jpg"
            }


        ],
        about:"After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it`s up to Bicky and his friends to save their town and loved ones."
        

     }    
  return (
    <div className='moviepage'>
      <div className='c1' style={{
        backgroundImage: `url(${movie.wideposter})`
      }}>
        <div className='c11'>
            <div className='left'>
                <div className='movie_poster'
                    style={{
                        backgroundImage: `url(${movie.portraitposter})`
                    }}
                >
                    <p>In cinemas</p>
                </div>     
                <div className='movie_details'>
                    <p className='title'>
                        {movie.title}
                    </p>
                    <p className='rating'>
                        <BsFillStarFill className='star' />&nbsp;&nbsp;
                        {movie.rating}/10
                    </p>
                    <div className='halls_languages'>
                        <p className='halls'>
                           {
                             movie.halls.map((hall,index) => {
                                return(
                                    <span key={index}>{hall}</span>
                                )
                            })
                           }
                        </p> 
                        <p className='languages'>
                            {movie.languages.map((language,index)=>{
                                return(
                                    <span key={index}>{language}</span>
                                )
                            })}
                        </p>
                    </div>
                    <p className='duration_type_releasedat'>
                        <span className='duration'>
                            {movie.duration}
                        </span>
                        <span>.</span>
                        <span className='type'>
                            {movie.type}
                        </span>
                        <span>.</span>
                        <span className='releasedat'>
                            {movie.releasedate}
                        </span>
                    </p>
                    <button className='bookbtn'>Book Tickets</button>
                </div>
            </div>
            <div className='right'>

               <button className='sharebtn'><BsShare className='shareicon'/>Share</button>
            </div>
        </div>
        </div>
      <div className='c2'>
        <h1>About the Movie</h1>
        <p>{movie.about}</p>
        <div className='line'></div>
        <h1>Cast</h1>
        <div className='circlecardslider'>
            <Swiper
                slidesPerView={1}
                spaceBetween={1}
                freeMode={true}
                pagination={{
                    clickable:true,
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
                        slidesPerView:4,
                        spaceBetween:2,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className='mySwiper'
            >
                {
                    movie.cast.map((cast,index) => {
                        return (
                            <SwiperSlide key={index}>
                                <CelebCard {...cast}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
        <div className='line'></div>
        <h1>Crew</h1>
        <div className='circlecardslider'>
        <Swiper
                slidesPerView={1}
                spaceBetween={1}
                freeMode={true}
                pagination={{
                    clickable:true,
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
                        slidesPerView:4,
                        spaceBetween:2,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className='mySwiper'
            >
                {
                    movie.crew.map((crew,index) => {
                        return (
                            <SwiperSlide key={index}>
                                <CelebCard {...crew}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
        <div className='line'></div>
        <h1>You might also like</h1>
        <MovieCarousel/>
      </div>
    </div>
  )
}

export default MoviePage
