import { useContext } from 'react'
import { AppContext } from 'App.js'
import WallMethods from 'Components/Scripts/CustomClasses/WallMethods.js'

export default function InkEfficiencyInput() {

    const { walls, setWalls } = useContext(AppContext)

    return (
        <div className='InkEfficiencyInput-div'>
            <label className='InkEfficiencyInput-label'>
                Efficiencia da tinta
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