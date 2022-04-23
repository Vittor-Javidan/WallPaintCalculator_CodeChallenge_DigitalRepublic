import { useContext } from "react"
import { AppContext } from "../../App"

import appConfig from "../../AppConfig"

export default function WallsAmountInput() {

    const { walls, setWalls } = useContext(AppContext)

    function wallsAmountInputHandler(e) {

        const wallsAmount = Number(e.target.value)
        let wallsArray = [...walls.wall]

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

        setWalls(prev => (
            {
                ...prev,
                wallsAmount: wallsAmount,
                wall: wallsArray
            }
        ))
    }

    return (
        <div className="WallsAmountInput-div">
            <label className="WallsAmountInput-label">
                How many walls?
            </label>
            <input
                className="WallsAmountInput-input"
                value={walls.wallsAmount}
                onChange={wallsAmountInputHandler}
            />
        </div>
    )
}