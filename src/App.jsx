import './App.css'

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Project from './pages/project'
import Contact from './pages/contact'


function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

      </Routes>
    </Router>
  )
}

export default App
