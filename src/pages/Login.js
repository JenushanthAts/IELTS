import React, { useContext, useState } from 'react'
import Illustration from '../assets/Illustration.png'
import axios from 'axios'
import { API } from "../config"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import {
    LoginFailure,
    LoginStart,
    LoginSuccess,
} from "../context/AuthAction";
import Navbar from '../components/Header/Navbar'
const Login = () => {
    const navigate = useNavigate()
    const { dispatch } = useContext(AuthContext);
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState(false);
    const handleChange = (e) => {
        setError(false);
        const { id, value } = e.target;
        setCredentials(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    //handle submit method
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(LoginStart());
        //call Api
        try {
            // console.log(process.env.REACT_APP_URL)
            const res = await axios.post(`${API}/api/user/signin`, { email: credentials.email, password: credentials.password });
            // console.log(res)
            dispatch(LoginSuccess(res.data));
            if (res) navigate("/dashboard")
            return res
        } catch (err) {
            dispatch(LoginFailure());
            setError(true)
            setCredentials({ email: "", password: "" })
            // console.log("Err:", err)
        }
    }
    return (
        <>
            <Navbar />
            <div name='login' className='w-full h-screen  flex flex-col justify-between' >
                <div className='grid md:grid-cols-2 max-w-[1240px] m-auto '>
                    {/* className='shadow-md rounded px-8 pt-8 pb-6 mb-4' */}
                    {/* <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'> */}
                    <form className=' rounded px-8 pt-8 pb-6 mb-4 sm:mt-7' onSubmit={handleSubmit}>
                        <p className='text-2xl text-center font-bold text-gray-500'>Login</p>
                        <div className='mb-4'>
                            <label className='block text-gray-500 text-sm font-bold mb-2 ' >
                                Email
                            </label>
                            <input className='
                         bg-gray-200 
                         appearence-none 
                         border-2 
                         border-gray-200 
                         rounded w-full py-2 px-4 
                         text-gray-700 
                         leading-tight 
                         focus:outline-none 
                         focus:bg-white 
                         focus:border-purple-500'
                                id="email" type="email"
                                placeholder="Enter Email"
                                value={credentials.email}
                                onChange={handleChange}
                                required></input>
                        </div>
                        {/* password */}
                        <div className='mb-6'>
                            <label className='block text-gray-500 text-sm font-bold mb-2 ' >
                                Password
                            </label>
                            <input className='
                        bg-gray-200 
                        appearence-none 
                        border-2 
                        border-gray-200 
                        rounded w-full py-2 px-4 
                        text-gray-700 
                        leading-tight 
                        focus:outline-none 
                        focus:bg-white 
                        focus:border-purple-500'
                                id="password"
                                type="password"
                                placeholder="***********"
                                value={credentials.password}
                                onChange={handleChange}
                                minLength="6"
                                required></input>
                            {error && <p className='text-red-500 text-1xl '>Please Verify Your Credentials</p>}
                        </div>
                        <div className='flex items-center justify-between'>
                            <button type="submit" className='bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Sign In</button>
                            <a
                                className='
                        inline-block align-baseline 
                        font-bold text-sm text-purple-500 
                        hover:text-purple-400' href='#'>Forgot Password?</a>

                        </div>
                    </form>

                    {/* </div> */}
                    <div>
                        <img className='w-full' src={Illustration} alt="/" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login