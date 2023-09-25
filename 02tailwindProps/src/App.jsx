import { useState } from 'react'
import './App.css'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1 className="bg-slate-500 text-white p-4 rounded-3xl mb-4">Tailwind Test</h1>
     
     
      <Card username="Bristi" btnText="Click Me"/>
      <Card username="Pragoti" btnText="Visit Me"/>
      <Card /> //no props passed
      

    </>
  )
}

export default App
