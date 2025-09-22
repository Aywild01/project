import './App.css'

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/home'


function App() {


  
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<div>
            <p>Hello this is the abour page</p>
          </div>} />
        </Routes>
      </Router>
  )
}

export default App
