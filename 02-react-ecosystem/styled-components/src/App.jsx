import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Pessoa from './components/Pessoa'

function App() {

  return (
    <>
      <Pessoa nome="Kauã" idade="17" profissao="Desenvolvedor Web" foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6gRo8gQwjM1DwDDL4F4dVS0r457EIKf_C5tSZTHOKeA&s"/>
    </>
  )
}

export default App
