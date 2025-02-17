import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Farm from './pages/farm'
import { Navbar } from './components/navbar'
import {Footer} from './components/footer';
import './index.css'
import Boadroom from './pages/boadroom'
import BasedDex from './pages/baseddex';

function App() {

  return (
    <main className='w-full'>
      <BrowserRouter>
        <Navbar />
        <div className='w-full overflow-x-auto text-white'>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/farm' element={<Farm/>}/>
            <Route path='/boadroom' element={<Boadroom/>}/>
            <Route path='/dex' element={<BasedDex/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer/>
    </main>
  )
}

export default App
