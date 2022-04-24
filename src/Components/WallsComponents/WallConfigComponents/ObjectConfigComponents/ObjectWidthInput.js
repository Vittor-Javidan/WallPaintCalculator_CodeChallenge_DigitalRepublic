import { useContext } from 'react'
import { AppContext } from 'App.js'

export default function ObjectWidthInput({ index_i, index_j }) {

    const { walls, setWalls } = useContext(AppContext)

    function widthObjectsHandler(e) {

        const width = Number(e.target.value)
        const wallObject = { ...walls }

        wallObject.wall[index_i].wallObjects[index_j].width = width

        setWalls(wallObject)
    }

    return (
        <div className='ObjectWidthInput-div'>
            <label className='ObjectWidthInput-label'>
                Width
            </label>
            <input
                className='ObjectWidthInput-input'
                type='number'
                value={walls.wall[index_i].wallObjects[index_j].width}
                onChange={widthObjectsHandler}
            />
        </div>
    )
}