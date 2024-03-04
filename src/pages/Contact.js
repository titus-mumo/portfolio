import React from "react"

export const Contact = () => {
    return(
        <div>
        <p className='text-3xl font-semibold text-yellow-500'>SOCIALS</p>
        <div className="flex items-center justify-center flex-col sm:flex-rol dark:text-white">
        <div className="flex flex-col justify-start">
            <p>You can reach me on:</p>
            <ul className="dark:text-white">
            <li className="dark:text-white"><i className="fab fa-whatsapp w-10"></i>+254 701 901 186</li>
            <li className="dark:text-white">
                <span className="dark:text-white">tituskennedy74@gmail.com</span>
            </li>
            <li className="dark:text-white">
                <a target="_blank" href="https://twitter.com/justTitusk" className="st-social-btn active">
              <i className="fab fa-twitter w-10"></i>
            </a>
            </li>
            <li>
                <a target="_blank" href="https://www.linkedin.com/in/titus-mumo-a9971926a/" className="st-social-btn active">
              <i className="fab fa-linkedin w-10"></i>
            </a>
            </li>
            </ul>
        </div>
        <div>
            <p>You can view more of my work on:</p>
            <ul>
                <li>
                <a target="_blank" href="https://github.com/titus-mumo" className="st-social-btn active">
              <i className="fab fa-github w-10"></i>
            </a>
                </li>
            </ul>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        </div>
    )
}