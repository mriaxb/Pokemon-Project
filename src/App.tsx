// import { useState } from 'react'
import './App.css'
import { Home } from '../src/components/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Pokedex } from '../src/components/Pokedex';
import  NotFound from './components/NotFound';
import  Legendaries from '../src/components/Legendaries';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/legendaries' element={<Legendaries/>}/>
          <Route path='/notfound' element={<NotFound/>}/>


        </Routes>
      </Router>
    </>
  )
}

export default App
