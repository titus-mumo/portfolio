import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Contact = () => {
    return(
        <div>
        <p className='text-3xl font-semibold text-yellow-500'>SOCIALS</p>
        <div className="flex items-center justify-center flex-col sm:flex-rol dark:text-white">
        <div className="flex flex-col justify-start text-sm md:text-base">
            <p>You can reach me on:</p>
            <ul className="dark:text-white">
                <li className="dark:text-white">
                <span className="dark:text-white text-sm md:text-base">+254 701 901 186</span>
            </li>
            <li className="dark:text-white">
                <a target="_blank" href="https://wa.me/+254701901186" className="st-social-btn active">
                <FontAwesomeIcon icon="fab fa-whatsapp w-10" className="text-base hover:text-lg transform scroll-smooth scale-125 m-2 md:m-3 hover:ease-in-out"/></a>
                </li>
            <li className="dark:text-white">
                <span className="dark:text-white text-sm md:text-base">tituskennedy74@gmail.com</span>
            </li>
            <li className="dark:text-white">
                <a target="_blank" href="https://twitter.com/justTitusk" className="st-social-btn active">
              <FontAwesomeIcon icon="fab fa-twitter w-10" className="text-base hover:text-lg transform scroll-smooth scale-125 m-2 md:m-3 hover:ease-in-out"/>
            </a>
            </li>
            <li>
                <a target="_blank" href="https://www.linkedin.com/in/titus-mumo-a9971926a/" className="st-social-btn active">
              <FontAwesomeIcon icon="fab fa-linkedin w-10" className="text-base hover:text-lg transform scroll-smooth scale-125 m-2 md:m-3 hover:ease-in-out"/>
            </a>
            </li>
            </ul>
        </div>
        <div>
            <p className="dark:text-white text-sm md:text-base">You can view more of my work on:</p>
            <ul>
                <li>
                <a target="_blank" href="https://github.com/titus-mumo" className="st-social-btn active">
              <FontAwesomeIcon icon="fab fa-github w-10" className="text-base hover:text-lg transform scroll-smooth scale-125 m-2 md:m-3 hover:ease-in-out"/>
            </a>
                </li>
            </ul>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        </div>
    )
}