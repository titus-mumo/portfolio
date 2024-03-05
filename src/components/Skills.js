import { Skill } from "./Skill";
import React from "react";

export const Skills = () => {
    const collections = [
        { "skill": "JavaScript", "color": '80%' },
        { "skill": "React", "color": '85%'},
        { "skill": "Python", "color": '90%' },
        { "skill": "HTML", "color": '95%' },
        { "skill": "CSS", "color": '95%'},
        { "skill": "Node.js", "color": '85%' },
        { "skill": "Django", "color": '90%' },
        { "skill": "PostgreSQL", "color": '95%'},
        {'skill':"TypeScript", "color":'75%'},
    ];

    const learning = [
        
        {"skill": "PHP", "color":'50%'},
        {"skill":"AWS", "color":'45%'},
        {"skill":"Rust", "color":"40%"}
    ]

    return (
        <div className="skills flex flex-col justify-between content-center mb-5 sm:mb-10 md:mb-15">
            <p className='text-3xl font-semibold text-yellow-500'>SKILLS</p>
            <div className='flex flex-wrap justify-center md:flex-row'>
            <p className="text-black dark:text-white text-md sm:text-xl max-w-screen-md flex justify-center content-center">
                I am a flexible developer skilled in various technologies such as Python, Django, JavaScript, Node.js, PostgreSQL, and MongoDB. 
                My passion lies in building efficient and scalable solutions. In backend development, 
                I specialize in creating sturdy applications using Python and Node.js. With a solid grasp of databases, 
                I excel in utilizing MongoDB for adaptable NoSQL solutions and PostgreSQL for organized and transactional data handling
            </p>
            <div className="flex flex-col justify-center content-center w-5/6 md:w-4/6">
                {collections.map((collection, index) => {
                    return (
                        <Skill key={index} skill={collection.skill} color={collection.color} />
                    );
                })}
            </div>
            </div>
            <p className='text-3xl font-semibold text-yellow-500'>LEARNING</p>
            <div className='flex flex-wrap justify-center'>
            <p className="text-black dark:text-white text-md sm:text-xl flex justify-center content-center md:w-4/6 font-light sm:font-thin">
                In the tech journey, the learning never stops. Below is a layout of the technologies I'm learning currently and my personal assessment of the progress so far
            </p>
            <div className="flex flex-col justify-center content-center w-5/6 md:w-4/6">
                {learning.map((collection, index) => {
                    return (
                        <Skill key={index} skill={collection.skill} color={collection.color} />
                    );
                })}
            </div>
            </div>
        </div>
    );
};
