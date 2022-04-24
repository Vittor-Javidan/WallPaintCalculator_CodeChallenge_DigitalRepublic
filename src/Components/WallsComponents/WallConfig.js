import { useContext } from "react"
import { AppContext } from "../../App"

import WidthInput from "./WallConfigComponents/WidthInput"
import ObjectsAmountInput from "./WallConfigComponents/ObjectsAmountInput"
import ObjectConfig from "./WallConfigComponents/ObjectConfig"

function ObjectsArray({ index }){

    const { walls } = useContext(AppContext)
    const inputsArray = []

    for (let i = 0; i < walls.wall[index].wallObjects.length; i++) {

        inputsArray.push(
            <ObjectConfig key={i + 1} index_i={index} index_j={i} />
        )
    }

    return inputsArray
}

export default function WallConfig({ index }) {
    


    return (
        <div className="WallConfig-div">
            <label className="WallConfig-label">{`Wall ${index + 1} Configuration: `}</label>
            <WidthInput index={index} />
            <ObjectsAmountInput index={index} />
            <ObjectsArray index={index} />
        </div>
    )
}