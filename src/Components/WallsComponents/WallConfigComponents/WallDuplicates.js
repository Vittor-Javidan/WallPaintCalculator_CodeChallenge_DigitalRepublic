import { useContext } from 'react'
import { AppContext } from 'App.js'
import WallMethods from 'Components/Scripts/utilClasses/WallMethods.js'

export default function WallDuplicates({index}){

    const {walls, setWalls} = useContext(AppContext)

    return (
        <div className='WallDuplicates-div'>
            <label className='WallDuplicates-label'>
                Duplicatas
            </label>
            <input
                className='WallDuplicates-input' 
                type='number'
                value={WallMethods.getWallDuplicatesAmount(walls, index)}
                onChange={(e) => WallMethods.setWallDuplicatesAmount(setWalls, index, e.target.value)}
            />
        </div>
    )
}