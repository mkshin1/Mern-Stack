import './App.css';
import React, {useState} from "react"

import Form from "./Components/Form"
import Box from "./Components/Box"

function App() {

  // const [boxColor, setBoxColor] = useState("")

  const [box, setBox] = useState([])

  return (
    <div className="App">
      <h1>Box Generator </h1>

      <Form box={box} setBox  ={setBox}/>
      <Box />
    </div>
  );
}

export default App;
