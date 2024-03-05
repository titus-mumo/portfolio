import { Chess } from "../components/Chess"
import { BuyCoffee } from "../components/BuyCoffee"
import React from "react"

export const Support = () => {
    return(
        <div className="mb-10">
            <p className='text-3xl font-semibold text-yellow-500'>EXTRAS</p>
            <div className="flex flex-wrap justify-around">
            <BuyCoffee />
            <Chess />
            </div>
        </div>
    )
}