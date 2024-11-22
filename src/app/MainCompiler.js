import React from 'react';
import MainSection from './sections/MainSection';
import ProjectsScrollGallery from './sections/ProjectsScrollGallery';
import PhotoBlock from './sections/PhotoBlock';

import photo1 from "./assets/photo_blocks/1.jpg";
import photo2 from "./assets/photo_blocks/2.jpg";
import ProjectSection from './sections/ProjectSection';

// out of darkness photos
import ood1 from "./assets/out_of_darkness/ood1.jpg";
import ood2 from "./assets/out_of_darkness/ood2.jpg";
import ood3 from "./assets/out_of_darkness/ood3.jpg";
import ood4 from "./assets/out_of_darkness/ood4.jpg";
import ood5 from "./assets/out_of_darkness/ood5.jpg";
import ood6 from "./assets/out_of_darkness/ood6.jpg";
import ood7 from "./assets/out_of_darkness/ood7.jpg";
import ood8 from "./assets/out_of_darkness/ood8.jpg";
import ood9 from "./assets/out_of_darkness/ood9.jpg";
import ood10 from "./assets/out_of_darkness/ood10.jpg";
import ood11 from "./assets/out_of_darkness/ood11.jpg";
import ood12 from "./assets/out_of_darkness/ood12.jpg";


// streets and people
import sap1 from "./assets/streets_and_people/sap1.jpg";
import sap2 from "./assets/streets_and_people/sap2.jpg";
import sap3 from "./assets/streets_and_people/sap3.jpg";
import sap4 from "./assets/streets_and_people/sap4.jpg";
import sap5 from "./assets/streets_and_people/sap5.jpg";
import sap6 from "./assets/streets_and_people/sap6.jpg";
import sap7 from "./assets/streets_and_people/sap7.jpg";
import sap8 from "./assets/streets_and_people/sap8.jpg";
import sap9 from "./assets/streets_and_people/sap9.jpg";
import sap10 from "./assets/streets_and_people/sap10.jpg";

// chasing velvet shadows
import cvs1 from "./assets/female/cvs1.jpg";
import cvs2 from "./assets/female/cvs2.jpg";
import cvs3 from "./assets/female/cvs3.jpg";
import cvs4 from "./assets/female/cvs4.jpg";
import cvs5 from "./assets/female/cvs5.jpg";
import cvs6 from "./assets/female/cvs6.jpg";
import cvs7 from "./assets/female/cvs7.jpg";
import cvs8 from "./assets/female/cvs8.jpg";
import cvs9 from "./assets/female/cvs9.jpg";
import cvs10 from "./assets/female/cvs10.jpg";
import cvs11 from "./assets/female/cvs11.jpg";
import cvs12 from "./assets/female/cvs12.jpg";
import cvs13 from "./assets/female/cvs13.jpg";


// poetry of the ordinary
import poto1 from "./assets/poetry_of_the_ordinary/poto1.jpg";
import poto2 from "./assets/poetry_of_the_ordinary/poto2.jpg";
import poto3 from "./assets/poetry_of_the_ordinary/poto3.jpg";
import poto4 from "./assets/poetry_of_the_ordinary/poto4.jpg";
import poto5 from "./assets/poetry_of_the_ordinary/poto5.jpg";
import poto6 from "./assets/poetry_of_the_ordinary/poto6.jpg";
import AboutSection from './sections/AboutSection';
import Footer from './sections/Footer';

const ood_description = (
    <div>
        <div>There is a beauty I see that gives me shivers </div>
        <div>And I press the button</div>
        <div>With only hope to capture light</div>
        <div>Light Out of Darkness</div>
    </div>
)
const MainCompiler = () => {
    return (
        <div className=" w-screen min-h-screen overflow-x-hidden bg-black">
            <MainSection />
            <ProjectsScrollGallery />
            <PhotoBlock img={photo1} />
            <ProjectSection
                id="project1"
                title="Out Of Darkness"
                counter="01"
                description={ood_description}
                img={photo1}
                img_array={[ood1, ood2, ood3, ood4, ood5, ood6, ood7, ood8, ood9, ood10, ood11, ood12]}
            />
            <ProjectSection
                id="project3"
                title="Street And People"
                counter="02"
                description="Just streets and people and me capturing different moments of life, weaving stories through the interplay of light and shadow, and finding beauty in the ordinary"
                img={sap9}
                img_array={[sap1, sap2, sap3, sap4, sap5, sap6, sap7, sap8, sap9, sap10]}
                side
            />
            <PhotoBlock img={photo2} />

            <ProjectSection
                id={"project3"}
                title="Chasing Velvet Shadows"
                counter="03"
                description="'Chasing Velvet Shadows' is a tribute to the beauty, complexity, and resilience of women, seen through fleeting yet timeless moments"
                img={cvs5}
                img_array={[cvs9, cvs12, cvs10, cvs11, cvs13, cvs2, cvs3, cvs4, cvs5, cvs6, cvs7, cvs8, cvs1]}
            />
            <ProjectSection
                id="project2"
                title="Poetry Of The Ordinary"
                counter="04"
                description="An ode to the beauty hidden in everyday life"
                img={poto4}
                img_array={[poto1, poto2, poto3, poto4, poto5, poto6]}
                side
            />

            <PhotoBlock img={poto6} />
            <AboutSection />
            <Footer />
        </div>
    )
}

export default MainCompiler