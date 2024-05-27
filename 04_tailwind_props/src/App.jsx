import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Card2 from './components/card2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' bg-green-500 text-black text-9xl p-5 rounded-xl mb-5' >Tailwind Test</h1>
      <Card userName='Aritra' />
      <Card2 coreMembers='Aritra' btnText="Click Me"/>
      

    </>
  )
}

export default App
