import './App.css'

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'


function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/home' element={<Home />}></Route>

      </Routes>
    </Router>
  )
}

export default App
