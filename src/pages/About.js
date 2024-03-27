import React from 'react'
import Portfolio from '../components/Titus_Mumo_CV.pdf'
export const About = () => {
  return (
        <div className='about rounded-md p-1 md:p-2 mb-5 sm:mb-10 md:mb-15  bg-gray-200 dark:bg-gray-900 mx-1 md:mx-5 shadow w-auto'>
            <p className='text-2xl font-semibold text-yellow-500'>ABOUT</p>
            <div className="dark:text-white">
            </div>
            <div className='flex flex-col justify-center items-center content-center sm:text-xl '>
                <p className='text-yellow-500 text-2xl font-semibold'>Software Engineer | Data Scientist</p>
                <p className='text-black dark:text-white md:text-base text-sm max-w-screen-md flex justify-center align-left'>
                    Throughout my career journey, I've been fortunate to engage in a diverse array of projects,
                    spanning from robust enterprise applications to cutting-edge ventures in the startup world.
                    My unwavering dedication to remaining abreast of the latest technologies and best practices
                    ensures that the solutions I craft are consistently aligned with the forefront of industry standards.
                    Feel free to peruse my portfolio, where you'll find a showcase of some of my recent endeavors, offering
                     insight into my coding style and problem-solving approach. If you're seeking a committed and adept programmer
                     to help breathe life into your ideas, I'm eager to collaborate with you!
                </p>
                <div className='flex justify-left flex-col m-5 text-base '>
                <p className="dark:text-gray-400 text-gray-700">Phone: +254 701 901 186</p>
                <p className="dark:text-gray-400 text-gray-700">Email: tituskennedy74@gmail.com</p>
                <p className="dark:text-gray-400 text-gray-700">Country: Nairobi | Kenya</p>
                <p className="dark:text-gray-400 text-gray-700">Languages: English, Swahili</p>
                </div>
                <a href={Portfolio} target='_blank' className='m-3 md:m-4 bg-blue-500 p-1 rounded-md text-sm md:text-md font-medium hover:font-semibold'><p>Download CV</p></a>
            </div>
        </div>
  )
}
