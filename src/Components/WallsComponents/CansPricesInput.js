import { AppContext } from 'App'
import { useContext } from 'react'

import WallMethods from 'Components/Scripts/utilClasses/WallMethods.js'

export default function CansPricesInput() {

    const { walls, setWalls } = useContext(AppContext)

    return (
        <div>
            <label>
                Preços Respectivos / Lata
            </label>
            <input
                type='text'
                value={WallMethods.getCansPriceString(walls)}
                onChange={(e) => WallMethods.setCansPricesString(setWalls, e.target.value)}
            />
        </div>
    )
}