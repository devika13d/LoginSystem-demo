import React from 'react'
import Naviga from './Naviga'
import './home.css'
import im from '../components/react.png'
function Home() {
  return (
    <div>
      <Naviga/>
      <div>
        <img src={im} alt="" />
      </div>

    </div>
  )
}

export default Home