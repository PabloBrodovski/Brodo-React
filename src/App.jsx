import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './componentes/NavBar'
import Footer from './componentes/Footer'
import Inicio from './componentes/Inicio'
import Grafica from './componentes/Grafica'
import Estampados from './componentes/Estampados'
import Fotografia from './componentes/Fotografia'
import Precios from './componentes/Precios'
import Contacto from './componentes/Contacto'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/Inicio' element={<Inicio/>}/>
          <Route path='/Grafica' element={<Grafica/>}/>
          <Route path='/Estampados' element={<Estampados/>}/>
          <Route path='/Fotografia' element={<Fotografia/>}/>
          <Route path='/Precios' element={<Precios/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>


    </>
  )
}

export default App
