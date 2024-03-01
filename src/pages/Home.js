import { Link } from "react-router-dom"

export const Home = () => {
    const handleHireMe = () => {

    }

    return(
        <main className="">
        <Link onClick={handleHireMe}>
            <div className="bg-purple-700 rounded-lg shadow m-4 hover:cursor-pointer flex items-center" >
                <div className="w-full h-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-around">
                    <span className="text-base text-white text-center md:text-lg">Big news! I'm officially looking for my next role
                    </span>
                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">Hire me</button>  
                </div>
            </div>
        </Link>
        </main>
    )
}