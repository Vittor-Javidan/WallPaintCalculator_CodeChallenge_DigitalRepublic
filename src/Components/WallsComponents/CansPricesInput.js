import { AppContext } from "App"
import { useContext } from "react"

import WallMethods from "Components/Scripts/utilClasses/WallMethods"

export default function CansPricesInput() {

    const { walls, setWalls } = useContext(AppContext)

    return (
        <div className='CansPricesInput-div'>
            <label className='CansPricesInput-label'>
                Preços das Latas
            </label>
            <input
                className='CansPricesInput-input'
                type='text'
                value={WallMethods.getCansPriceString(walls)}
                onChange={(e) => WallMethods.setCansPricesString(setWalls, e.target.value)}
            />
        </div>
    )
}