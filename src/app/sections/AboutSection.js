import React from 'react'

import me from "../assets/me/me.jpg";

const AboutSection = () => {
    const INSTA_URL = "https://www.instagram.com/trudorudo/";
    const MAIN_URL = "mailto:k.trudorudo@gmail.com"
    return (
        <div id="contactsSection" className='flex flex-col md:flex-row mt-20 mb-16 '>
            <div className='flex flex-col w-full text-white mx-5'>
                <div className='baijamjureeextralight text-[64px]'>ABOUT</div>
                <div className=' mt-auto '>
                    <div className='intermed text-xl text-white'>
                        Hey there, it's KT.
                        I love to capture moments and tell stories through my lens. I love faces, streets and to play with light. And it's a little attempt to show the beauty I see... Shoot me an email if you want to collaborate or get my prints.
                    </div>
                    <div className="flex mt-8 mb-8 md:mb-0">
                        <a
                            href={INSTA_URL}
                            className="interextramed text-lg text-gray underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                        <a
                            href={MAIN_URL}
                            className="interextramed text-lg text-gray ml-6 underline"
                        >
                            Mail
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:ml-auto mr-4">
                <img src={me} alt="1" className=" w-[650px] object-cover" />
            </div>
        </div>

    )
}

export default AboutSection