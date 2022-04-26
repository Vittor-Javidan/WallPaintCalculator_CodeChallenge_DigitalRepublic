import WallsHeightInput from 'Components/WallsComponents/WallsHeightInput.js'
import InkLayersInput from 'Components/WallsComponents/InkLayersInput.js'
import InkEfficiencyInput from './WallsComponents/InkEfficiencyInput.js'
import WallsAmountInput from 'Components/WallsComponents/WallsAmountInput.js'
import CansSizesInput from 'Components/WallsComponents/CansSizesInput.js'
import CansPricesInput from 'Components/WallsComponents/CansPricesInput.js'
import WallsArray from 'Components/WallsComponents/WallsArray.js'

export default function Walls() {

    return (
        <form className='Appform'>
            <div className='ConfigurationForm'>
                <h2 className='ConfigurationTitle'>Configurações: </h2>
                <div className='ConfigurationIputs'>
                    <WallsHeightInput />
                    <InkLayersInput />
                    <InkEfficiencyInput />
                    <WallsAmountInput />
                    <CansSizesInput />
                    <CansPricesInput />
                </div>
            </div>
            <div>
                <WallsArray />
            </div>
        </form>
    )
}
