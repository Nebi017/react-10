import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'


function Features() {
    const navigate = useNavigate();

  return (
    <>
        <div className='Content'>
            Features Page
        </div>
 <div className='btn'>
     <button onClick={()=>navigate('/')}>Go back</button>
</div>    
    </>
  )
}

export default Features