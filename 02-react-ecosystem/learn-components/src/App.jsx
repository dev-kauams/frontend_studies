import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HelloWorld from './components/HelloWorld.jsx'
import Frase from './components/Frase.jsx'

function App() {


  return (
    <>
      <div className='App'>
        <HelloWorld />

        <Frase />
      </div>
    </>
  )
}

export default App
