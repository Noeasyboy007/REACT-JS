import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowd, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // UseRef Hook
  const passWordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = ""

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowd) str += "0123456789"

    if (charAllowed) str += "!@#$%^&*()_+[]{}~`"

    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowd, charAllowed, setPassword])

  const cpyPassordToClipboard = useCallback(() => {
    passWordRef.current?.select();
    // passWordRef.current?.setSelectionRange(0,20);
     window.navigator.clipboard.writeText(password) }, [password])

  useEffect(() => { passwordGenerator() }, [length, numberAllowd, charAllowed, passwordGenerator])

  return (
    <div className=" w-full max-w-md max-auto shadow-md rounded-lg px-4 py-5 my-40 mx-80 text-orange-500 bg-gray-800">

      {/* For Heading */}
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      {/* For Password Display */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">

        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passWordRef} />

        <button onClick={cpyPassordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

      </div>

      <div className='flex gap-x-2 text-orange-500'>

        {/* For Length seekbar*/}
        <div className='flex items-center gap-x-1'>

          <input type="range" min={6} max={20} value={length} className="cursor-pointer" onChange={(e) => { setLength(e.target.value) }} />

          <table>Length: {length}</table>

        </div>


        {/* For Number box */}
        <div className='flex items-center gap-x-1'>

          <input type="checkbox" defaultChecked={numberAllowd} id="nnumberInput" onChange={() => { setNumberAllowed((prev) => !prev) }} />

          <label htmlFor="numberInput">Number</label>

        </div>


        {/* For Character  box */}
        <div className='flex items-center gap-x-1'>

          <input type="checkbox" defaultChecked={charAllowed} id="charcterInput" onChange={() => { setCharAllowed((prev) => !prev) }} />

          <label htmlFor="characterInput">Characters</label>

        </div>

      </div>

    </div>
  )
}

export default App
