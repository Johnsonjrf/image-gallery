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
import {DragDropContext, Draggable} from 'react-beautiful-dnd'
import { StrictModeDroppable as Droppable } from '../helpers/StrictModeDroppable';


const imageDetails = [
    {
        src: Logo,
        name: "movie",
        id: 1
    },
    {
        src: Logo1,
        name: "movie",
        id: 2
    },
    {
        src: Logo2,
        name: "movie",
        id: 3
    },
    {
        src: Logo3,
        name: "movie",
        id: 4
    },
    {
        src: Logo4,
        name: "house",
        id: 5
    },
    {
        src: Logo5,
        name: "house",
        id: 6
    },
    {
        src: Logo6,
        name: "house",
        id: 7
    },
    {
        src: Logo7,
        name: "house",
        id: 8
    },
    {
        src: Logo8,
        name: "house",
        id: 9
    },
    {
        src: Logo9,
        name: "house",
        id: 10
    },
    {
        src: Logo10,
        name: "person",
        id: 11
    },
    {
        src: Logo11,
        name: "house",
        id: 12
    },
    {
        src: Logo12,
        name: "house",
        id: 13
    },
    {
        src: Logo13,
        name: "house",
        id: 14
    }
]
const Gallery = () => {
    
    const [cards, setCards] = useState(imageDetails);
    const [search, setSearch] = useState('')

    const handleOnDragEnd = (result) => {
        const items = Array.from(cards);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    }
  return (
    <div className=''>
        <div className='hero' onChange={(e) => setSearch(e.target.value)}>
            <input type='text' placeholder='search e.g house, movie'/>
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='imageContainer'>
            {(provided) => (
                
            
            <div className='imageContainer' {...provided.droppableProps} ref={provided.innerRef}>
                {imageDetails.filter(item => {
                 return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                }).map((image, index) => (
                    <Draggable  key={image.id} draggableId={image.id.toString()} index={index}>
                    {(provided) => (

                   <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <div className='imageDetails' >
                        <img src={image.src} alt='hotel'/>
                        <span className='image-name'>{image.name}</span>
                    </div>
                    </div>
                    )}
                    </Draggable>
            ))}
            {provided.placeholder}
            </div>
        )}

            </Droppable>
        </DragDropContext>
    </div>
  )
}

export default Gallery