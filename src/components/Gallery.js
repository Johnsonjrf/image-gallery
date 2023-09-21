import React from 'react'
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
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Gallery = () => {
    const imageDetails = [Logo, Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10, Logo11, Logo12, Logo13]


  return (
    <DragDropContext>
        <Droppable droppableId='imageContainer'>
        {(provided) => {

        
            <div className='imageContainer' {...provided.droppableProps} ref={provided.innerRef}>
                {imageDetails.map(image => (
                    <div className='imageDetails'>
                        <img src={image} alt='hotel'/>
                    </div>
                 ))}
            </div>
        }}
    </Droppable>
    </DragDropContext>
  )
}

export default Gallery