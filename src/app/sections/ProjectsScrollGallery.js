import React from 'react'

import photo1 from "../assets/scroll_gallery/1.jpg"
import photo2 from "../assets/scroll_gallery/2.jpg"
import photo3 from "../assets/scroll_gallery/3.jpg"
import photo4 from "../assets/scroll_gallery/4.jpg"

const ProjectCard = ({ image, name, counter, onClick }) => {
    return (
        <div id="projectsSection" className=' bg-black ' onClick={onClick}>
            <img src={image} alt="1" className="object-cover md:h-[500px] min-w-[300px]" />
            <div className="flex text-white">
                <div className="baijamjureelight text-lg ml-1 mt-2">
                    {name.toUpperCase()}
                </div>
                <div className="baijamjureelight text-gray text-lg ml-auto  mt-2">
                    [{counter}]
                </div>
            </div>
        </div>
    )
}

const ProjectsScrollGallery = () => {
    const handleScrollToProject = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='mt-8  md:mt-32 mx-5 pb-6'>
            <div className='flex overflow-x-auto justify-between space-x-4'>
                <ProjectCard image={photo1} name="Out Of Darkness" counter={'01'} onClick={() => handleScrollToProject('project1')} />
                <ProjectCard image={photo2} name="Poetry Of The Ordinary" counter={'02'} onClick={() => handleScrollToProject('project2')} />
                <ProjectCard image={photo3} name="Streets And People" counter={'03'} onClick={() => handleScrollToProject('project3')} />
                <ProjectCard image={photo4} name="Chasing Velvet Shadows" counter={'04'} onClick={() => handleScrollToProject('project4')} />
            </div>
        </div>
    )
}

export default ProjectsScrollGallery