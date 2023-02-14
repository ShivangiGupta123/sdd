import React from 'react'
import { useSelector } from 'react-redux'

function App() {
const appvar = useSelector((state)=>state.changevalue);

  return (
    <div>
    <h1>React-Redux</h1>
     {appvar}

    </div>
  )
}

export default App
