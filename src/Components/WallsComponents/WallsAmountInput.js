import { useContext } from 'react'
import { AppContext } from 'App.js'

import WallMethods from 'Components/Scripts/utilClasses/WallMethods.js'

export default function WallsAmountInput() {

    const { walls, setWalls } = useContext(AppContext)

    return (
        <div>
            <label>
                Quantidade de paredes
            </label>
            <input
                type='number'
                value={WallMethods.getWallsAmount(walls)}
                onChange={(e) => WallMethods.setWallsAmount(setWalls, e.target.value)}
            />
        </div>
    )
}