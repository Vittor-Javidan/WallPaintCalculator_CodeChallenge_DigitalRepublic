import { useContext } from 'react'
import { AppContext } from 'App.js'
import WallMethods from 'Components/Scripts/utilClasses/WallMethods.js'

export default function WidthInput({index}){

    const {walls, setWalls} = useContext(AppContext)

    return (
        <div>
            <label>
                Largura (m2)
            </label>
            <input 
                type='number'
                value={WallMethods.getWallWidth(walls, index)}
                onChange={(e) => WallMethods.setWallWidth(setWalls, index, e.target.value)}
            />
        </div>
    )
}