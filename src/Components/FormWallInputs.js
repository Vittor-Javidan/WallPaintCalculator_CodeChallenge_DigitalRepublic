import appConfig from "../AppConfig";

import HeightInput from "./WallInputComponents/HeightInput";
import WallInput from "./WallInput";

export default function FormWallInputs() {

    const inputsArray = []

    for (let i = 0; i < appConfig.WALLS_AMMOUNT; i++) {

        inputsArray.push(
            <WallInput key={`Key ${i + 1}`} index={i} />
        )
    }

    return (
        <form className="FormWallInputs-form">
            <HeightInput />
            {inputsArray}
        </form>
    )
}
