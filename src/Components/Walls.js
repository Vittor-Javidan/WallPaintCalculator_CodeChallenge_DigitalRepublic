import { AppContext } from "../App";
import { useContext } from "react";

import WallsHeightInput from "./WallsComponents/WallsHeightInput";
import InkLayersInput from "./WallsComponents/InkLayersInput";
import WallsAmountInput from "./WallsComponents/WallsAmountInput";
import WallConfig from "./WallsComponents/WallConfig";

function WallsArray (){

    const { walls } = useContext(AppContext)
    const inputsArray = []

    for (let i = 0; i < walls.wallsAmount; i++) {

        inputsArray.push(
            <WallConfig key={`Key ${i + 1}`} index={i} />
        )
    }

    return inputsArray
}

export default function Walls() {



    return (
        <form className="Walls-form">
            <WallsHeightInput />
            <InkLayersInput />
            <WallsAmountInput />
            <WallsArray />
        </form>
    )
}
