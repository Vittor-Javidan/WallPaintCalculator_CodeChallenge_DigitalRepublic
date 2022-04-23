import WidthInput from "./WallInputComponents/WidthInput"

export default function WallInput({ index }) {

    return (
        <div className="WallInput-div">
            <label className="WallInput-label">{`Wall ${index + 1}: `}</label>
            <WidthInput index={index} />
        </div>
    )
}