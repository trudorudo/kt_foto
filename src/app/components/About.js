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
                Hey there, it's KT. <br />
                I love to capture moments and tell stories through my lens.<br />
                I love faces, streets and to play with light.<br />
                And it's a little attempt to show the beauty I see...<br />
                Shoot me an email if you want to collaborate or get my prints.
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