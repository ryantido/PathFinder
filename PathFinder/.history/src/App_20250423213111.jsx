import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from '../components/common/Header'
import Card from '../components/card/Card'

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Header/>} />

        </Routes>
        <Card />
     </Router>
    </>
  )
}

export default App
