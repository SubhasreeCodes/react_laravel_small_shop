import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/frontend/layout/AppLayout'
import Home from './components/frontend/Home'
import Login from './components/frontend/Login'
import Register from './components/frontend/Register'



function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
    <AppLayout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </AppLayout>
    </BrowserRouter>

  )
}

export default App
