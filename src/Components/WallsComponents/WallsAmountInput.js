import { useContext } from 'react'
import { AppContext } from 'App.js'

import WallMethods from 'Components/Scripts/CustomClasses/WallMethods.js'

export default function WallsAmountInput() {

    const { walls, setWalls } = useContext(AppContext)

    return (
        <div className='WallsAmountInput-div'>
            <label className='WallsAmountInput-label'>
                Quantidade de paredes
            </label>
            <input
                className='WallsAmountInput-input'
                type='number'
                value={WallMethods.getWallsAmount(walls)}
                onChange={(e) => WallMethods.setWallsAmount(setWalls, e.target.value)}
            />
        </div>
    )
}