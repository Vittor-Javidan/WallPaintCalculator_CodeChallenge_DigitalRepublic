import appConfig from 'AppConfig.js'
import rulesArray from 'Components/Scripts/Rules/rulesDefinition.js'

export default class WallMethods {

    static getWall(walls_State, wall_index) { return walls_State.wall[wall_index] }
    static getWallsArray(walls_State) { return walls_State.wall }
    static getWallsArrayLength(walls_State) { return walls_State.wall.length }
    static getWallsInkLayers(walls_State) { return walls_State.inkLayers }
    static getWallsAmount(walls_State) { return walls_State.wallsAmount }
    static getWallDuplicatesAmount(walls_State, wall_index) { return walls_State.wall[wall_index].duplicates }
    static getWallsHeight(walls_State) { return walls_State.height }
    static getWallWidth(walls_State, wall_index) { return walls_State.wall[wall_index].width }
    static getWallInkEfficiency(walls_State) { return walls_State.inkEfficiency }
    
    static getWallObjectsAmount(walls_State, wall_index) { return walls_State.wall[wall_index].wallObjectsAmount }
    static getWallObjectsArray(walls_State, wall_index) { return walls_State.wall[wall_index].wallObjects }
    static getWallObjectsArrayLenght(walls_State, wall_index) { return walls_State.wall[wall_index].wallObjects.length }
    static getWallObjectWidth(walls_State, wall_Index, object_Index) { return walls_State.wall[wall_Index].wallObjects[object_Index].width }
    static getWallObjectHeight(walls_State, wall_Index, object_Index) { return walls_State.wall[wall_Index].wallObjects[object_Index].height }
    static getWallObjectName(walls_State, wall_Index, object_Index) { return walls_State.wall[wall_Index].wallObjects[object_Index].name }

    static getWallArea(walls_State, wall_index) {
        return WallMethods.getWallWidth(walls_State, wall_index) * WallMethods.getWallsHeight(walls_State)
    }

    static setWallsHeight(setWalls, heightValue) {

        setWalls(prev => (
            {
                ...prev,
                height: Number(heightValue)
            }
        ))
    }

    static setWallWidth(setWalls, wall_index, widthValue) {

        setWalls(prev => {

            const newWallArray = [...prev.wall]
            newWallArray[wall_index] = {
                ...newWallArray[wall_index],
                width: Number(widthValue)
            }

            return {
                ...prev,
                wall: newWallArray
            }
        })
    }

    static setWallsInkLayers(setWalls, layersAmount) {

        setWalls(prev => (
            {
                ...prev,
                inkLayers: Math.floor(Number(layersAmount))
            }
        ))
    }

    static setWallsInkEfficiency(setWalls, efficiencyValue) {

        setWalls(prev => (
            {
                ...prev,
                inkEfficiency: Number(efficiencyValue)
            }
        ))
    }

    static setWallDuplicatesAmount (setWalls, wall_index, duplicatesAmount) {

        duplicatesAmount = Math.floor(Number(duplicatesAmount))
        setWalls(prev => {

            const newWalls = { ...prev }
            newWalls.wall[wall_index].duplicates = duplicatesAmount

            return newWalls
        })
    }

    static setWallsAmount(setWalls, wallsAmount) {

        wallsAmount = Math.floor(Number(wallsAmount))

        setWalls(prev => {

            const wallsArray = prev.wall
            const wallsArrayLength = wallsArray.length

            //handles if its needed to create new Walls, or delete some, to fit the new walls amount
            if (wallsAmount > wallsArrayLength){
    
                let diff = wallsAmount - wallsArrayLength
                for (let i = 0; i < diff; i++) {
                    wallsArray.push(
                        {
                            width: appConfig.START_INPUTS.WALL_WIDTH,
                            duplicates: appConfig.START_INPUTS.DUPLICATES_AMOUNT,
                            wallObjectsAmount: appConfig.WALLS_OBJECT_AMOUNT,
                            wallObjects: []
                        }
                    )
                }
                
            } else {
        
                let diff = wallsArrayLength - wallsAmount
                for (let i = 0; i < diff; i++) {
                    wallsArray.pop()
                }
            }

            return {
                ...prev,
                wallsAmount: wallsAmount,
                wall: wallsArray
            }
        })
    }

