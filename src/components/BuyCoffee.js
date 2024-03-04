import React from "react"
import Coffee from '../assets/icons/bmc-icon.svg'
export const BuyCoffee = () => {
    return(
        <div className='bg-white dark:bg-gray-500 rounded-lg flex flex-col justify center p-2 w-sm'>
            <a href= 'https://www.buymeacoffee.com/titusk' className='dark:text-dark text-dark text-lg sm:text-xl m-auto'>Would you kindly consider treating me to a coffee to fuel my creativity?</a>
            <a href= 'https://www.buymeacoffee.com/titusk' className='dark:bg-gray-500 flex justify-center'>
                <Coffee />
            </a>

        </div>
    )
}