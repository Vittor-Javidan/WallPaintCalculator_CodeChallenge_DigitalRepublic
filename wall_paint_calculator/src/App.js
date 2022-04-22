import {createContext, useState} from "react"
import appConfig from "./AppConfig";

import Output from "./Components/Output";
import Inputs from "./Components/Inputs";

export const AppContext = createContext()

function wallInit () {
    const wallsArray = []
    for(let i = 0; i < appConfig.WALLS_AMMOUNT; i++){
        wallsArray.push({
            width: appConfig.START_INPUTS.WALL_WIDTH,
            doors: appConfig.START_INPUTS.DOORS_AMOUNT,
            windows: appConfig.START_INPUTS.WINDOWS_AMOUNT
        })
    }
    return wallsArray
}

export default function App() {

    const [walls, setWalls] = useState({
        height: appConfig.START_INPUTS.WALL_HEIGHT,
        wall: wallInit()
    })

    const props = {
        walls,
        setWalls
    }
        
    return (
        <AppContext.Provider value={props}>
            <div className="App">
                <h1 className="App-Title">Wall Paint Calculator</h1>
                <form>
                    <Inputs />
                </form>
                <Output />
            </div>
        </AppContext.Provider>
    );
}