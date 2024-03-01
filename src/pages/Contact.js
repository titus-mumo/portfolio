export const Contact = () => {
    return(
        <div className="flex flex-wrap justify-around">
        <div className="flex flex-col justify-start">
            <p>You can reach me on:</p>
            <ul>
            <li>
                <a>
                    <svg class="w-5 h-5 dark:text-white text-[#EA4333] mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Gmail</title>
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z">
                        </path>
                    </svg>
                    <span>tituskennedy74@gmail.com</span>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/justTitusk" class="px-2 text-sm flex text-purple-600 dark:text-gray-300 hover:text-[#1DA1F2] mb-2">
                    <svg class="w-5 h-5 text-[#1DA1F2] mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Twitter</title>
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z">
                        </path>
                    </svg>
                    <span className="text-blue">@titus</span>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/titus-mumo-a9971926a/" class="px-2 text-sm flex text-purple-600 dark:text-gray-300 hover:text-[#0A66C2] mb-2">
                    <svg class="w-5 h-5 text-[#0A66C2] mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>LinkedIn</title>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                        </path>
                    </svg>
                    <span>@titus</span>
                </a>
            </li>
            </ul>
        </div>
        <div>
            You can view my work on:
            <p>
                <a>
                    <span></span>
                    <span>@titus</span>
                </a>
            </p>
        </div>
        </div>
    )
}