import React from "react";

export const Project = ({ title, img, alt, description, github, demo, techstack }) => {
    return (
        <div className='my-2 p-1.5 bg-white dark:bg-gray-800 rounded-lg'>
            <p className="text-3xl font-semibold m-2 dark:text-white">{title}</p>
            <div className="flex sm:flex-row justify-center flex-col">
                <div className=''>
                    <img className='rounded-lg'src={img} alt={alt} />
                </div>
                <div>
                    <p className="dark:text-white">{description}</p>
                    {demo && <div><a href={demo} className="text-blue-400 hover:underline">Live Demo</a><br></br></div>}
                    <a href={github} className="text-blue-400 hover:underline">View Code on Github</a><br></br>
                    
                    {techstack.map((technology, index) => (
                        <span key={index} className="text-green-400">| {technology} </span>
                    ))}
                </div>
            </div>
        </div>
    )
};