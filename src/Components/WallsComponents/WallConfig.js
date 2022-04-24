import WidthInput from 'Components/WallsComponents/WallConfigComponents/WidthInput.js'
import ObjectsAmountInput from 'Components/WallsComponents/WallConfigComponents/ObjectsAmountInput.js'
import ObjectsArray from 'Components/WallsComponents/WallConfigComponents/ObjectsArray.js'

export default function WallConfig({ index }) {
    
    return (
        <div className='WallConfig-div'>
            <h2 className='WallConfig-label'>
                {`Wall ${index + 1} Configuration: `}
            </h2>
            <WidthInput index={index} />
            <ObjectsAmountInput index={index} />
            <ObjectsArray index={index} />
        </div>
    )
}