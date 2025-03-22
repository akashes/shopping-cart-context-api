import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CartPage from './page/CartPage'
import Header from './components/Header'
import CartContextProvider from './context/CartContextProvider'
import WhishListContextProvider from './context/WhishListContextProvider'
import WhishList from './page/WhishList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartContextProvider>
      <WhishListContextProvider>

    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<CartPage/>} />
      <Route path='/whishlist' element={<WhishList/>} />

      
    </Routes>
      </WhishListContextProvider>
    </CartContextProvider>
  )
}

export default App
