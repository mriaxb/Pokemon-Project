// import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Home } from '../src/components/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Pokedex } from '../src/components/Pokedex';
import { Legendaries} from '../src/components/Legendaries/index';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/legendaries' element={<Legendaries/>}/>
        </Routes>
      </Router>
      {/* <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        
                    </Routes>
                
                </Router> */}
    </>
  )
}

export default App
