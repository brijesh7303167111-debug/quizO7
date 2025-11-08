import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const HomePage = () => {
    const Navigate = useNavigate();
  return (
    <div className=' flex justify-center items-center pt-10   bg-slate-700 w-full h-screen' >
      
      <div className='' >
        <div className=' border-5 border-white flex justify-center m-5' >
        <img src="https://tse4.mm.bing.net/th/id/OIP.bErIyVTs9tkolOfAAJm8CwHaE8?pid=Api&P=0&h=180" alt="yeah image hai" />
        </div>
         <div className='flex justify-center m-5' >
          <button onClick={() => Navigate("/quiz")}   className='m-center text-center p-2 border-2 border-amber-50 text-white  ' >Start   Quiz</button>
            </div>
      </div>
      <div>
      
      </div>

    </div>
  )
}

export default HomePage
