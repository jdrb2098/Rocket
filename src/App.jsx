import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './screens/HomeScreen'
import ContContactUsScreenact from './screens/ContactUsScreen'
import LoginScreen from './screens/LoginScreen'
import './tailwind.css'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/contact" element={<ContContactUsScreenact />} />
        <Route path="/login" element={<LoginScreen/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
