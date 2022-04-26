import WidthInput from 'Components/WallsComponents/WallConfigComponents/WidthInput.js'
import WallDuplicates from './WallConfigComponents/WallDuplicates.js'
import ObjectsAmountInput from 'Components/WallsComponents/WallConfigComponents/ObjectsAmountInput.js'
import ObjectsArray from 'Components/WallsComponents/WallConfigComponents/ObjectsArray.js'

export default function WallConfig({ index }) {
    
    return (
        <div className='WallForm'>
            <h2 className='WallTitle'>
                {`Parede ${index + 1}: `}
            </h2>
            <div className='WallInputs'>
                <WidthInput index={index} />
                <WallDuplicates index={index} />
                <ObjectsAmountInput index={index} />
            </div>
            <div className='ObjectsArray'>
                <ObjectsArray index={index} />
            </div>
        </div>
    )
}