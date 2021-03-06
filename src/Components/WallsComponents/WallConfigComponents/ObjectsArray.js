import { useContext } from 'react'
import { AppContext } from "App.js"

import ObjectConfig from 'Components/WallsComponents/WallConfigComponents/ObjectConfig.js'
import WallMethods from 'Components/Scripts/utilClasses/WallMethods.js'

export default function ObjectsArray({ index }){

    const { walls } = useContext(AppContext)
    const inputsArray = []

    for (let i = 0; i < WallMethods.getWallObjectsArrayLenght(walls, index); i++) {

        inputsArray.push(
            <ObjectConfig key={i + 1} index_i={index} index_j={i} />
        )
    }

    return inputsArray
}
