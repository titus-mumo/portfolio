import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Home = () => {
  const officialName = 'Titus Mumo'
  const [name, setName] = useState('T')
  useEffect(() => {
    if (officialName !== name) {
      setTimeout(function () {
        const nameLength = name.length
        const character = officialName[nameLength]
        setName(name.concat(character))
      }, 200)
    } else {
      setTimeout(function () {
        setName('T')
      }, 1000)
    }
  }, [name, officialName])

  return (
        <main className="home w-auto m-2 p-10 content-center dark:text-white dark:bg-gray-900 bg-gray-200 rounded-md shadow-1 mb-5 sm:mb-10 md:mb-15 mx-1 md:mx-5 shadow">
            <h1 className='text-4xl md:m-10 m-5'><b><span className='text-2xl'>Hi, I am </span><br></br><span className='text-blue-600'>{name}</span></b>
            </h1>
            <div className='flex flex-col justify-center items-center align-center sm:text-xl '>
            <p className='w-sm text-sm md:text-base flex align-left justify-center'>
             I am a junior fullstack developer and a data science specialist.
            </p>
            <p className='max-w-screen-md flex align-center justify-center text-sm md:text-base'>With a passion for building efficient and scalable solutions, I thrive on tackling complex challenges and delivering high-quality software that meets and exceeds client expectations.</p>
            </div>
            <div>
                <a target="_blank" href="https://wa.me/+254701901186" className="st-social-btn" rel="noreferrer">
              <FontAwesomeIcon icon='fab fa-whatsapp' className="text-xl hover:text-2xl transform scroll-smooth scale-125 m-5 p-1.5 hover:p-1 hover:ease-in-out"/>
            </a>
                <a target="_blank" href="https://github.com/titus-mumo" className="st-social-btn active" rel="noreferrer">
              <FontAwesomeIcon icon='fab fa-github' className="text-xl hover:text-2xl transform scroll-smooth scale-125 m-5 p-1.5 hover:p-1 hover:ease-in-out"/>
            </a>
            </div>

        </main>
  )
}
