import { Chess } from "../components/Chess"
import { BuyCoffee } from "../components/BuyCoffee"
import React from "react"

export const Support = () => {
    return(
        <div className="mb-10 mx-1 md:mx-5  bg-gray-200 dark:bg-gray-900 rounded-md p-1 md:p-2">
            <p className='text-3xl font-semibold text-yellow-500'>EXTRAS</p>
            <div className="flex flex-wrap justify-around">
            <BuyCoffee />
            <Chess />
            </div>
        </div>
    )
}