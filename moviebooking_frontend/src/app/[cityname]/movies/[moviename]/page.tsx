import React from 'react'
import { BsFillStarFill, BsShare } from 'react-icons/bs'
import './MoviePage.css'
const MoviePage = () => {

     const movie={
        wideposter:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/stree-2-et00364249-1721725490.jpg",
        portraitposter:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
        title:"Stree 2:Sarkate Ka Aatank",
        rating:8.5,
        halls:[
            "2D",
            "3D"
        ],
        languages:[
            "Hindi"
        ],
        duration:"2h 29m",
        type:"",
        releasedate:"",
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
        ]
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
                    <div className='halls_language'>
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
      <div className='c2'></div>
    </div>
  )
}

export default MoviePage
