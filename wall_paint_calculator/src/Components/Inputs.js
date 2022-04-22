import appConfig from "../AppConfig";

import HeightInput from "./InputComponents/HeightInput";
import WidthInput from "./InputComponents/WidthInput";
import DoorsInput from "./InputComponents/DoorsInput";
import WindowsInput from "./InputComponents/WindowsInput";

export default function Inputs() {

    const inputsArray = []

    for (let i = 0; i < appConfig.WALLS_AMMOUNT; i++) {

        inputsArray.push(
            <div key={`Key ${i}`}>
                <label>{`Wall ${i + 1}: `}</label>
                <WidthInput index={i}/>
                <DoorsInput index={i}/>
                <WindowsInput index={i}/>
            </div>
        )
    }

    return (
        <>
            <HeightInput/>
            {inputsArray}
        </>
    )
}
