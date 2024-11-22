import React from "react";
import { ReactComponent as InstaIcon } from "../assets/me/instagram.svg";
import { ReactComponent as MailIcon } from "../assets/me/mail.svg";
import { ReactComponent as Logo } from "../assets/me/logo.svg";

const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row mx-4 pt-12 pb-10">
            <div className="w-full  mb-10 md:mb-0">
                <Logo />
            </div>
            <div className='ml-auto w-[650px]'>
                <div className="text-graysecondary flex items-center">
                    <InstaIcon className="w-6 h-6 mr-2" />
                    trudorudo
                </div>
                <div className="text-graysecondary mt-2 flex items-center">
                    <MailIcon className="w-6 h-6 mr-2" />
                    k.trudorudo@gmail.com
                </div>
            </div>
        </div>
    )
}

export default Footer;
