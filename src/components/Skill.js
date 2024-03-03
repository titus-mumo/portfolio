import React from "react";

export const Skill = ({ skill, color }) => {
    const textColor = 'black';
    return (
        <div className='flex flex-rol items-center'>
            <p 
            className= "text-black text-md m-1 py-1 px-1.5 rounded-xl bg-200 dark:text-white"
            >{skill}</p>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style={{width: color}}></div>
            </div>
        </div>
    );
};