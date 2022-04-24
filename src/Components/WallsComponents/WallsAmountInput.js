import { useContext } from 'react'
import { AppContext } from 'App.js'

import appConfig from 'AppConfig.js'

export default function WallsAmountInput() {

    const { walls, setWalls } = useContext(AppContext)

    function wallsAmountInputHandler(e) {

        const wallsAmount = Number(e.target.value)
        const wallObject = {...walls}
        let wallsArray = wallObject.wall

        if (wallsAmount > wallsArray.length){

            let diff = Math.floor(wallsAmount) - wallsArray.length
            for (let i = 0; i < diff; i++) {
                wallsArray.push(
                    {
                        width: appConfig.START_INPUTS.WALL_WIDTH,
                        wallObjectsAmount: appConfig.WALLS_OBJECT_AMOUNT,
                        wallObjects: []
                    }
                )
            }
            
        } else {

            let diff = wallsArray.length - Math.floor(wallsAmount)
            for (let i = 0; i < diff; i++) {
                wallsArray.pop()
            }
        }

        wallObject.wallsAmount = wallsAmount
        wallObject.wall = wallsArray

        setWalls(wallObject)
    }

    return (
        <div className='WallsAmountInput-div'>
            <label className='WallsAmountInput-label'>
                Walls Amount
            </label>
            <input
                className='WallsAmountInput-input'
                type='number'
                value={walls.wallsAmount}
                onChange={wallsAmountInputHandler}
            />
        </div>
    )
}