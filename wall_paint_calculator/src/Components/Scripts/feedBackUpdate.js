import appConfig from "../../AppConfig"
import {
    checkMinMaxWallArea,
    checkDoorsRequirements,
    checkWindowsRequirements,
    checkWallAreaUsage,
    checkWidthWallUsage
} from "./rulesDefinition.js"
import wallPaintCans from "./wallPaintCans"
import resetFeedbackStates from "./resetFeedbackStates"

export default function feedbackUpdate(props) {

    const { walls, setTotalWallArea } = props

    resetFeedbackStates(props)

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

    wallPaintCans(props)
}