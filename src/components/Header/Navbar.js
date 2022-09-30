import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        // { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "Login", link: "/login" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-gray-50 py-2 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                    <span className='text-3xl text-purple-900 text-opacity-70 mr-1 pt-2'>
                        <ion-icon name="book"></ion-icon>
                    </span>
                    IELTS
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-50 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7'>
                                <Link to={link.link} className='text-gray-500  hover:text-purple-600 duration-500'>{link.name}</Link>
                                {/* <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a> */}
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default Navbar