import { useContext } from 'react'
import { AppContext } from 'App'
import WallMethods from 'Components/Scripts/utilClasses/WallMethods.js'

export default function HeightInput(){

    const {walls, setWalls} = useContext(AppContext)

    return (
        <div className='HeightInput-div'>
            <label className='HeightInput-label'>
                Altura das paredes (m2)
            </label>
            <input
                className='HeightInput-input'
                type='number'
                value={WallMethods.getWallsHeight(walls)}
                onChange={(e)=> WallMethods.setWallsHeight(setWalls, e.target.value)}
            />
        </div>
    )
}