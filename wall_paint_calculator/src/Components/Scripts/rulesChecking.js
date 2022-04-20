import appConfig from "../../AppConfig"
import {
    checkMinMaxWallArea,
    checkDoorsRequirements,
    checkWindowsRequirements,
    checkWallAreaUsage
} from "./rulesDefinition.js"

export default function rulesChecking(props) {

    const {
        walls,
        setTotalWallArea,
        setTotalDoorArea,
        setTotalWindowArea,
        setStatus
    } = props

    for (let i = 0; i < appConfig.WALLS_AMMOUNT; i++) {

        //TO DO: Create a function for each rule
        let wallArea = walls.wall[i].width * walls.height
        setTotalWallArea(prev => prev + wallArea)

        checkMinMaxWallArea(wallArea, setStatus, i)
        checkDoorsRequirements(walls, setStatus, i)
        checkWindowsRequirements(walls, setStatus, i)
        checkWallAreaUsage(walls, setStatus, setTotalDoorArea, setTotalWindowArea, wallArea, i)
    }
}