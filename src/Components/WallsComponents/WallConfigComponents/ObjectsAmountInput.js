import { useContext } from 'react'
import { AppContext } from 'App.js'

export default function ObjectsAmountInput({ index }) {

    const { walls, setWalls } = useContext(AppContext)

    function objectsHandler(e) {

        const objectsAmount = Number(e.target.value)
        const wallObject = {...walls}
        const objectsArray = wallObject.wall[index].wallObjects
        
        if (objectsAmount > objectsArray.length){

            let diff = Math.floor(objectsAmount) - objectsArray.length
            for (let i = 0; i < diff; i++) {
                objectsArray.push(
                    {
                        name: `Object ${objectsArray.length + 1}`,
                        height: 0,
                        width: 0
                    }
                )
            }
        
        } else {

            let diff = objectsArray.length - Math.floor(objectsAmount)
            for (let i = 0; i < diff; i++) {
                objectsArray.pop()
            }
        }

        wallObject.wall[index].wallObjects = objectsArray
        wallObject.wall[index].wallObjectsAmount = objectsAmount

        setWalls(wallObject)
    }

    return (
        <div className='WallObjects.div'>
            <label>ObjectsAmount</label>
            <input 
                className='WallObjects-input'
                type='number'
                onChange={objectsHandler}
                value={walls.wall[index].wallObjectsAmount}
            />
        </div>
    )
}