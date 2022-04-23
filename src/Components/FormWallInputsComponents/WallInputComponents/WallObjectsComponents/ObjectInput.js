import ObjectNameInput from "./ObjectInputComponents/ObjectNameInput"
import ObjectHeightInput from "./ObjectInputComponents/ObjectHeightInput"
import ObjectWidthInput from "./ObjectInputComponents/ObjectWidthInput"

export default function ObjectInput({index_i, index_j}){

    //TO DO: Implement the change handler for each  components
    return (
        <div className="ObjectInput">
            <ObjectNameInput index_i={index_i} index_j={index_j} />
            <ObjectHeightInput index_i={index_i} index_j={index_j} />
            <ObjectWidthInput index_i={index_i} index_j={index_j} />
        </div>
    )
}