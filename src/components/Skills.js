import { Skill } from "./Skill";
import React from "react";

export const Skills = () => {
    const collections = [
        { "skill": "JavaScript", "color": "#77C3EC" },
        { "skill": "React", "color": "red" },
        { "skill": "Python", "color": "green" },
        { "skill": "HTML", "color": "black" },
        { "skill": "CSS", "color": "brown" },
        { "skill": "Node.js", "color": "green" },
        { "skill": "Django", "color": "violet" },
        { "skill": "PostgreSQL", "color": "orange" },
        { "skill": "Machine Learning", "color": "purple" }
    ];

    const learning = [
        {'skill':"TypeScript", "color": "brown"},
        {"skill": "PHP", "color":"green"},
        {"skill":"AWS", "color":"orange"}
    ]

    return (
        <div className="flex flex-col justify-center w-full">
            <p className='text-3xl font-semibold text-yellow-500'>SKILLS</p>
            <div className="flex flex-wrap justify-center w-full">
                {collections.map((collection, index) => {
                    return (
                        <Skill key={index} skill={collection.skill} color={collection.color} />
                    );
                })}
            </div>
            <p className='text-3xl font-semibold text-yellow-500'>LEARNING</p>
            <div className="flex flex-wrap justify-around">
                {learning.map((collection, index) => {
                    return (
                        <Skill key={index} skill={collection.skill} color={collection.color} />
                    );
                })}
            </div>
        </div>
    );
};
