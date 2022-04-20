import appConfig from "../AppConfig";

import HeightInput from "./InputComponents/HeightInput";
import WidthInput from "./InputComponents/WidthInput";
import DoorsInput from "./InputComponents/DoorsInput";
import WindowsInput from "./InputComponents/WindowsInput";

export default function Inputs({walls, setWalls}) {

    const inputsArray = []

    for (let i = 0; i < appConfig.WALLS_AMMOUNT; i++) {

        //TO DO: Find a way to not reapeat the code inside WidthInput, DoorsInput and WindowsInput components
        //TO DO: apply useContext to make this code cleaner
        inputsArray.push(
            <div key={`Key ${i}`}>
                <label>{`Wall ${i + 1}: `}</label>
                <WidthInput index={i} walls={walls} setWalls={setWalls}/>
                <DoorsInput index={i} walls={walls} setWalls={setWalls}/>
                <WindowsInput index={i} walls={walls} setWalls={setWalls}/>
            </div>
        )
    }

    return (
        <>
            <HeightInput walls={walls} setWalls={setWalls}/>
            {inputsArray}
        </>
    )
}
