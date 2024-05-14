import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';




const Header = () => {

    let Links = [
        { name: "GALLERY", link: "/" },
        { name: "ABOUT", link: "/about" },
    ];

      const [open, setOpen] = useState(false);
    let navigate = useNavigate();


    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
   
            <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7 ml-auto'>
                {/* logo section */}
                {/* Menu icon */}

                <div className='bg-black text-white space-grotesk-style'>Something like a photography</div>
                {/* link items */}
                <ul className={`flex flex-col bg-black lg:flex-row md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <a
                                    href={link.link}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate(link.link);
                                        setOpen(false);
                                    }}
                                    className='text-white hover:text-red-400 duration-500'
                                >
                                    {link.name}
                                </a>

                            </li>))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;