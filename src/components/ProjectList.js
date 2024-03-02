import { Project } from "./Project";
import React from "react";
const movieImg = require('../assets/images/movie.png')
const dashbord = require('../assets/images/dashboard.png')
const medicine = require('../assets/images/medicine.png')

export const ProjectList = () => {
    const movieTechnologies = ["JavaScript", "React"]
    const opulantTechstack = ["JavaScript", "React", "Redux", "Node.js", "Express"]
    const medstack = ["Python", "Django", "JavaScript", "ML", "Google Maps APIs" , "NLP"]

    return(
        <div className='md:flex md:justify-start'>
            <Project title = "HealthAIassist" img = {medicine} alt="medicine image" description = "A disease diagnosis (using ML and NLP), doctor recommendation(includes giving directions, integration with Google Maps APIs), and medical prescription system created using Django" demo= "" github="https://github.com/titus-mumo/HealthAIassist" techstack={medstack} />
            <Project title = "Opulant Dashboard" img= {dashbord} alt="opulant dashborad" description = "A control tower for an e-commerce website that offers a modern dashbord for managing products, users, and payments." github="https://github.com/titus-mumo/opulant-dashboard" demo="https://opulant-dashboard-jejm-gctoo5g4u-titus-mumo.vercel.app/" techstack={opulantTechstack}/>
            <Project title = "Movie Mingle" img={movieImg} alt="movie" description = "Built with react. Instantly providing a wealth of film information from a comprehensive movie database. Explore, discover, and stay in the cinematic know." github="https://github.com/titus-mumo/movie-mingle" demo="https://movie-api-titus-mumo.vercel.app/" techstack={movieTechnologies}/>
            
        </div>
    )
}