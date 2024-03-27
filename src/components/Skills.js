import { Skill } from './Skill'
import React from 'react'

export const Skills = () => {
  const collections = [
    { skill: 'JavaScript', color: '80%' },
    { skill: 'React', color: '85%' },
    { skill: 'Python', color: '90%' },
    { skill: 'NextJs', color: '90%' },
    { skill: 'Node.js', color: '85%' },
    { skill: 'Django', color: '90%' },
    { skill: 'PostgreSQL', color: '95%' },
    { skill: 'TypeScript', color: '75%' }
  ]

  const learning = [

    { skill: 'PHP', color: '50%' },
    { skill: 'AWS', color: '45%' },
    { skill: 'Rust', color: '40%' }
  ]

  return (
        <div className="skills  bg-gray-200 dark:bg-gray-900 rounded-md p-1 md:p-2 flex flex-col justify-center content-center mb-5 sm:mb-10 md:mb-20 mx-1 md:mx-5 shadow">
            <div className='md:w-5/6 md:m-auto'>
            <p className='text-2xl font-semibold text-yellow-500'>SKILLS</p>
            <div className='flex flex-wrap justify-center md:justify-around'>
            <p className="text-black dark:text-white text-sm md:text-base max-w-screen-md flex justify-center content-center md:w-1/3 h-100 items-center">
                I am a flexible developer skilled in various technologies such as Python, Django, JavaScript, Node.js, PostgreSQL, and MongoDB.
                My passion lies in building efficient and scalable solutions. In backend development,
                I specialize in creating sturdy applications using Python and Node.js. With a solid grasp of databases,
                I excel in utilizing MongoDB for adaptable NoSQL solutions and PostgreSQL for organized and transactional data handling
            </p>
            <div className="flex flex-col justify-center content-center w-5/6 md:w-1/3">
                {collections.map((collection, index) => {
                  return (
                        <Skill key={index} skill={collection.skill} color={collection.color} />
                  )
                })}
            </div>
            </div>
            <p className='text-2xl font-semibold text-yellow-500'>LEARNING</p>
            <div className='flex flex-wrap justify-center md:justify-around'>
            <p className="text-black dark:text-white md:text-base text-sm flex md:justify-around justify-center content-center md:w-1/3 sm:font-thin h-100 items-center">
                In the tech journey, the learning never stops. This is a layout of the technologies I'm learning currently and my personal assessment of the progress so far
            </p>
            <div className="flex flex-col justify-center content-center w-5/6 md:w-1/3">
                {learning.map((collection, index) => {
                  return (
                        <Skill key={index} skill={collection.skill} color={collection.color} />
                  )
                })}
            </div>
            </div>
            </div>
        </div>
  )
}
