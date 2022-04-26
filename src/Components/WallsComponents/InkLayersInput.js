import { useContext } from 'react'
import { AppContext } from 'App.js'
import WallMethods from 'Components/Scripts/utilClasses/WallMethods.js'

export default function InkLayersInput() {

    const { walls, setWalls } = useContext(AppContext)

    return (
        <div>
            <label>
                Demãos
            </label>
            <input
                type='number'
                value={WallMethods.getWallsInkLayers(walls)}
                onChange={(e)=> WallMethods.setWallsInkLayers(setWalls, e.target.value)}
            />
        </div>
    )
}