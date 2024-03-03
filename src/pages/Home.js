import { Link } from "react-router-dom"
import React from "react"

export const Home = () => {

    return(
        <main className="sm:w-sm m-2 content-center dark:text-white dark:bg-black p-2 rounded-md shadow-1">
            <h1 className='text-5xl md:m-10 m-5'><b>Hi, I am <span className='text-yellow-500'>Titus Mumo</span></b>
            </h1>
            <div >
            <p className='text-2xl w-auto'>
             I am a junior fullstack developer and a data science specialist.
            </p>
            <p className='text-2xl'>With a passion for building efficient and scalable solutions, I thrive on tackling complex challenges and delivering high-quality software that meets and exceeds client expectations.</p>
            </div>
            <div>
                <a target="_blank" href="https://twitter.com/justTitusk" className="st-social-btn">
              <i className="fab fa-twitter w-10 h-auto"></i>
            </a>
                <a target="_blank" href="https://github.com/titus-mumo" className="st-social-btn active">
              <i className="fab fa-github w-10"></i>
            </a>
            </div>

        </main>
    )
}
