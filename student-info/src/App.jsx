import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/*' element={<Navigate replace to='/home'/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
