import { Link } from "react-router-dom"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Home = () => {

    return(
        <main className="home sm:w-sm m-2 content-center dark:text-white dark:bg-gray-900 p-2 rounded-md shadow-1 mb-5 sm:mb-10 md:mb-15">
            <h1 className='text-5xl md:m-10 m-5'><b>Hi, I am <span className='text-yellow-500'>Titus Mumo</span></b>
            </h1>
            <div className='flex flex-col justify-center items-center content-center sm:text-xl '>
            <p className='text-lg w-sm sm:text-xl'>
             I am a junior fullstack developer and a data science specialist.
            </p>
            <p className='text-2xl max-w-screen-md flex items-center justify-center sm:text-xl'>With a passion for building efficient and scalable solutions, I thrive on tackling complex challenges and delivering high-quality software that meets and exceeds client expectations.</p>
            </div>
            <div>
                <a target="_blank" href="https://wa.me/+254701901186" className="st-social-btn">
              <FontAwesomeIcon icon='fab fa-whatsapp' className="text-xl hover:text-2xl transform scroll-smooth scale-125 m-5 p-1.5 hover:p-1 hover:ease-in-out"/>
            </a>
                <a target="_blank" href="https://github.com/titus-mumo" className="st-social-btn active">
              <FontAwesomeIcon icon='fab fa-github' className="text-xl hover:text-2xl transform scroll-smooth scale-125 m-5 p-1.5 hover:p-1 hover:ease-in-out"/>
            </a>
            </div>

        </main>
    )
}
