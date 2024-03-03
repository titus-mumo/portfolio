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
        { "skill": "Machine Learning", "color": '75%' }
    ];

    const learning = [
        {'skill':"TypeScript", "color": '50%'},
        {"skill": "PHP", "color":'50%'},
        {"skill":"AWS", "color":'45%'}
    ]

    return (
        <div className="flex flex-col justify-center w-full">
            <p className='text-3xl font-semibold text-yellow-500'>SKILLS</p>
            <div className="flex flex-col justify-center sm:w-90vw w-90 m-auto">
                {collections.map((collection, index) => {
                    return (
                        <Skill key={index} skill={collection.skill} color={collection.color} />
                    );
                })}
            </div>
            <p className='text-3xl font-semibold text-yellow-500'>LEARNING</p>
            <div className="flex flex-col justify-center w-auto m-auto">
                {learning.map((collection, index) => {
                    return (
                        <Skill key={index} skill={collection.skill} color={collection.color} />
                    );
                })}
            </div>
        </div>
    );
};
