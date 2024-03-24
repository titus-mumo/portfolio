import React, { useState, useEffect } from "react";

export const Skill = ({ skill, color }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < parseInt(color)) {
                setProgress(progress + 1);
            }
        }, eval(200 - parseInt(color)));

        return () => clearInterval(interval);
    }, [progress]);

    return (
        <div className='flex flex-row justify-between items-center my-1.5 mx-3 w-full'>
            <p className="text-black text-sm md:text-base rounded-xl bg-200 dark:text-white w-40">
                {skill}
            </p>
            <div className="w-full bg-white rounded-sm h-2 dark:bg-gray-700 max-w-screen-sm">
                <div
                    className="bg-blue-600 h-2 rounded-sm"
                    style={{ width: `${progress}%`, transition: `width ${parseInt(color)/100}s ease` }}
                ></div>
            </div>
            <p className='text-black dark:text-white ml-4 text-sm md:text-base'>
                {progress}%
            </p>
        </div>
    );
};
