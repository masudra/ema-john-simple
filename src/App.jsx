import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heder from './Components/Header/Heder'
import Shop from './Components/Shope/Shop'

function App() {

  return (
    <div className="App">

      <Heder></Heder>
      <Shop></Shop>
     
    </div>
  )
}

export default App
