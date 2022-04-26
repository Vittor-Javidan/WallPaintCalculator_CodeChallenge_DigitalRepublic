import { AppContext } from 'App'
import { useContext } from 'react'

import WallMethods from 'Components/Scripts/utilClasses/WallMethods.js'

export default function CansSizesInput() {

    const { walls, setWalls } = useContext(AppContext)

    return (
        <div>
            <label>
                Volumes de Latas (L)
            </label>
            <input
                type='text'
                value={WallMethods.getCansString(walls)}
                onChange={(e) => WallMethods.setCansString(setWalls, e.target.value)}
            />
        </div>
    )
}