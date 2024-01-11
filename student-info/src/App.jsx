import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {

  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/register' element={<Home/>} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/*' element={<Navigate replace to='/home'/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
