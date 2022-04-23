import WidthInput from "./WallInputComponents/WidthInput"
import WallObjects from "./WallInputComponents/WallObjects"

export default function WallInput({ index }) {

    return (
        <div className="WallInput-div">
            <label className="WallInput-label">{`Wall ${index + 1}: `}</label>
            <WidthInput index={index} />
            <WallObjects index={index} />
        </div>
    )
}