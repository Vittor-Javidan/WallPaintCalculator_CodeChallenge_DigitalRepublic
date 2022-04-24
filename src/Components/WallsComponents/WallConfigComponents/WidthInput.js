import { useContext } from 'react'
import { AppContext } from 'App.js'

export default function WidthInput({index}){

    const {walls, setWalls} = useContext(AppContext)

    function widthHandler(e){
        setWalls( prev => {

            const wallsArray = [...prev.wall]
            wallsArray[index] = {
                ...wallsArray[index],
                width: Number(e.target.value)
            }

            return ({
                ...prev,
                wall: wallsArray
            })
        })
    }

    return (
        <div className='WidthInput-div'>
            <label className='WidthInput-label'>Width</label>
            <input
                className='WidthInput-input' 
                type='number'
                value={walls.wall[index].width}
                onChange={widthHandler}
            />
        </div>
    )
}