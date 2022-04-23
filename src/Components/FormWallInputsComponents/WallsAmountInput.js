import { useContext } from "react"
import { AppContext } from "../../App"

import appConfig from "../../AppConfig"

export default function WallsAmountInput() {

    const { walls, setWalls } = useContext(AppContext)

    function wallsAmountInputHandler(e) {

        const wallsAmount = Number(e.target.value)
        let wallsArray = [...walls.wall]

        if (wallsAmount > walls.wall.length){

            for (let i = 0; i < (Math.floor(wallsAmount) - walls.wall.length); i++) {
                wallsArray.push(
                    {
                        width: appConfig.START_INPUTS.WALL_WIDTH,
                    }
                )
            }
        }
        else {

            let diff = walls.wall.length - Math.floor(wallsAmount)
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