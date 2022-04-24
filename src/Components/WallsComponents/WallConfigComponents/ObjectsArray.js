import { AppContext } from "../../../App"
import { useContext } from "react"

import ObjectConfig from "./ObjectConfig"

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
