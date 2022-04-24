import WidthInput from "./WallConfigComponents/WidthInput"
import ObjectsAmountInput from "./WallConfigComponents/ObjectsAmountInput"
import ObjectsArray from "./WallConfigComponents/ObjectsArray"

export default function WallConfig({ index }) {
    


    return (
        <div className="WallConfig-div">
            <h2 className="WallConfig-label">
                {`Wall ${index + 1} Configuration: `}
            </h2>
            <WidthInput index={index} />
            <ObjectsAmountInput index={index} />
            <ObjectsArray index={index} />
        </div>
    )
}