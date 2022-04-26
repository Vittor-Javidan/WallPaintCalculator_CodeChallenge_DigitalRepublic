import { useContext } from 'react'
import { AppContext } from 'App.js'
import WallMethods from 'Components/Scripts/utilClasses/WallMethods.js'

export default function InkEfficiencyInput() {

    const { walls, setWalls } = useContext(AppContext)

    return (
        <div className='InkEfficiencyInput-div'>
            <label className='InkEfficiencyInput-label'>
                Gasto de tinta (L/m2)
            </label>
            <input
                className='InkEfficiencyInput-input'
                type='number'
                value={WallMethods.getWallInkEfficiency(walls)}
                onChange={(e) => WallMethods.setWallsInkEfficiency(setWalls, e.target.value)}
            />
        </div>
    )
}