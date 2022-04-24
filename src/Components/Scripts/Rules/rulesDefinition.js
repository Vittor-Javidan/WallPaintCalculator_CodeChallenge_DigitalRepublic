import WallMath from 'Components/Scripts/MatchClass/WallMath.js'

function checkNegativeHeight(props, index) {

    const { walls, setStatus } = props

    if (walls.height < 0)
        return setStatus('WARN: Height is 0 or Negative')

}

function checkLayersAmount(props, index) {

    const { walls, setStatus } = props

    if (walls.inkLayers < 1)
        return setStatus('WARN: ink layer < 1 makes no sense')
}

function checkObjectsAmount(props, index) {

    const { walls, setStatus } = props
    const objectsAmount = walls.wall[index].wallObjectsAmount

    if (objectsAmount < 0)
        return setStatus(`WARN: Wall ${index + 1} have negative object amount value`)
}

function checkObjectsMinArea(props, index) {

    const { walls, setStatus } = props
    const objectsArray = walls.wall[index].wallObjects

    objectsArray.forEach((object, Objectindex) => {
        if(object.height * object.width <= 0)
            setStatus(`WARN: Object ${Objectindex + 1} Wall ${index + 1} don't have a valid area`)
    })
}

function checkMinWallArea(props, index) {

    const { walls, setStatus } = props
    const wallArea = WallMath.wallArea(walls, index)

    if (wallArea <= 0)
        return setStatus(`WARN: Wall ${index + 1} don't have a valid área`)
}

function checkWidthWallUsage(props, index) {

    const { walls, setStatus } = props
    const objectsArrayLenght = walls.wall[index].wallObjects.length
    const objectsArray = walls.wall[index].wallObjects
    let totalObjectsWidth = 0

    console.log(walls)

    for (let i = 0; i < objectsArrayLenght; i++) {
        totalObjectsWidth += objectsArray[i].width
    }

    if (walls.wall[index].width < totalObjectsWidth)
        return setStatus(`WARN: Wall ${index + 1} has less width than all objects width sum`)
    
}

const rulesArray = [ // Last array indexes has priority in status message

    checkObjectsMinArea,
    checkObjectsAmount,
    checkLayersAmount,
    checkWidthWallUsage,
    checkMinWallArea,
    checkNegativeHeight
]

export default rulesArray