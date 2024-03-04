import React from "react";

export const Skill = ({ skill, color }) => {
    const textColor = 'black';
    return (
        <div className='flex flex-rol justify-between items-center my-1.5 mx-3 w-full'>
            <p 
            className= "text-black text-md rounded-xl bg-200 dark:text-white w-40"
            >{skill}</p>
            <div class="w-full bg-white rounded-sm h-2.5 dark:bg-gray-700 flex items-center content-center max-w-screen-sm">
            <div class="bg-blue-600 h-2.5 rounded-sm" style={{width: color}}></div>
            </div>
            <p className='text-black dark:text-white ml-4'>
                {color}
            </p>
        </div>
    );
};