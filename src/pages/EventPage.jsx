import React from 'react'
import './css/EventPage.css'
import {
  great,
  TeamCard
} from '../components/index'
import { Link } from 'react-router-dom'
import Photo from '../components/Photos/extra.jpg'

function EventPage() {
  const teams = [
    { title: 'Rangoli', imageSrc:Photo , link: '/rangoli' },
    { title: 'Rangoli', imageSrc:Photo , link: '/rangoli' },
    { title: 'Rangoli', imageSrc:Photo , link: '/rangoli' },
    { title: 'Rangoli', imageSrc:Photo , link: '/rangoli' },
    { title: 'Rangoli', imageSrc:Photo , link: '/rangoli' },
  ]
  return (
    <div className="teams-section">
      <div className='lin'>
          <h1>
              <Link to="/" >Home</Link>
          </h1>
          <img src={great} className='symb' alt='exubrance2k25'/>
          <h1>
              <Link to="/events" >Events</Link>
          </h1>
      </div>
      <div className='ex'>
          <h2 >Register here for all the Fabulous Events </h2>
      </div>
      <div className="team-cards-container">
          {teams.map((team, index) => (
              <Link key={index} to={team.link}>
                  <TeamCard title={team.title} imageSrc={team.imageSrc} />
              </Link>
          ))}
      </div>
    </div>
  )
}

export default EventPage
