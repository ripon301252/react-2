import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./Button"
import Counter from './Counter'
import Team from "./Team"
import Users from "./Users"
import Friends from './Friends'


function App() {
  

  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <Button></Button>
      
    </>
  )
}

export default App
