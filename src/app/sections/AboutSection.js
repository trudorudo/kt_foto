import React from 'react'

import me from "../assets/me/me.jpg";
const AboutSection = () => {
    const INSTA_URL = "https://www.instagram.com/trudorudo/";
    const MAIN_URL = "mailto:k.trudorudo@gmail.com"
    return (
        <div id="contactsSection" className="flex flex-col md:flex-row mt-10 mb-10 md:mt-20 md:mb-16">
            {/* Left: Text */}
            <div className="flex flex-col text-white mx-5 w-full md:w-1/2">
                <div className="baijamjureeextralight text-[64px]">ABOUT</div>
                <div className="mt-auto">
                    <div className="intermed text-xl text-white">
                        Kristina Trudorudo is a visual storyteller with a deep passion for capturing honest moments in everyday life. Drawn to faces, street scenes, and the way light shapes emotion, she uses photography as a way to share the beauty she sees in the world. Kristina is a member of Soho Photo Gallery and has exhibited her work in solo shows in New York City. Her photography invites viewers to slow down and notice the poetry in the ordinary. For collaborations or print inquiries, she welcomes you to get in touch.
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

            {/* Right: Image */}
            <div className="w-full md:w-1/2 md:ml-auto mr-4 mt-10 md:mt-0">
                <img src={me} alt="KT portrait" className="w-full max-h-[80vh] object-cover" />
            </div>
        </div>


    )
}

export default AboutSection