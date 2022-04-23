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

function checkWidthWallUsage(props, index) {
    console.log("checkWidthWallUsage must be implemented")
}

function checkLayersAmount(props, index) {

    const { walls, setStatus } = props

    if (walls.inkLayers < 1)
        return setStatus('WARNING: ink layer < 1 makes no sense')
}

const rulesArray = [ // Last array indexes has priority in status message

    checkLayersAmount,
    checkWidthWallUsage,
    checkMinWallArea,
    chackNegativeHeight

]

export default rulesArray