import React from "react";

export const Skill = ({ skill, color }) => {
    const textColor = 'black';
    return (
        <div>
            <p 
            className= "text-white text-sm m-1 py-1 px-1.5 rounded-xl bg-200"
            style={{background: color}}
            >{skill}</p>
        </div>
    );
};