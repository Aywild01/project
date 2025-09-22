import './App.css'

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/home'


function App() {
  return(
    <Router>
      <Routes>
        <Route src="{Home}" ></Route>
      </Routes>
    </Router>
  )
}

export default App
