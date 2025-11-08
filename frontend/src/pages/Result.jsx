import React from 'react'
import { useAuth } from '../Context/AuthContext';

const Result = () => {
    const { Score, increaseScore } = useAuth();
    
  
 const percent = (Score/100)*100;


  
  return (
     <div className=' flex justify-center  pt-10   bg-slate-700 w-full h-screen' >


      <div className='text-white text-cenetr mt-20 items-center ' >
      <h2 className='text-2xl mb-20 text-cenetr items-center ' >Percentage: <span className='font-bold text-center text-green-400'> {percent}%</span></h2>

        {/* <div className='w-[250px ] mb-10 h-[40px] border-3 border-white ' >
    <div className={`absolute h-full bg-green-400 w-[${percent}%]`}></div>
</div> */}
      
        <h2 className='text-2xl ' >Total Marks: <span className='font-bold text-red-800'> 100</span></h2>
      
      <h2 className='text-2xl text-cenetr items-center ' >Score: <span className='font-bold text-center text-green-400'> {Score}</span></h2>


       
      </div>
      
    
    
      
      
     

    </div>
  )
}

export default Result
