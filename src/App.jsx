import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Blue from './components/Blue'
import Red from './components/Red'

function App() {

  
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>

        <div id="navbar">
          <Link to="/home">🏠🏠🏠🏠🏠</Link>
          <Link to="/blue">💙💙💙💙💙</Link>
          <Link to="/red">🧧🧧🧧🧧🧧 </Link>
\        </div>

        <div id="main-section">
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/blue" element={<Blue/>}/>
            <Route path="/red" element={<Red/>}/>
          </Routes>
        </div>
      </div>
    </>
  )


}

export default App
