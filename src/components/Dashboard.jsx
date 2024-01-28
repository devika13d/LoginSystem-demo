import React from 'react'
import { useLocation } from 'react-router-dom';

function Dashboard() {
    const location = useLocation();

  return (
   <>
   <div className=' justify-content-center align-items-center w-100 mt-5 '>
      <div className='bg-dark p-5 rounded me-5' style={{ width: '500px' }} id='tr'>
        <h2 className='text-center text-light'>Dashboard</h2>
       
          <p className="text-success text-center">Welcome, User!</p>
      
      </div>
    </div>
   </>
  )
}

export default Dashboard