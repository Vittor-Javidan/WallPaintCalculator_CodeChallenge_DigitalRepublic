import { useContext } from 'react'
import { AppContext } from 'App.js'
import WallMethods from 'Components/Scripts/utilClasses/WallMethods.js'

export default function WallDuplicates({index}){

    const {walls, setWalls} = useContext(AppContext)

    return (
        <div>
            <label>
                Duplicatas
            </label>
            <input 
                type='number'
                value={WallMethods.getWallDuplicatesAmount(walls, index)}
                onChange={(e) => WallMethods.setWallDuplicatesAmount(setWalls, index, e.target.value)}
            />
        </div>
    )
}