import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Farm from './pages/farm'
import { Navbar } from './pages/navbar'
import {Footer} from './pages/footer';
import './index.css'
import Boardroom from './pages/boardroom'
import BasedDex from './pages/baseddex';

function App() {

  return (
    <main className='w-full'>
      <BrowserRouter>
        <Navbar />
        <div className='w-full py-34 px-10 overflow-x-auto text-white max-w-[1280px] mx-auto'>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/farm' element={<Farm/>}/>
            <Route path='/boardroom' element={<Boardroom/>}/>
            <Route path='/dex' element={<BasedDex/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer/>
    </main>
  )
}

export default App
