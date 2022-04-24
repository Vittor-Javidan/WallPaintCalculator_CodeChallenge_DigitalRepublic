import { useContext } from 'react'
import { AppContext } from "App.js"

import ObjectConfig from 'Components/WallsComponents/WallConfigComponents/ObjectConfig.js'

export default function ObjectsArray({ index }){

    const { walls } = useContext(AppContext)
    const inputsArray = []

    for (let i = 0; i < walls.wall[index].wallObjects.length; i++) {

        inputsArray.push(
            <ObjectConfig key={i + 1} index_i={index} index_j={i} />
        )
    }

    return inputsArray
}
