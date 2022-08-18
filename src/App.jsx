import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Examen from './components/Examen'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Examen />
    </div>
  )
}

export default App
