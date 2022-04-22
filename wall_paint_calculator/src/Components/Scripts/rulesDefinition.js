import appConfig from "../../AppConfig"

export function checkMinMaxWallArea(props, index, wallArea) {

    const { setStatus } = props

    const min = wallArea >= appConfig.WALL_MIN_AREA
    const max = wallArea <= appConfig.WALL_MAX_AREA

    if (!min)
        return setStatus(prev => `Wall ${index + 1} cannot be less than 1 square meter`)
    else if (!max)
        return setStatus(prev => `Wall ${index + 1} cannot be more than 15 square meter`)
}

export function checkDoorsRequirements(props, index) {

    const { walls, setStatus } = props

    const heightWithDoor = appConfig.DOOR.HEIGHT + 0.3 <= walls.height
    const widthWithDoor = appConfig.DOOR.WIDTH <= walls.wall[index].width

    if (walls.wall[index].doors > 0 && !heightWithDoor)
        return setStatus(prev => `Wall height cannot allow a door`)
    else if (walls.wall[index].doors > 0 && !widthWithDoor)
        return setStatus(prev => `Wall ${index + 1} width cannot allow a door`)
}

export function checkWindowsRequirements(props, index) {

    const { walls, setStatus } = props

    const heightWithWindow = appConfig.WINDOW.HEIGHT <= walls.height
    const widthWithWindow = appConfig.WINDOW.WIDTH <= walls.wall[index].width

    if (walls.wall[index].windows > 0 && !heightWithWindow)
        return setStatus(prev => `Wall height cannot have a window`)
    else if (walls.wall[index].windows > 0 && !widthWithWindow)
        return setStatus(prev => `Wall ${index + 1} width cannot have a window`)
}

export function checkWallAreaUsage(props, index, wallArea) {

    const {
        walls,
        setStatus,
        setTotalDoorArea,
        setTotalWindowArea
    } = props

    const doorArea = (appConfig.DOOR.WIDTH * appConfig.DOOR.HEIGHT) * walls.wall[index].doors
    const windowArea = (appConfig.WINDOW.WIDTH * appConfig.WINDOW.HEIGHT) * walls.wall[index].windows
    setTotalDoorArea(prev => prev + doorArea)
    setTotalWindowArea(prev => prev + windowArea)

    if ((doorArea + windowArea) > wallArea / 2)
        return setStatus(prev => `Doors and window are using more than 50% of wall ${index + 1} area`)
}

export function checkWidthWallUsage(props, index) {

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