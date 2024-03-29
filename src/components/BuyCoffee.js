import React from 'react'
import Coffee from '../assets/icons/bmc-icon.svg'
export const BuyCoffee = () => {
  return (
        <div className='bg-white dark:bg-gray-600 rounded-lg flex flex-col justify center p-2 w-sm my-2 shadow'>
            <a href= 'https://www.buymeacoffee.com/titusk' className='dark:text-dark text-dark text-sm md:text-base m-auto'>Would you kindly consider treating me to a <span className="text-blue-400 dark:text-blue-500">coffee</span> to fuel my creativity?😊</a>
            <a href= 'https://www.buymeacoffee.com/titusk' className='dark:bg-gray-600 flex justify-center'>
                <Coffee />
            </a>

        </div>
  )
}
