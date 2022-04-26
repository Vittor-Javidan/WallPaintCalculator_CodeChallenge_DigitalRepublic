import { AppContext } from "App"
import { useContext } from "react"

import WallMethods from "Components/Scripts/utilClasses/WallMethods"

export default function CansSizesInput() {

    const { walls, setWalls } = useContext(AppContext)

    return (
        <div className='CansSizesInput-div'>
            <label className='CansSizesInput-label'>
                Volumes de Latas (L)
            </label>
            <input
                className='CansSizesInput-input'
                type='text'
                value={WallMethods.getCansString(walls)}
                onChange={(e) => WallMethods.setCansString(setWalls, e.target.value)}
            />
        </div>
    )
}