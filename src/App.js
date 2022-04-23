import {createContext, useState} from "react"
import appConfig from "./AppConfig";

import Output from "./Components/Output";
import FormWallInputs from "./Components/FormWallInputs";

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
        wallsAmount: appConfig.WALLS_AMMOUNT,
        wall: wallInit(),
        inkLayers: appConfig.INK_LAYERS
    })

    const props = {
        walls,
        setWalls
    }
        
    return (
        <AppContext.Provider value={props}>
            <div className="App-div">
                <h1 className="App-h1">Wall Paint Calculator</h1>
                <FormWallInputs />
                <Output />
            </div>
        </AppContext.Provider>
    );
}