import { AppContext } from "../App";

import HeightInput from "./FormWallInputsComponents/HeightInput";
import InkLayersInput from "./FormWallInputsComponents/InkLayersInput";
import WallsAmountInput from "./FormWallInputsComponents/WallsAmountInput";
import WallInput from "./FormWallInputsComponents/WallInput";
import { useContext } from "react";

export default function FormWallInputs() {

    const { walls } = useContext(AppContext)

    const inputsArray = []

    for (let i = 0; i < walls.wallsAmount; i++) {

        inputsArray.push(
            <WallInput key={`Key ${i + 1}`} index={i} />
        )
    }

    return (
        <form className="FormWallInputs-form">
            <HeightInput />
            <InkLayersInput />
            <WallsAmountInput />
            {inputsArray}
        </form>
    )
}
