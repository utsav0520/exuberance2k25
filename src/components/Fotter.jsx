import React from 'react'
import './Fotter.css'
import { Insta } from './index'

function Fotter() {
  return (
    <div className='fotter-coin'>
        <div className='ft-co'>
            <h1 className="f-head-text">Faculty Coordinators : </h1>
            <h1 className='f-text'>utsav vachhani</h1>
            <h1 className='f-text'>utsav vachhani</h1>
        </div>
        <div className='ft-co'>
            <h1 className="f-head-text">Event Coordinators : </h1>
            <h1 className='f-text'>Ayush Vanani</h1>
            <h1 className='f-text'>Krish Dhola</h1>
        </div>
        <div className='ft-co'>
            <h1 className="f-head-text">Devolped By : </h1>
            <a href="https://github.com/utsavvachhani/"><h1 className='f-text'>Utsav Vachhani</h1></a>
        </div>
        <div className='ft-co'>
            <h1 className="f-head-text">SWAT Team</h1>
            <h1 className='f-text'>GS:Meet Maniya</h1>
            <h1 className='f-text'>Vice Gs:Arshit Gujarti</h1>
            <h1 className='f-text'>CS:Vansh Chapadiya</h1>
            <h1 className='f-text'>LR:Chahi Tejani</h1>
            <h1 className='f-text'>Vice LR:Vedanshi Ponkia</h1>
        </div>
        <section className='her'>
          <div className='container'>
            <h2 className='sub'>Follow us on instagram !</h2>
            <div>
              <a
                href='https://www.instagram.com/exuberance_2k25/'
                className=''
                target='_blank'
                rel='noreferrer'
                alt='exuberance_2k25'
              >
                <img src={Insta} alt='instagram' />
              </a>
            </div>
            <div>
              <p class='text-sm'>© Exuberance 2k25 - All Rights Reserved</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Fotter
