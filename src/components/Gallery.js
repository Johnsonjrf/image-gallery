import React, { useState } from 'react'
import Logo from '../assets/feature-1.png';
import Logo1 from '../assets/feature-2.png';
import Logo2 from '../assets/feature-3.png';
import Logo3 from '../assets/feature-4.png';
import Logo4 from '../assets/house-1.png';
import Logo5 from '../assets/house-2.png';
import Logo6 from '../assets/house-3.png';
import Logo7 from '../assets/house-4.png';
import Logo8 from '../assets/house-5.png';
import Logo9 from '../assets/image-s1.png';
import Logo10 from '../assets/image-s2.png';
import Logo11 from '../assets/image-s3.png';
import Logo12 from '../assets/image-s4.png';
import Logo13 from '../assets/image-s5.png';

const Gallery = () => {
    const [imageDetails, setImageDetails] = useState([
        {
            src: Logo,
            name: "movie"
        },
        {
            src: Logo1,
            name: "movie"
        },
        {
            src: Logo2,
            name: "movie"
        },
        {
            src: Logo3,
            name: "movie"
        },
        {
            src: Logo4,
            name: "house"
        },
        {
            src: Logo5,
            name: "house"
        },
        {
            src: Logo6,
            name: "house"
        },
        {
            src: Logo7,
            name: "house"
        },
        {
            src: Logo8,
            name: "house"
        },
        {
            src: Logo9,
            name: "house"
        },
        {
            src: Logo10,
            name: "person"
        },
        {
            src: Logo11,
            name: "house"
        },
        {
            src: Logo12,
            name: "house"
        },
        {
            src: Logo13,
            name: "house"
        }
    ])


  return (
    <div className=''>
        <div className='hero'>
            <input type='text' placeholder='search...'/>
        </div>
        <div className='imageContainer'>
            {imageDetails.map(image => (
                <div className='imageDetails'>
                 <img src={image.src} alt='hotel'/>
                 <span className='image-name'>{image.name}</span>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Gallery