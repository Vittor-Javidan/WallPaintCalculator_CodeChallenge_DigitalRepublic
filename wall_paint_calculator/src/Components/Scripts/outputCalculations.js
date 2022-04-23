import WallMath from "./MatchClass/WallMath"

export default function outputCalculations(props) {
    
    const {
        walls, 
        setTotalWallArea, 
        setTotalDoorArea, 
        setTotalWindowArea,
        setTotalCans 
    } = props

    setTotalWallArea(WallMath.totalWallArea(walls))
    setTotalDoorArea(WallMath.totalDoorArea(walls))
    setTotalWindowArea(WallMath.totalWindowArea(walls))
    setTotalCans(WallMath.calculateCans(walls))
}