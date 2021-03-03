// Lifting state

import React, { useState } from 'react'

import { WorkShopNote } from '../../reusables/workshop-note'
import file from './01.md'

/**
 * Write functionality to display user input
 */
function Name({name, OnNameChange}){
    return(
    <div>
        <label htmlFor="name">Name: </label>
        <input id='name' value={name} onChange={OnNameChange}/>
    </div>
        
    )
}

function Animal({animal, OnAnimalChange}){
    return(
        <div>
            <label htmlFor="animal">Favourite animal: </label>
            <input id='animal' value={animal} onChange={OnAnimalChange}/>
        </div>
            
        )
}

function Display({name, animal}){
    return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}
function UserInputDisplay(){
    // 💣 remove this code 
    const[name, setName] = useState('')
    const[animal, setAnimal] = useState('')
    return(
        <div>
            <Name name={name} OnNameChange= {(event) => setName(event.target.value)}/>
            <Animal animal={animal} OnAnimalChange= {(event) => setAnimal(event.target.value)}/>
            <Display name={name} animal={animal}/>
        </div>
    ) 
}

function App(){
    return(
        <div className="grid-container">
        <WorkShopNote file={file} />
        <UserInputDisplay />
    </div>
    ) 
    
}

export default App