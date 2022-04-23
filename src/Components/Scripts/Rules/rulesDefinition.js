import appConfig from "../../../AppConfig"
import WallMath from "../MatchClass/WallMath"

function chackNegativeHeight(props, index) {

    const { walls, setStatus } = props

    if (walls.height < 0)
        return setStatus(`WARN: Height is 0 or Negative`)

}

function checkMinWallArea(props, index) {

    const { walls, setStatus } = props
    const wallArea = WallMath.wallArea(walls, index)

    if (wallArea < 0)
        return setStatus(`WARN: Wall ${index + 1} have negative área`)
}

function checkDoorsRequirements(props, index) {

    const { walls, setStatus } = props

    const heightWithDoor = appConfig.DOOR.HEIGHT <= walls.height
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
    if (widthLimit < 0)
        return setStatus(`Wall ${index + 1} width cannot have that many doors and windows`)
}

function checkLayersAmount(props, index) {

    const { walls, setStatus } = props

    if (walls.inkLayers < 1)
        return setStatus('WARNING: ink layer < 1 makes no sense')
}

const rulesArray = [ // Last array indexes has priority in status message

    checkDoorsRequirements,
    checkWindowsRequirements,
    checkLayersAmount,
    checkWidthWallUsage,
    checkMinWallArea,
    chackNegativeHeight

]

export default rulesArray