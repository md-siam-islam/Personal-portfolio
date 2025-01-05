import React from 'react';
import Banner from '../assets/Components/Banner/Banner';
import About from '../AboutSection/About';
import Skills from '../SkillsSection/Skills';
import Contact from '../ContactmeSection/Contact';
import Project from '../ProjectSection/Project';

const HOme = () => {
    return (
        <div className='w-10/12  mx-auto'>
            <Banner></Banner>
            <Skills></Skills>
            <Project></Project>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default HOme;