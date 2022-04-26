import WallsHeightInput from 'Components/WallsComponents/WallsHeightInput.js'
import InkLayersInput from 'Components/WallsComponents/InkLayersInput.js'
import InkEfficiencyInput from './WallsComponents/InkEfficiencyInput.js'
import WallsAmountInput from 'Components/WallsComponents/WallsAmountInput.js'
import CansSizesInput from 'Components/WallsComponents/CansSizesInput.js'
import CansPricesInput from 'Components/WallsComponents/CansPricesInput.js'
import WallsArray from 'Components/WallsComponents/WallsArray.js'

export default function Walls() {

    return (
        <form className='Walls-form'>
            <div className='Walls-Configdiv'>
                <h2 className='Walls-Configh2'>Configurações: </h2>
                <div className='Walls-ConfigInputsDiv'>
                    <WallsHeightInput />
                    <InkLayersInput />
                    <InkEfficiencyInput />
                    <WallsAmountInput />
                    <CansSizesInput />
                    <CansPricesInput />
                </div>
            </div>
            <div className='Walls-WallsArrayDiv'>
                <WallsArray />
            </div>
        </form>
    )
}
