import {useState} from "react"
import appConfig from "./AppConfig";

import Output from "./Components/Output";
import Inputs from "./Components/Inputs";

function wallInit () {
    const wallsArray = []
    for(let i = 0; i < appConfig.WALLS_AMMOUNT; i++){
        wallsArray.push({
            width: 1.0,
            doors: 0,
            windows: 0
        })
    }
    return wallsArray
}

export default function App() {

    const [walls, setWalls] = useState({
        height: 1.0,
        wall: wallInit()
    })
        
    return (
        <div className="App">
            <h1 className="App-Title">Wall Paint Calculator</h1>
            <form>
                <Inputs walls={walls} setWalls={setWalls}/>
            </form>
            <Output walls={walls}/>
        </div>
    );
}