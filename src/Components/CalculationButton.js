import { AppContext } from 'App'
import { useContext } from 'react'

import WallMethods from './Scripts/utilClasses/WallMethods'

export default function CalculationButton() {

    const { setWalls } = useContext(AppContext)

    return (
        <button
            className='CalculationButton'
            onClick={() => {
                WallMethods.calculateCans(setWalls)
                WallMethods.calculateTotalPrice(setWalls)
            }}
        >
            clique para calcular
        </button>
    )
}