import React from 'react'
import {Link} from 'react-router-dom'
import { Logo } from '../components/index'
import './css/Home.css'

function Home() {
  return (
    <div>
      <div className="header">
        <img src={Logo} alt="" />
        <div className="exb-text">
          <h1 className="inside-ex-text">
            EXUBERANCE
          </h1>
          <div className="exb-below"><h1 className="exb-below-text">2k25</h1></div>
          <div className="home-text">
            EXPLORE THE FEST
            <ul className='menu'>
            <li>
                <Link to='/events' className='button-style'>
                  EVENT INFO
                </Link>
              </li>
              <li>
                <Link to='/schedule' className='button-style'>
                  SCHEDULE
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home