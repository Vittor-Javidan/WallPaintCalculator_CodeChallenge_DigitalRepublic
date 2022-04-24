import ObjectNameInput from "./ObjectConfigComponents/ObjectNameInput"
import ObjectHeightInput from "./ObjectConfigComponents/ObjectHeightInput"
import ObjectWidthInput from "./ObjectConfigComponents/ObjectWidthInput"

export default function ObjectConfig({index_i, index_j}){

    return (
        <div className="ObjectConfig-div">
            <label className="ObjectConfig-label">{`Object ${index_j + 1} Configuration: `}</label>
            <ObjectNameInput index_i={index_i} index_j={index_j} />
            <ObjectWidthInput index_i={index_i} index_j={index_j} />
            <ObjectHeightInput index_i={index_i} index_j={index_j} />
        </div>
    )
}