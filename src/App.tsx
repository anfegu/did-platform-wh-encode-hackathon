import './App.css'
import { Route, Routes } from 'react-router-dom'
import  Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
//import { useState } from 'react'

function App() {
  //const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    {/*   <Route path="/dashboard" element={<h1>Dashboard</h1>} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="/settings" element={<h1>Settings</h1>} /> */}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
    </>
  )
}

export default App
