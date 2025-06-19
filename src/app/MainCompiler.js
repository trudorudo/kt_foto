import React from 'react';
import MainSection from './sections/MainSection';
import ProjectsScrollGallery from './sections/ProjectsScrollGallery';
import PhotoBlock from './sections/PhotoBlock';

import photo1 from "./assets/out_of_darkness/ood3.jpg";
import photo2 from "./assets/female/cvs1.jpg";
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
import ood13 from "./assets/out_of_darkness/ood13.jpg";


// streets and people
import sap1 from "./assets/streets_and_people/sap1.jpg";
import sap2 from "./assets/streets_and_people/sap2.jpg";
import sap3 from "./assets/streets_and_people/sap3.jpg";
import sap4 from "./assets/streets_and_people/sap4.jpg";
import sap5 from "./assets/streets_and_people/sap5.jpg";
import sap6 from "./assets/streets_and_people/sap6.jpg";
import sap7 from "./assets/streets_and_people/sap7.jpg";
import sap9 from "./assets/streets_and_people/sap9.jpg";
import sap10 from "./assets/streets_and_people/sap10.jpg";
import sap11 from "./assets/streets_and_people/sap11.jpg";
import sap14 from "./assets/streets_and_people/sap14.jpg";
import sap15 from "./assets/streets_and_people/sap15.jpg";

// chasing velvet shadows
import cvs1 from "./assets/female/cvs1.jpg";
import cvs2 from "./assets/female/cvs2.jpg";
import cvs3 from "./assets/female/cvs3.jpg";
import cvs4 from "./assets/female/cvs4.jpg";
import cvs7 from "./assets/female/cvs7.jpg";
import cvs8 from "./assets/female/cvs8.jpg";
import cvs9 from "./assets/female/cvs9.jpg";
import cvs10 from "./assets/female/cvs10.jpg";
import cvs11 from "./assets/female/cvs11.jpg";
import cvs12 from "./assets/female/cvs12.jpg";
import cvs13 from "./assets/female/cvs13.jpg";
import cvs14 from "./assets/female/cvs14.jpg";

// poetry of the ordinary
import poto1 from "./assets/poetry_of_the_ordinary/poto1.jpg";
import poto2 from "./assets/poetry_of_the_ordinary/poto2.jpg";
import poto3 from "./assets/poetry_of_the_ordinary/poto3.jpg";
import poto4 from "./assets/poetry_of_the_ordinary/poto4.jpg";
import poto5 from "./assets/poetry_of_the_ordinary/poto5.jpg";
import poto6 from "./assets/poetry_of_the_ordinary/poto6.jpg";
import poto7 from "./assets/poetry_of_the_ordinary/poto7.jpg";

import poto8 from "./assets/poetry_of_the_ordinary/poto8.jpeg";
import poto9 from "./assets/poetry_of_the_ordinary/poto9.jpeg";
import poto10 from "./assets/poetry_of_the_ordinary/poto10.jpeg";
import poto11 from "./assets/poetry_of_the_ordinary/poto11.jpg";


import p1 from "./assets/portraits/portrait00001.jpg";
import p2 from "./assets/portraits/portrait00002.jpg";
import p3 from "./assets/portraits/portrait00003.jpg";
import p4 from "./assets/portraits/portrait00004.jpg";
import p6 from "./assets/portraits/portrait00006.jpg";
import p7 from "./assets/portraits/portrait00007.jpg";
import p8 from "./assets/portraits/portrait00008.jpg";
import p9 from "./assets/portraits/portrait00009.jpg";
import p10 from "./assets/portraits/portrait00010.jpg";
import p11 from "./assets/portraits/portrait00011.jpg";
import p12 from "./assets/portraits/portrait00012.jpg";
import p13 from "./assets/portraits/portrait00013.jpg";

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
        <div className="min-h-screen bg-black overflow-x-hidden">

            <MainSection />
            <ProjectsScrollGallery />
            <PhotoBlock img={photo1} />
            <ProjectSection
                id="project1"
                title="Out Of Darkness"
                counter="01"
                description={ood_description}
                img={photo1}
                img_array={[ood1, ood13, ood2, ood3, ood4, ood5, ood6, ood7, ood8, ood9, ood10, ood11, ood12]}
            />
            <ProjectSection
                id="project3"
                title="Sonder"
                counter="02"
                description="The profound feeling of realizing that everyone, including strangers passed in the street, has a life as complex as one's own, which they are constantly living despite one's personal lack of awareness of it."
                img={sap9}
                img_array={[sap14, sap11, sap15, sap1, sap2, sap3, sap4, sap5, sap6, sap7, sap9, sap10, cvs9, cvs14, cvs11, cvs13, cvs2, cvs12, cvs3, cvs4, cvs7, cvs8, cvs1]}
                side
            />
            <PhotoBlock img={photo2} />

            <ProjectSection
                id="project4"
                title="Portraits"
                counter="03"
                description=""
                img={p11}
                img_array={[p1, p2, p3, p6, p7, p8, p4, p9, p10, p11, p12, p13, poto8, poto9, poto10, poto11]}
            />
            <ProjectSection
                id="project5"
                title="Poetry Of The Ordinary"
                counter="04"
                description="An ode to the beauty hidden in everyday life"
                img={poto4}
                img_array={[poto1, poto2, poto3, poto4, poto5, poto7, poto6, cvs10,]}
                side
            />

            <PhotoBlock img={poto6} />
            <AboutSection />
            <Footer />
        </div>
    )
}

export default MainCompiler