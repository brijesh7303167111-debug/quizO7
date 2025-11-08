import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <>
    {/* top bar */}
    <div className='bg-slate-900 fixed top-0 w-full ' >
        
        <div className='w-full flex justify-between pl-10 pr-10 p-2 text-white ' >
        <h1  onClick={() => navigate("/")} >O7 Quiz </h1>
        <h1  onClick={() => navigate("quiz")} >StartQuiz</h1>
        </div>
        

    </div>
    </>
  )
}

export default Navbar
