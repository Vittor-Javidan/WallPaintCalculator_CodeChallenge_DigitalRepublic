import appConfig from "../../../AppConfig"
import WallMath from "../MatchClass/WallMath"

function checkMinMaxWallArea(props, index) {

    const { walls, setStatus } = props
    const wallArea = WallMath.wallArea(walls, index)

    const min = wallArea >= appConfig.WALL_MIN_AREA
    const max = wallArea <= appConfig.WALL_MAX_AREA

    if (!min)
        return setStatus(`Wall ${index + 1} cannot be less than 1 square meter`)
    else if (!max)
        return setStatus(`Wall ${index + 1} cannot be more than 15 square meter`)
}

function checkDoorsRequirements(props, index) {

    const { walls, setStatus } = props

    const heightWithDoor = appConfig.DOOR.HEIGHT + 0.3 <= walls.height
    const widthWithDoor = appConfig.DOOR.WIDTH <= walls.wall[index].width

    if (walls.wall[index].doors > 0 && !heightWithDoor)
        return setStatus(`Wall height cannot allow a door`)
    else if (walls.wall[index].doors > 0 && !widthWithDoor)
        return setStatus(`Wall ${index + 1} width cannot allow a door`)
}

function checkWindowsRequirements(props, index) {

    const { walls, setStatus } = props

    const heightWithWindow = appConfig.WINDOW.HEIGHT <= walls.height
    const widthWithWindow = appConfig.WINDOW.WIDTH <= walls.wall[index].width

    if (walls.wall[index].windows > 0 && !heightWithWindow)
        return setStatus(`Wall height cannot have a window`)
    else if (walls.wall[index].windows > 0 && !widthWithWindow)
        return setStatus(`Wall ${index + 1} width cannot have a window`)
}

function checkWidthWallUsage(props, index) {

    const { walls, setStatus } = props

    const widthLimit = (
        walls.wall[index].width
        - (walls.wall[index].doors * appConfig.DOOR.WIDTH)
        - (walls.wall[index].windows * appConfig.WINDOW.WIDTH)
    )
    if (widthLimit < 0) {
        return setStatus(`Wall ${index + 1} width cannot have that many doors and windows`)
    }
}

const rulesArray = [
    checkMinMaxWallArea,
    checkDoorsRequirements,
    checkWindowsRequirements,
    checkWidthWallUsage
]

export default rulesArray