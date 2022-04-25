import { useContext } from 'react'
import { AppContext } from 'App.js'
import WallMethods from 'Components/Scripts/utilClasses/WallMethods.js'

export default function ObjectsAmountInput({ index }) {

    const { walls, setWalls } = useContext(AppContext)

    return (
        <div className='ObjectsAmountInput-div'>
            <label className='ObjectsAmountInput-label'>
                Quantidade de Objetos 
            </label>
            <input 
                className='ObjectsAmountInput-input'
                type='number'
                value={WallMethods.getWallObjectsAmount(walls, index)}
                onChange={(e) => WallMethods.setWallObjectsAmount(setWalls, index, e.target.value)}
            />
        </div>
    )
}