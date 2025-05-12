import React from 'react'

import photo1 from "../assets/out_of_darkness/ood13.jpg"
import photo2 from "../assets/poetry_of_the_ordinary/poto1.jpg"
import photo3 from "../assets/streets_and_people/sap12.jpg"
import photo4 from "../assets/portraits/portrait00003.jpg"

const ProjectCard = ({ image, name, counter, onClick }) => {
    return (
        <div id="projectsSection" className=' bg-black ' onClick={onClick}>
            <img src={image} alt='img' className="object-cover md:h-[500px] h-auto max-h-[80vh] min-w-[300px]" />

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
                <ProjectCard image={photo3} name="Sonder" counter={'03'} onClick={() => handleScrollToProject('project3')} />
                <ProjectCard image={photo4} name="Portraits" counter={'04'} onClick={() => handleScrollToProject('project4')} />
            </div>
        </div>
    )
}

export default ProjectsScrollGallery