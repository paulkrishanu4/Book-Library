

import './App.css'
import { Home } from './assets/components/Home'
import { Routes, Route } from 'react-router-dom'
import {Wishlist} from './assets/components/Wishlist'
import { GlobalProvider } from './assets/components/Globalstate'

function App() {
  

  return (
    <>
    <GlobalProvider>
    <Routes>
     <Route path='/' element={<Home></Home>}/>
      
      <Route path='/Wishlist' element={<Wishlist></Wishlist>}/>
    </Routes>
    </GlobalProvider>
      
    </>
  )
}

export default App
