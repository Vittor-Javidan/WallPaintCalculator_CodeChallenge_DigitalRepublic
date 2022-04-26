import {createContext, useState} from 'react'
import appConfig from 'AppConfig.js'

import Output from 'Components/Output.js'
import Walls from 'Components/Walls.js'

export const AppContext = createContext()

function wallInit () {

    const wallsArray = []
    for(let i = 0; i < appConfig.WALLS_AMMOUNT; i++){
        wallsArray.push({
            width: appConfig.WALL_WIDTH,
            duplicates: appConfig.DUPLICATES_AMOUNT,
            wallObjectsAmount: appConfig.WALLS_OBJECT_AMOUNT,
            wallObjects: []
        })
    }
    return wallsArray
}

export default function App() {

    const [walls, setWalls] = useState({
        height: appConfig.WALL_HEIGHT,
        wallsAmount: appConfig.WALLS_AMMOUNT,
        inkLayers: appConfig.INK_LAYERS,
        inkEfficiency: appConfig.INK_EFFICIENCY,
        cansString: appConfig.CANS_SIZES,
        wall: wallInit(),
    })

    const props = {
        walls,
        setWalls
    }

    return (
        <AppContext.Provider value={props}>
            <div className='App-div'>
                <h1 className='App-h1'>
                    Calculadora de latas de tinta
                </h1>
                <Walls />
                <Output />
            </div>
        </AppContext.Provider>
    );
}