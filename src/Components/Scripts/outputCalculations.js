import WallMath from "./MatchClass/WallMath"

export default function outputCalculations(props) {
    
    const {
        walls, 
        setTotalWallArea, 
        setTotalCans 
    } = props

    setTotalWallArea(WallMath.totalWallArea(walls))
    setTotalCans(WallMath.calculateCans(walls))
}