import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftNav from './components/LeftNav'
import MainBar from './components/MainBar'

function App() {  
  return (
    <>
      <LeftNav />
      <MainBar />
    </>
  )
}

export default App
