import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from '../components/common/Header'
import Jobscard from '../components/jobscard/Jobscard'
import { cardData } from '../components/data/data'

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
          ))}{}
          jobs.map((item, index) => (
            <Jobscard 
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
