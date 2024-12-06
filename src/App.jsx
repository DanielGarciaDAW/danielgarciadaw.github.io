import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderComponent } from './components/HeaderComponent'


function App() {

  return (
    <>
      <main className="main-content">
        <h1>Daniel García Guerrero</h1>
        <h2>Frontend Developer</h2>
        <HeaderComponent />
      </main>
    </>
  )
}

export default App
