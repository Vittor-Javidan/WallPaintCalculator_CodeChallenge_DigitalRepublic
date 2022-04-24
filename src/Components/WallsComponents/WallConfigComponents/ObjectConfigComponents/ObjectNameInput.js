import { useContext } from "react"
import { AppContext } from "../../../../App"

export default function ObjectNameInput({ index_i,  index_j}) {

    const { walls, setWalls } = useContext(AppContext)

    function nameObjectsHandler(e){

        const name = String(e.target.value)
        const wallObject = {...walls}

        wallObject.wall[index_i].wallObjects[index_j].name = name

        setWalls(wallObject)
    }

    return (
        <div className="ObjectNameInput-div">
            <label className="ObjectNameInput-label">
                Name
            </label>
            <input
                className="ObjectNameInput-input"
                type='text'
                value={walls.wall[index_i].wallObjects[index_j].name}
                onChange={nameObjectsHandler}
            />
        </div>
    )
}