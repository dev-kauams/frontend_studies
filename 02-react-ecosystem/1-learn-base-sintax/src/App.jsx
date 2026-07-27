import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const nome = "Kauã"

  const nomeMausculo = nome.toUpperCase()

  function soma(a, b){
    return a + b
  }

  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6gRo8gQwjM1DwDDL4F4dVS0r457EIKf_C5tSZTHOKeA&s"

  const br = 10

  return (
    <>

      <h1>Olá Mundo!</h1>
      <p>Meu "primeiro" App</p>

      <div className="App">
        <h2>Alterando JSX</h2>
        <p>Olá, {nomeMausculo}!</p>
        <p>Soma: {soma(2, 2)}</p>
        <br />
        <img src={url} alt="Imagem Teste" />

      </div>
    </>
  )
}

export default App
