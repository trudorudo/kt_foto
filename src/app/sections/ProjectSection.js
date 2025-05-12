import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as Left } from "../assets/navigation/left.svg";
import { ReactComponent as Right } from "../assets/navigation/right.svg";
import { ReactComponent as Close } from "../assets/navigation/cross.svg";

const ProjectSection = ({ id, title, counter, description, img, img_array, side }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isLeftVisible, setIsLeftVisible] = useState(false);
    const [isRightVisible, setIsRightVisible] = useState(true);
    const scrollContainerRef = useRef(null);

    const isMobile = () => window.innerWidth <= 768; // Define mobile breakpoint

    const openModal = (index) => {
        setSelectedIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedIndex(null);
        setIsModalOpen(false);
    };

    const showNextImage = () => {
        if (img_array && selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % img_array.length);
        }
    };

    const showPreviousImage = () => {
        if (img_array && selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + img_array.length) % img_array.length);
        }
    };

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const isAtStart = container.scrollLeft === 0;
            const isAtEnd =
                Math.abs(container.scrollLeft + container.clientWidth - container.scrollWidth) < 1; // Added tolerance

            setIsLeftVisible(!isAtStart);
            setIsRightVisible(!isAtEnd);
        }
    };


    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div id={id}>
            <div className={`flex mt-20 mb-16 md:mt-20 md:mb-16 mt-10 ml-5 mb-10 ${side ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex flex-col md:flex-row w-full text-white mx-5">
                    <div className="baijamjureelight text-[28px] md:text-[64px]">{title.toUpperCase()}</div>
                    <div className="flex mt-auto">
                        <div className="lg:block  intermed text-base text-gray md:hidden">
                            Project [{counter}]
                        </div>
                        <div className="intermed text-sm md:text-lg text-white ml-auto w-[27rem] md:ml-auto">
                            {description}
                        </div>
                    </div>
                </div>
                <div className="ml-auto w-full mr-4 lg:block md:hidden">
                    <img src={img} alt="1" className="w-full object-cover" />
                </div>
            </div>

            <div className="relative">
                {isLeftVisible && (
                    <button
                        className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray bg-opacity-50 ml-4  rounded-full z-10"
                        onClick={() =>
                            (scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.clientWidth)
                        }
                    >
                        <Left />
                    </button>

                )}

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto space-x-4 max-w-full pb-2 scrollbar-hide mx-5"
                >
                    {img_array?.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            className="max-h-[80vh] h-auto object-cover cursor-pointer"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            alt={`blackandwhite ${index}`}
                            onClick={() => {
                                if (!isMobile()) {
                                    openModal(index);
                                }
                            }}
                        />
                    ))}
                </div>

                {isRightVisible && (

                    <button
                        className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray bg-opacity-50  rounded-full z-10 mr-2"
                        onClick={() =>
                            (scrollContainerRef.current.scrollLeft += scrollContainerRef.current.clientWidth)
                        }
                    >
                        <Right />
                    </button>

                )}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95">
                    <button
                        onClick={closeModal}
                        className="absolute top-8 right-8 text-white text-2xl bg-gray-800 bg-opacity-50 p-2 rounded-full"
                    >
                        <Close />
                    </button>
                    <button
                        onClick={showPreviousImage}
                        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-gray-800 bg-opacity-50 rounded-full bg-black hover:bg-gray z-30"
                    >
                        <Left />
                    </button>
                    <div className="relative">
                        <img
                            src={img_array[selectedIndex]}
                            alt={`blackandwhite ${selectedIndex}`}
                            className="max-w-[90vw] max-h-[90vh] object-contain"
                        />
                    </div>
                    <button
                        onClick={showNextImage}
                        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-gray-800 bg-opacity-50 rounded-full bg-black hover:bg-gray"
                    >
                        <Right />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectSection;
