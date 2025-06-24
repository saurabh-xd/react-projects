import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Entries from './Pages/Entries'
import Home from './Pages/Home'

function App() {

  return (
   
     <BrowserRouter>
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/entries" element={<Entries/>}/>

     </Routes>

     </BrowserRouter>

   
  )
}

export default App
