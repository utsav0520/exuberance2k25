import {Fotter} from "./components/index"
import { Routes, Route } from 'react-router-dom'
import {
  Home,
  EventPage,
  Schedule,
  Rangoli
} from './pages/index'
 
function App() {

  return (
    <> 
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/events' element={<EventPage />}  />
        <Route path='/schedule' element={<Schedule />}  />
        <Route path='/rangoli' element={<Rangoli />}  />
      </Routes>
      <Fotter />
    </>
  )
}

export default App
