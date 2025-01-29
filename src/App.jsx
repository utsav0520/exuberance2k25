import {Fotter} from "./components/index"
import { Routes, Route } from 'react-router-dom'
import {
  Home,
  EventPage,
  Schedule
} from './pages/index'
 
function App() {

  return (
    <> 
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/event' element={<EventPage />}  />
        <Route path='/schedule' element={<Schedule />}  />
      </Routes>
      <Fotter />
    </>
  )
}

export default App
