import appConfig from "../../../AppConfig"

export default class WallMath {

    static wallArea(wallsObject, index) {
        return wallsObject.wall[index].width * wallsObject.height
    }

    static doorArea(wallsObject, index) {
        return appConfig.DOOR.WIDTH * appConfig.DOOR.HEIGHT * wallsObject.wall[index].doors
    }

    static windowArea(wallsObject, index) {
        return appConfig.WINDOW.WIDTH * appConfig.WINDOW.HEIGHT * wallsObject.wall[index].windows
    }

    static totalWallArea(wallsObject) {

        let totalArea = 0
        for (let i = 0; i < appConfig.WALLS_AMMOUNT; i++) {
            totalArea += WallMath.wallArea(wallsObject, i)
        }
        return totalArea
    }

    static totalDoorArea(wallsObject) {

        let totalArea = 0
        for (let i = 0; i < appConfig.WALLS_AMMOUNT; i++) {
            totalArea += WallMath.doorArea(wallsObject, i)
        }
        return totalArea
    }

    static totalWindowArea(wallsObject) {

        let totalArea = 0
        for (let i = 0; i < appConfig.WALLS_AMMOUNT; i++) {
            totalArea += WallMath.windowArea(wallsObject, i)
        }
        return totalArea
    }

    static calculateCans(wallsObject){

        let areaToPaint = WallMath.totalWallArea(wallsObject) - WallMath.totalDoorArea(wallsObject) - WallMath.totalWindowArea(wallsObject)
        let totalCans = ""

        for (let i = 0; i < appConfig.CANS_SIZES.length; i++){
            const areaPerCan = appConfig.CANS_SIZES[i] * appConfig.INK_EFFICIENCY

            if(areaToPaint/areaPerCan >= 1 && appConfig.CANS_SIZES[i] > appConfig.CANS_SIZES[appConfig.CANS_SIZES.length - 1]){
                const cans = Math.floor(areaToPaint/areaPerCan)
                areaToPaint = areaToPaint - areaPerCan * cans
                totalCans += `${appConfig.CANS_SIZES[i]}L = ${cans}, `
    
            } else if (areaToPaint/areaPerCan >= 0 && appConfig.CANS_SIZES[i] === appConfig.CANS_SIZES[appConfig.CANS_SIZES.length - 1]){
                const cans = Math.ceil(areaToPaint/areaPerCan)
                areaToPaint = areaToPaint - areaPerCan * cans
                totalCans += `${appConfig.CANS_SIZES[i]}L = ${cans}`
            }
        }

        return totalCans
    }
}