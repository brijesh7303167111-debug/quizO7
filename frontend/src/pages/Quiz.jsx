import React from 'react'
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
     const { Score, increaseScore } = useAuth();
            const Navigate = useNavigate();
    const handleButtonClick = () => {
    increaseScore(100);
  };
  return (
    <div className='pt-10 bg-slate-700 f-full h-screen ' >
      
      <div>
        <div className='flex justify-center align-middle items-center' >
            {/* yeah question hai  */}
            <div className='mt-20 ' >
            <div className='text-center text-white flex items-center justify-start pl-5 text-2xl font-semibold bg-slate-500 w-120 h-10'>
                what is react ?
             </div> 

             <div onClick={() => Navigate("/result")} className='mt-20 '>
                <h1>Select One..</h1>
                <div  className='text-center mt-2  text-white flex rounded-2xl border-3 border-amber-50 hover:bg-amber-50  hover:text-black items-center justify-start pl-5 text-2xl font-semibold bg-slate-500 w-120 h-10'>
                Liberary
             </div> 
             <div  onClick={handleButtonClick}  className='text-center text-white flex items-center border-3 border-amber-50 hover:bg-amber-50 rounded-2xl  hover:text-black justify-start pl-5 text-2xl font-semibold bg-slate-500  mt-5 w-120 h-10'>
                FrameWork
             </div> 
                </div>  
             </div>
            
      
        </div>
      </div>


    </div>
  )
}

export default Quiz
