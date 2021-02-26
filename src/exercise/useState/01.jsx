import React from 'react';
import file from './01.md';

import { WorkShopNote  } from "../../reusables/workshop-note";

/**
 * 
 */
function Greeting(){
    return (
        <div>
            <p>Write your code here 🐨</p>
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