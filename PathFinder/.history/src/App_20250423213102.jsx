import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from '../components/common/Header'

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Header/>} />
          
        </Routes>
     </Router>
    </>
  )
}

export default App
