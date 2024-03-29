
import React, { useState } from 'react'
import './App.css';
const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];

const ImageCarousel = () => {

    const [current,setCurrent ]= useState(0)

    function prevslide(){
        setCurrent(current === 0 ? images.length-1 : current-1)
    }
    function nextslide(){
        setCurrent(current === images.length-1 ? 0: current+1)

    }

  return (
    <div>
        <h2>Project ImageCarousel</h2>
        <div className='slider'>
            <div className='left-arrow' onClick={prevslide}> left</div>
            <div className='right-arrow' onClick={nextslide}> right</div>
            {
                images.map((image,index)=>current===index && (
                    <div key={image} className='slide'>
                        <img src={image} alt="" />

                    </div>
                ))
            }
            
        </div>

    </div>
  )
}

export default ImageCarousel