import { AppContext } from "../App";

import HeightInput from "./WallInputComponents/HeightInput";
import InkLayersInput from "./WallInputComponents/InkLayersInput";
import WallsAmountInput from "./WallInputComponents/WallsAmountInput";
import WallInput from "./WallInput";
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
