import React from 'react'

import photo1 from "../assets/big_photos/1.jpg"


const MainSection = () => {
    return (
        <>
            <img src={photo1} alt="1" className="w-full  object-cover" />
            <div className='-mt-20 md:-mt-60 text-white ml-2 md:ml-8 mb-2'>
                <div className="baijamjureelight text-6xl md:text-[180px] md:leading-[220px] fade-up">
                    KTFOTO
                </div>
                <div className="intermed ml-2 -mt-4 leading-9 text-sm md:text-lg fade-up delay">
                    Just an attempt to show the beauty I see
                </div>
            </div>
        </>
    )
}


export default MainSection