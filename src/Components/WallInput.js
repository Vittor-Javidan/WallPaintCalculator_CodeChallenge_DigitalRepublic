import WidthInput from "./WallInputComponents/WidthInput";
import DoorsInput from "./WallInputComponents/DoorsInput";
import WindowsInput from "./WallInputComponents/WindowsInput";

export default function WallInput({ index }) {

    return (
        <div className="WallInput-div">
            <label className="WallInput-label">{`Wall ${index + 1}: `}</label>
            <WidthInput index={index} />
            <DoorsInput index={index} />
            <WindowsInput index={index} />
        </div>
    )
}