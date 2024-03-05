import { useEffect, useState } from "react"
import React from "react";
const emailjs = require('@emailjs/browser');
import toast, {Toaster} from "react-hot-toast";

export const Collaborate = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const sendMessageSuccess = () => toast.success('Message send successfully')
    const sendMessageError = () => toast.error("An error occured")
    
    useEffect(() => emailjs.init('nXLNUlX2PXrRraZad'), [])

    const handleSubmit =async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const messsage = e.target.message.value
        const serviceId = 'service_3f87rza'
        const templateId = 'template_tri153i'
        try {
            setLoading(true)
            await emailjs.send(serviceId, templateId, {
                name: name,
                email: email,
                message: message
            });
            sendMessageSuccess()
        } catch (error) {
            sendMessageError()
        } finally{
            setEmail("")
            setName("")
            setMessage("")
            setLoading(false)
        }
    }

    return(
        <div className="collaborations sm:w-sm">
            <p className='text-3xl font-semibold text-yellow-500'>COLLABORATIONS</p>
            <Toaster className='dark:bg-gray-900 dark:text-white text-black bg-white'/>
            <p className="text-lg sm:font-xl sm:text-xl m-2 dark:text-white">Interested in working together? Let's talk:</p>
            <form className="max-w-md mx-auto sm:max-w-sm dark:bg-gray-600 p-5 rounded-lg shadow-2 bg-white" method="post" onSubmit={e => handleSubmit(e)}>
            <div className="relative z-0 w-full mb-5 group">
                <input value = {name} onChange= {e => setName(e.target.value)} type="text" name="name" id="floating_name" className="dark:bg-gray-800 block py-2.5 px-2 w-full rounded-lg text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Your Name" required />
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input value = {email} onChange= {e => setEmail(e.target.value)} type="email" name="email" id="floating_email" className="dark:bg-gray-800 block py-2.5 px-2 w-full rounded-lg text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Your Email" required />
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <textarea value = {message} type="text" onChange= {e => setMessage(e.target.value)} name="message" id="floating_message" className="dark:bg-gray-800 block py-2.5 px-2 w-full rounded-lg text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Message" required />
            </div>
            {
                loading? (<span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>):
                    (<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send message</button>)
            }
            
            </form>
            
        </div>
    )
}



