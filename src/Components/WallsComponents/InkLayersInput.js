import { useContext } from 'react'
import { AppContext } from 'App.js'

export default function InkLayersInput() {

    const { walls, setWalls } = useContext(AppContext)

    function changeInkLayersCount(e) {
        setWalls(prev => (
            {
                ...prev,
                inkLayers: Number(e.target.value)
            }
        ))
    }

    return (
        <div className='InkLayersInput-div'>
            <label>ink layers/wall</label>
            <input
                className='InkLayersInput-input'
                type='number'
                value={walls.inkLayers}
                onChange={changeInkLayersCount}
            />
        </div>
    )
}