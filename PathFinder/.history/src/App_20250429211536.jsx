import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from '../components/common/Header'
import Card from '../components/card/Card'
import { cardData, jobs } from '../components/data/data'
import Jobscard from '../components/jobscard/Jobscard'

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Header/>} />

        </Routes>
        {
          // cardData.map((data) => (
          //   <Card text={data.text} />
          // ))
          jobs.map((item, index) => (
            <Jobscard 
              index={}
              title={item.title}
            />
          ))
        }
     </Router>
    </>
  )
}

export default App
