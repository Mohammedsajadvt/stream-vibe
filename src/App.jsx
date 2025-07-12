import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import {Home,MoviesAndShows,Support,Subscriptions} from './index'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies-and-shows' element={<MoviesAndShows />} />
        <Route path='/support' element={<Support />} />
        <Route path='/subscription' element={<Subscriptions />} />
      </Routes>
    </Router>
  )
}

export default App
