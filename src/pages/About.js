import React from "react"

export const About = () => {
    return(
        <div className='mb-5'>
            <p className='text-3xl font-semibold text-yellow-500'>ABOUT</p>
            <div className="dark:text-white">
                <p className='text-2xl'> 
                    <span>Hello you, I'm </span>
                    <span className='font-semibold'>Titus Mumo</span>
                </p>
            </div>
            <div className='flex flex-col justify-center items-center content-center sm:text-xl '>
                <p className='text-yellow-500 text-2xl font-semibold'>Backend Engineer and Data Scientist</p>
                <p className='text-black dark:text-white text-2xl sm:text-xl max-w-screen-md flex justify-center content-center'>
                    Throughout my career journey, I've been fortunate to engage in a diverse array of projects, 
                    spanning from robust enterprise applications to cutting-edge ventures in the startup world. 
                    My unwavering dedication to remaining abreast of the latest technologies and best practices 
                    ensures that the solutions I craft are consistently aligned with the forefront of industry standards. 
                    Feel free to peruse my portfolio, where you'll find a showcase of some of my recent endeavors, offering
                     insight into my coding style and problem-solving approach. If you're seeking a committed and adept programmer 
                     to help breathe life into your ideas, I'm eager to collaborate with you!
                </p>
            </div>
        </div>
    )
}