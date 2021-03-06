// useEffect: persistent state

import React from 'react'
import useLocalStorageState from '../../Utils/localstorage'
import { WorkShopNote } from '../../reusables/workshop-note'
import file from './01.md'

function Greeting({initialName = ''}) {
  
  const [name, setName] = useLocalStorageState('name',initialName)

  function handleChange(event) {
    setName(event.target.value)
  }
  
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return (
    <div className="grid-container">
        <WorkShopNote file={file} />
         <Greeting />
    </div>
   
  )
}

export default App