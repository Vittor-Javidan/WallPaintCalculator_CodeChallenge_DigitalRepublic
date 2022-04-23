import appConfig from "../../../AppConfig"
import {
    checkMinMaxWallArea,
    checkDoorsRequirements,
    checkWindowsRequirements,
    checkWallAreaUsage,
    checkWidthWallUsage
} from "./rulesDefinition.js"

export default function rulesHandler(props) {
    
    for (let i = 0; i < appConfig.WALLS_AMMOUNT; i++) {

        checkMinMaxWallArea(props, i)
        checkDoorsRequirements(props, i)
        checkWindowsRequirements(props, i)
        checkWallAreaUsage(props, i)
        checkWidthWallUsage(props, i)
    }
}