import React from 'react'



const PhotoBlock = ({ img }) => {
    return (
        <div className='mt-16'>
            <img src={img} alt="1" className="w-full  object-cover" />
        </div>
    )
}


export default PhotoBlock