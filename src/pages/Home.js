import React from 'react'
import { useNavigate } from 'react-router-dom'
import Illustration from '../assets/Illustration.png'
import Navbar from '../components/Header/Navbar'


const Home = () => {
    const navigate = useNavigate()
    const navigateContact = () => {
        navigate('/contact')
    }
    return (
        <>
            <Navbar />
            <div name='home' className='w-full h-screen  flex flex-col justify-between'>
                <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                    <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                        <p className='text-2xl'>IELTS Academic</p>
                        <h1 className='py-3 text-5xl md:text-5xl font-bold'>IELTS General Training</h1>
                        <p className='text-2xl'>Listening || Reading || Writing || Speaking</p>
                        <button
                            className='py-3 px-3 sm:w-[60%] 
                    my-4 bg-purple-500 hover:bg-purple-400
                     text-white font-bold rounded'
                            onClick={navigateContact}>Entroll Now</button>
                    </div>
                    <div>
                        <img className='w-full' src={Illustration} alt="/" />
                    </div>

                </div>
            </div>
        </>

    )
}


export default Home;