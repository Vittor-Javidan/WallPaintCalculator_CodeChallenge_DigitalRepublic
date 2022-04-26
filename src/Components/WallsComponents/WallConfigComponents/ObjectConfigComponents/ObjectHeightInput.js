import { useContext } from 'react'
import { AppContext } from 'App.js'
import WallMethods from 'Components/Scripts/utilClasses/WallMethods.js'

export default function ObjectHeightInput({ index_i, index_j }) {

    const { walls, setWalls } = useContext(AppContext)

    return (
        <div className='ObjectHeightInput-div'>
            <label className='ObjectHeightInput-label'>
                Altura (m2)
            </label>
            <input
                className='ObjectHeightInput-input'
                type='number'
                value={WallMethods.getWallObjectHeight(walls, index_i, index_j)}
                onChange={(e) => WallMethods.setWallObjectHeight(setWalls, index_i, index_j, e.target.value)}
            />
        </div>
    )
}