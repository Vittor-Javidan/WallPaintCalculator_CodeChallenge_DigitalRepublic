import WallsHeightInput from 'Components/WallsComponents/WallsHeightInput.js'
import InkLayersInput from 'Components/WallsComponents/InkLayersInput.js'
import WallsAmountInput from 'Components/WallsComponents/WallsAmountInput.js'
import WallsArray from 'Components/WallsComponents/WallsArray.js'

export default function Walls() {

    return (
        <form className='Walls-form'>
            <div className='Walls-Inputs-div'>
                <WallsHeightInput />
                <InkLayersInput />
                <WallsAmountInput />
            </div>
            <WallsArray />
        </form>
    )
}
