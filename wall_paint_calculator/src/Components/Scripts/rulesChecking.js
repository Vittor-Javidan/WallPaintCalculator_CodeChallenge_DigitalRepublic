import appConfig from "../../AppConfig"
import {
    checkMinMaxWallArea,
    checkDoorsRequirements,
    checkWindowsRequirements,
    checkWallAreaUsage,
    checkWidthWallUsage
} from "./rulesDefinition.js"

export default function rulesChecking(props) {

    const { walls, setTotalWallArea } = props

    for (let i = 0; i < appConfig.WALLS_AMMOUNT; i++) {

        //TO DO: Create a function for each rule
        let wallArea = walls.wall[i].width * walls.height
        setTotalWallArea(prev => prev + wallArea)

        checkMinMaxWallArea(props, i, wallArea)
        checkDoorsRequirements(props, i)
        checkWindowsRequirements(props, i)
        checkWallAreaUsage(props, i)
        checkWidthWallUsage(props, i)
    }
}