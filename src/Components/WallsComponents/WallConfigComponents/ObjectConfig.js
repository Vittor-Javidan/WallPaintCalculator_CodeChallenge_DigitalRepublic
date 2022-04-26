import ObjectNameInput from 'Components/WallsComponents/WallConfigComponents/ObjectConfigComponents/ObjectNameInput.js'
import ObjectHeightInput from 'Components/WallsComponents/WallConfigComponents/ObjectConfigComponents/ObjectHeightInput.js'
import ObjectWidthInput from 'Components/WallsComponents/WallConfigComponents/ObjectConfigComponents/ObjectWidthInput.js'

export default function ObjectConfig({index_i, index_j}){

    return (
        <div className='ObjectForm'>
            <h3>
                {`Objeto ${index_j + 1}: `}
            </h3>
            <div className='ObjectInput'>
                <ObjectNameInput index_i={index_i} index_j={index_j} />
                <ObjectWidthInput index_i={index_i} index_j={index_j} />
                <ObjectHeightInput index_i={index_i} index_j={index_j} />
            </div>
        </div>
    )
}