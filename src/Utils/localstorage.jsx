import React from 'react'

/**
 * 
 * @param {*} key Unique identifier used in local storage
 * @param {*} defaulValue value to be stored in the local storage
 * @param {*} param2 serialization and deserialization mechanism which 
 * uses by default JSON.parse and JSON.stringify
 */
export default function useLocalStorageState(key, defaulValue = '',{
  serialize = JSON.stringify, deSerialize = JSON.parse} = {}){
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [state, setState] = React.useState(
    () => {
        const valueInLocalStorage = window.localStorage.getItem(key)
        if(valueInLocalStorage){

          try {
            return deSerialize(valueInLocalStorage)
          } catch (error){
            window.localStorage.removeItem(key)
          }
        }
        return typeof defaultValue === 'function' ? defaulValue() : defaulValue
    })

    const prevKeyRef = React.useRef(key)

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)
  React.useEffect(() => {
    const prevKey = prevKeyRef.current
    if(prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
     window.localStorage.setItem(key,serialize(state))
  },[key,state,serialize]);

  return [state, setState];
}

