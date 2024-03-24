import React from "react";

export const Project = ({ title, img, alt, description, github, demo, techstack }) => {
    return (
        <div className='my-2 mx-1  p-1.5 md:p-2 bg-white dark:bg-gray-900 rounded-lg w-70'>
            <p className="text-xl font-semibold m-2 dark:text-white">{title}</p>
            <div className="flex lg:flex-row justify-center flex-col">
                <div className='w-100'>
                    <img className='rounded-lg'src={img} alt={alt} />
                </div>
                <div>
                    <p className="dark:text-white text-sm md:text-base">{description}</p>
                    {demo && <div><a href={demo} className="text-blue-400 hover:underline">Live Demo</a><br></br></div>}
                    <a href={github} className="text-blue-400 hover:underline text-sm">View Code on Github</a><br></br>
                    
                    {techstack.map((technology, index) => (
                        <span key={index} className="text-green-400 text-sm">| {technology} </span>
                    ))}
                </div>
            </div>
        </div>
    )
};