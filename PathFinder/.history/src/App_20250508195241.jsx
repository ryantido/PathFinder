import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Jobscard from '../components/jobscard/Jobscard'
import { cardData, jobs } from '../components/data/data'
import Header from '../components/Header/Header'

function App() {

  return (
    <>
     <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Header/>} />

        </Routes>
        {
          cardData.map((data) => (
            <Card text={data.text} />
          ))}{
          jobs.map((item, index) => (
            <JobsCa
              index={index}
              logo={item.logo}
              title={item.title}
              name={item.name}
              location={item.location}
              contrat={item.contrat}
              salary={item.salary}
            />
          ))
        }
     </Router>
    </>
  )
}

export default App
