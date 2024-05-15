import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';




const Header = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    let Links = [
        { name: "GALLERY", link: "/" },
        { name: "ABOUT", link: "/about" },
    ];

    console.log(isDropdownOpen);
      const [open, setOpen] = useState(false);
    let navigate = useNavigate();

    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Cleanup the event listener on component unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
   
            <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7 ml-auto'>
                {/* logo section */}
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-4 lg:top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon className='text-white' /> : <Bars3BottomRightIcon className='text-white' />
                    }
                </div>

                <div className='bg-black text-white space-grotesk-style md:text-4xl'>Something like a photography</div>
                {/* link items */}
                <ul className={`flex flex-col bg-black lg:flex-row md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold md:text-3xl'>
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