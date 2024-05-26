import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, newValue] = useState(0)

  const addValue = () => {

    newValue(counter + 1)
    
    console.log("clicked", counter);

  }

  const removeValue = () => {
    
    newValue(counter - 1)
    
    console.log("clicked", counter);
  }

  return (
    <>
      <h1>Aritra Bera</h1>

      <h3>Counter value:  {counter}</h3>

      <button onClick={addValue} disabled={counter==20}>
        Add value</button>

      <br />
      <br />

      <button onClick={removeValue} disabled={counter==0}>
        Remove Value</button>
    </>
  )
}


export default App
