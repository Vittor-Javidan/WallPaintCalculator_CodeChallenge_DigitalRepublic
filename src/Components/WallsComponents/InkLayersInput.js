import { useContext } from 'react'
import { AppContext } from 'App.js'
import WallMethods from 'Components/Scripts/CustomClasses/WallMethods.js'

export default function InkLayersInput() {

    const { walls, setWalls } = useContext(AppContext)

    return (
        <div className='InkLayersInput-div'>
            <label className='InkLayersInput-label'>
                Demãos
            </label>
            <input
                className='InkLayersInput-input'
                type='number'
                value={WallMethods.getWallsInkLayers(walls)}
                onChange={(e)=> WallMethods.setWallsInkLayers(setWalls, e.target.value)}
            />
        </div>
    )
}