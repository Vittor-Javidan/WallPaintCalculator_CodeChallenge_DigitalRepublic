import { useContext } from 'react'
import { AppContext } from 'App.js'

import WallConfig from 'Components/WallsComponents/WallConfig.js'

export default function WallsArray (){

    const { walls } = useContext(AppContext)
    const inputsArray = []

    for (let i = 0; i < walls.wallsAmount; i++) {

        inputsArray.push(
            <WallConfig key={`Key ${i + 1}`} index={i} />
        )
    }

    return inputsArray
}