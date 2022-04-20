import appConfig from "../AppConfig";

export default function Inputs() {

    const inputsArray = []

    for (let i = 0; i < appConfig.WALLS_AMMOUNT; i++) {
        inputsArray.push(
            <div key={`Key ${i}`}>
                <label>{`Wall ${i + 1}`}</label>
                <input placeholder="Wall width"></input>
                <input placeholder="Wall Height"></input>
                <input placeholder="doors"></input>
                <input placeholder="windows"></input>
            </div>
        )
    }

    return inputsArray
}
