import React from "react"

export const About = () => {

    const downloaadResume = (e) => {
        var documentUrl = 'https://drive.google.com/file/d/1w2mHFxUg6f3a01F6vTC6A1a6OHz6309v'
        var downloadAnchor = document.createElement('a');
        downloadAnchor = documentUrl;
        downloadAnchor.download = 'Titus Mumo - Software Engineer.pdf';
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        document.body.removeChild(downloadAnchor);
    }
    return(
        <div className='about mb-5 sm:mb-10 md:mb-15'>
            <p className='text-3xl font-semibold text-yellow-500'>ABOUT</p>
            <div className="dark:text-white">
            </div>
            <div className='flex flex-col justify-center items-center content-center sm:text-xl '>
                <p className='text-yellow-500 text-2xl font-semibold'>Software Engineer | Data Scientist</p>
                <p className='text-black dark:text-white text-md sm:text-xl max-w-screen-md flex justify-left items-start'>
                    Throughout my career journey, I've been fortunate to engage in a diverse array of projects, 
                    spanning from robust enterprise applications to cutting-edge ventures in the startup world. 
                    My unwavering dedication to remaining abreast of the latest technologies and best practices 
                    ensures that the solutions I craft are consistently aligned with the forefront of industry standards. 
                    Feel free to peruse my portfolio, where you'll find a showcase of some of my recent endeavors, offering
                     insight into my coding style and problem-solving approach. If you're seeking a committed and adept programmer 
                     to help breathe life into your ideas, I'm eager to collaborate with you!
                </p>
                <button href="https://drive.google.com/uc?export=download&id=1w2mHFxUg6f3a01F6vTC6A1a6OHz6309v" className='m-3 md:m-4 bg-yellow-400 p-1 rounded-xl'>Download Resume</button>
            </div>
        </div>
    )
}