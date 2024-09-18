import { useState } from 'react'
import Keyboard from './Components/Keyboard'
import Result from './Components/Result'
import './index.css'

function App() {
  const [result, setResult] = useState(""); 

  const handleClick = (text) => {
    if (text === "borrar") {
      setResult(result.slice(0, -1)); 
    } else {
      setResult(result + text); 
    }
  };


  return (
    <>
      <Result result={result} />
      <Keyboard onClick={handleClick} />
    </>
  )
}

export default App
