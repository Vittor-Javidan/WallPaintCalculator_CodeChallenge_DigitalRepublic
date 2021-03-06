import {createContext, useState} from 'react'
import appConfig from 'AppConfig.js'

import Walls from 'Components/Walls.js'
import Output from 'Components/Output.js'
import CalculationButton from 'Components/CalculationButton.js'

export const AppContext = createContext()

function wallInit () {

    const wallsArray = []
    for(let i = 0; i < appConfig.WALLS_AMMOUNT; i++){
        wallsArray.push({
            width: appConfig.WALL_WIDTH,
            duplicates: appConfig.DUPLICATES_AMOUNT,
            wallObjectsAmount: appConfig.WALLS_OBJECT_AMOUNT,
            objectsArray: []
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
        cansAmount: appConfig.CANS_AMOUNT_ARRAY,
        cansPricesString: appConfig.CANS_PRICES_STRING,
        pricesArray: appConfig.CANS_PRICES,
        totalCans: appConfig.TOTAL_CANS,
        wallsArray: wallInit(),
    })

    const props = {
        walls,
        setWalls
    }

    return (
        <AppContext.Provider value={props}>
            <div className='AppBody'>
                <h1 className='AppTitle'>
                    Calculadora de latas de tinta
                </h1>
                <Walls />
                <CalculationButton />
                <Output />
            </div>
        </AppContext.Provider>
    );
}