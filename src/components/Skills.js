import { Skill } from "./Skill";

export const Skills = () => {
    const collections = [
        { "skill": "JavaScript", "color": "yellow" },
        { "skill": "React", "color": "red" },
        { "skill": "Python", "color": "green" },
        { "skill": "HTML", "color": "black" },
        { "skill": "CSS", "color": "brown" },
        { "skill": "Node.js", "color": "slate" },
        { "skill": "Django", "color": "violet" },
        { "skill": "PostgreSQL", "color": "orange" },
        { "skill": "Machine Learning", "color": "purple" }
    ];

    const learning = [
        {'skill':"TypeScript", "color": "yellow"},
        {"skill": "PHP", "color":"green"}
    ]

    return (
        <div>
            <p>My Skills</p>
            <div className="flex flex-wrap justify-normal">
                {collections.map((collection, index) => {
                    return (
                        <Skill key={index} skill={collection.skill} color={collection.color} />
                    );
                })}
            </div>
            <p>I'm currently Learning</p>
            <div className="flex flex-wrap justify-normal">
                {learning.map((collection, index) => {
                    return (
                        <Skill key={index} skill={collection.skill} color={collection.color} />
                    );
                })}
            </div>
        </div>
    );
};
