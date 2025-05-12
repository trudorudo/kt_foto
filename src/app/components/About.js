import React from "react";
import me from "../assets/me/me.jpg";
import insta from "../assets/me/insta.png";

const About = () => {
    const INSTA_URL = "https://www.instagram.com/_ktfoto/";
    return (
        <div className="flex flex-col lg:flex-row bg-black mt-14 pt-28">
            <div className="pl-16 pr-16 pt-6 justify-center">
                <img src={me} alt="me" className="h-[15rem]  rounded-full object-cover" />
            </div>
            <div className=" h-screen text-white  md:text-2xl pl-8 pt-4 space-grotesk-style">
                Kristina Trudorudo is a visual storyteller with a deep passion for capturing honest moments in everyday life. Drawn to faces, street scenes, and the way light shapes emotion, she uses photography as a way to share the beauty she sees in the world. Kristina is a member of Soho Photo Gallery and has exhibited her work in solo shows in New York City. Her photography invites viewers to slow down and notice the poetry in the ordinary. For collaborations or print inquiries, she welcomes you to get in touch.
                <div className="pt-10 space-grotesk-style flex flex-col lg:flex-row">
                    <div>
                        <div>DIRECT CONTACT</div>
                        <div>k.trudorudo@gmail.com</div>
                    </div>
                    <div className="md:ml-auto mt-2">
                        <a href={INSTA_URL} target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="insta" className="h-10" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default About