    static setWallObjectsAmount(setWalls, wall_index, objectsAmount) {

        objectsAmount = Math.floor(Number(objectsAmount))

        setWalls(prev => {

            let wallsArray = prev.wall
            const objectsArray = wallsArray[wall_index].wallObjects
            const objectsArrayLength = objectsArray.length

            //handles if its needed to create new Objects, or delete some, to fit the new Objects amount
            if (objectsAmount > objectsArrayLength){

                let diff = objectsAmount - objectsArrayLength
                for (let i = 0; i < diff; i++) {
                    objectsArray.push(
                        {
                            name: `Object ${objectsArrayLength + 1}`,
                            height: 0,
                            width: 0
                        }
                    )
                }
            
            } else {
    
                let diff = objectsArrayLength - objectsAmount
                for (let i = 0; i < diff; i++) {
                    objectsArray.pop()
                }
            }

            wallsArray[wall_index] = {
                ...wallsArray[wall_index],
                wallObjectsAmount: objectsAmount,
                wallObjects: objectsArray
            }

            return {
                ...prev,
                wall: wallsArray
            }
        })
    }

    static setWallObjectWidth(setWalls, wall_Index, object_Index, widthValue) {

        widthValue = Number(widthValue)

        setWalls(prev => {

            const newWalls = { ...prev }
            newWalls.wall[wall_Index].wallObjects[object_Index].width = widthValue

            return newWalls
        })
    }

    static setWallObjectHeight(setWalls, wall_Index, object_Index, heightValue) {

        heightValue = Number(heightValue)

        setWalls(prev => {

            const newWalls = { ...prev }
            newWalls.wall[wall_Index].wallObjects[object_Index].height = heightValue

            return newWalls
        })
    }

    static setWallObjectName(setWalls, wall_Index, object_Index, nameString) {

        nameString = String(nameString)
        setWalls(prev => {

            const newWalls = { ...prev }
            newWalls.wall[wall_Index].wallObjects[object_Index].name = nameString

            return newWalls
        })
    }

    static getWallTotalObjectsWidth(walls_State, wall_index){

        let totalObjectsWidth = 0
        for (let i = 0; i < WallMethods.getWallObjectsArrayLenght(walls_State, wall_index); i++) {
            totalObjectsWidth += WallMethods.getWallObjectWidth(walls_State, wall_index, i)
        }
        return totalObjectsWidth
    }

    static getTotalWallArea(walls_State) {

        let totalArea = 0
        for (let i = 0; i < WallMethods.getWallsAmount(walls_State); i++) {
            totalArea += WallMethods.getWallArea(walls_State, i) * WallMethods.getWallDuplicatesAmount(walls_State, i)
        }
        return totalArea
    }

    static getTotalObjectArea(walls_State) {

        let totalObjectsArea = 0

        for (let i = 0; i < WallMethods.getWallsAmount(walls_State); i++){
            for (let j = 0; j < WallMethods.getWallObjectsAmount(walls_State, i); j++) {

                totalObjectsArea += WallMethods.getWallObjectHeight(walls_State, i, j) * WallMethods.getWallObjectWidth(walls_State, i, j)
            }
        }

        return totalObjectsArea
    }

    static getTotalAreaToPaint(walls_State) {
        return WallMethods.getTotalWallArea(walls_State) - WallMethods.getTotalObjectArea(walls_State)
    }

    static calculateCans(walls_State) {

        let areaToPaint = (
            WallMethods.getTotalAreaToPaint(walls_State)
        ) * walls_State.inkLayers
        let totalCans = ''

        for (let i = 0; i < appConfig.CANS_SIZES.length; i++) {

            const areaPerCan = appConfig.CANS_SIZES[i] * WallMethods.getWallInkEfficiency(walls_State)

            if (areaToPaint / areaPerCan >= 1 && appConfig.CANS_SIZES[i] > appConfig.CANS_SIZES[appConfig.CANS_SIZES.length - 1]) {
                const cans = Math.floor(areaToPaint / areaPerCan)
                areaToPaint = areaToPaint - areaPerCan * cans
                totalCans += `${appConfig.CANS_SIZES[i]}L = ${cans}, `

            } else if (areaToPaint / areaPerCan >= 0 && appConfig.CANS_SIZES[i] === appConfig.CANS_SIZES[appConfig.CANS_SIZES.length - 1]) {
                const cans = Math.ceil(areaToPaint / areaPerCan)
                areaToPaint = areaToPaint - areaPerCan * cans
                totalCans += `${appConfig.CANS_SIZES[i]}L = ${cans}`
            }
        }

        return totalCans
    }

    static verifyConditions(walls_State, setStatus){

        setStatus('ok')

        for (let i = 0; i < WallMethods.getWallsAmount(walls_State); i++) {
        
            rulesArray.forEach(element => {
                element(walls_State, setStatus, i)
            });
        }
    }
}