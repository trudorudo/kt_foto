
import React, { useState, useEffect, useRef } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { ReactComponent as Logo } from "../assets/me/Logo-2.svg";

import '../../../src/App.css';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [open, setOpen] = useState(false);
    console.log(isDropdownOpen)
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 50); // show when scrolled more than 50px
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const Links = [
        { name: "Projects", id: "projectsSection" },
        { name: "Contacts", id: "contactsSection" },
    ];

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
        <div className='w-full fixed top-0 left-0 z-50'>
            <div className={`md:flex items-center justify-between py-4 md:px-5 pl-5 ml-auto transition-opacity duration-300 ${hasScrolled ? 'opacity-100  bg-black ' : ''}`}>

                {/* Menu icon */}
                <div
                    onClick={() => setOpen(!open)}
                    className='absolute right-1 top-4 lg:top-6 cursor-pointer md:hidden w-7 h-7'
                >
                    {open ? (
                        <XMarkIcon className='text-white' />
                    ) : (
                        <Bars3BottomRightIcon className='text-white' />
                    )}
                </div>

                <div><Logo /></div>

                {/* Link items */}
                <ul
                    className={`flex flex-col lg:flex-row items-end md:items-center pr-3 md:pr-0  md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'
                        }`}
                >
                    {Links.map((link, index) => (
                        <li
                            key={index}
                            className='md:ml-8 md:my-0 font-semibold md:text-3xl'
                        >
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(false);

                                    // Scroll to the section
                                    const target = document.getElementById(link.id);
                                    if (target) {
                                        target.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className='baijamjureeextralight text-white duration-500 hover:underline underline-offset-4 text-xl'
                            >
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
