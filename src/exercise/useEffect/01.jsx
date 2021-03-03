// useEffect: persistent state

import React from 'react'

import { WorkShopNote } from '../../reusables/workshop-note'
import file from './01.md'

function useLocalStorageState(key, defaulValue = '',{
  serialize = JSON.stringify, deSerialize = JSON.parse} = {}){
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key)|| defaulValue
  )

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)
  React.useEffect(() => {
     window.localStorage.setItem(key,state)
  },[state,key]);

  return [state, setState];
}

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