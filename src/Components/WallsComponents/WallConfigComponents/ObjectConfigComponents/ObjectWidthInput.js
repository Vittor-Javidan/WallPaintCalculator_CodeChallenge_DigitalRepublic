import { useContext } from 'react'
import { AppContext } from 'App.js'
import WallMethods from 'Components/Scripts/utilClasses/WallMethods.js'

export default function ObjectWidthInput({ index_i, index_j }) {

    const { walls, setWalls } = useContext(AppContext)

    return (
        <div>
            <label>
                Largura (m2)
            </label>
            <input
                type='number'
                value={WallMethods.getWallObjectWidth(walls, index_i, index_j)}
                onChange={ (e) => WallMethods.setWallObjectWidth(setWalls, index_i, index_j, e.target.value)}
            />
        </div>
    )
}