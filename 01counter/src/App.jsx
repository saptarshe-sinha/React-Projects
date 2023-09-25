import { useState } from 'react'
import './App.css'


function App() {

  let [counter, setCounter] = useState(10);
 
  //let counter = 10;

  const addValue = () => {
    // console.log(counter)

    // counter = counter + 1;
    // setCounter(counter);

    // or we can use
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Hello Ji Hello Ji</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}
      >Add Value {counter} </button>
      <br />
      <button onClick={removeValue}
      >Decrease Value {counter} </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
