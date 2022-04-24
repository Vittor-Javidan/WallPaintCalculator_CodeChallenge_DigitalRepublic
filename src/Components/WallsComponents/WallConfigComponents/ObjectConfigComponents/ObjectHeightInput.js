import { useContext } from "react"
import { AppContext } from "../../../../App"

export default function ObjectHeightInput({ index_i, index_j }) {

    const { walls, setWalls } = useContext(AppContext)

    function heightObjectsHandler(e) {

        const height = Number(e.target.value)
        const wallObject = { ...walls }

        wallObject.wall[index_i].wallObjects[index_j].height = height

        setWalls(wallObject)
    }

    return (
        <div className="ObjectHeightInput-div">
            <label className="ObjectHeightInput-label">
                Height
            </label>
            <input
                className="ObjectHeightInput-input"
                type='number'
                value={walls.wall[index_i].wallObjects[index_j].height}
                onChange={heightObjectsHandler}
            />
        </div>
    )
}