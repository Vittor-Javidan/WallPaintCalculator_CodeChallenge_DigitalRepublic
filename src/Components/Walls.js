import WallsHeightInput from "./WallsComponents/WallsHeightInput";
import InkLayersInput from "./WallsComponents/InkLayersInput";
import WallsAmountInput from "./WallsComponents/WallsAmountInput";
import WallsArray from "./WallsComponents/WallsArray";

export default function Walls() {

    return (
        <form className="Walls-form">
            <WallsHeightInput />
            <InkLayersInput />
            <WallsAmountInput />
            <WallsArray />
        </form>
    )
}
