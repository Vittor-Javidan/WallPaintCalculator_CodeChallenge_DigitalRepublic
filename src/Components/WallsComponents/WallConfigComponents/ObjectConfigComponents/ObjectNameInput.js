import { useContext } from 'react'
import { AppContext } from 'App'
import WallMethods from 'Components/Scripts/utilClasses/WallMethods.js'

export default function ObjectNameInput({ index_i,  index_j}) {

    const { walls, setWalls } = useContext(AppContext)

    return (
        <div className='ObjectNameInput-div'>
            <label className='ObjectNameInput-label'>
                Nome
            </label>
            <input
                className='ObjectNameInput-input'
                type='text'
                value={WallMethods.getWallObjectName(walls, index_i, index_j)}
                onChange={ (e) => WallMethods.setWallObjectName(setWalls,index_i, index_j, e.target.value)}
            />
        </div>
    )
}