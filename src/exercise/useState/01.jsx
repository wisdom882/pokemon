import React from 'react';
import file from './01.md';

import { WorkShopNote  } from "../../reusables/workshop-note";

/**
 * 
 */
function Greeting({initialName=''}){

    const[input, setInput] = React.useState(initialName);

    function handleChange(e){
        setInput(e.target.value);
        //console.log(input);
    }
    return (
        <div>
            <p>Write your code here 🐨</p>
            <form>
                <label htmlFor="input">Name: </label>
                <input id="input" type="text" onChange={handleChange} value={input}/>
                {input ? <h2>Hello, {input}</h2> : "Please enter input"}
            </form>
            
        </div>
    )
}

function App() {
    return (
        <div className="grid-container">
            <WorkShopNote file={file}/>
            <Greeting />
        </div>
    )
}

export default App