import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from '../components/Header/Header'

function App() {

  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />
      <
     </Router>
    </>
  )
}

export default App
