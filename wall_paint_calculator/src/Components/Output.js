import {useEffect, useState} from 'react'
import appConfig from "../AppConfig"

export default function Output({walls}) {

    //feedback states
    const [status, setStatus] = useState(`Waiting for input data`)
    const [totalWallArea, setTotalWallarea] = useState(0)
    const [totalDoorArea, setTotalDoorArea] = useState(0)
    const [totalWindowArea, setTotalWindowArea] = useState(0)

    function rulesChecking(){
        
        //TO DO: Move rulesChecking to another file
        //reset feedback info
        setTotalWallarea(0)
        setTotalDoorArea(0)
        setTotalWindowArea(0)

        for(let i =  0; i < appConfig.WALLS_AMMOUNT; i++){

            //TO DO: Create a function for each rule
            let wallArea = walls.wall[i].width * walls.height
            setTotalWallarea(prev => prev + wallArea)

            // Min and Max wall area checking
            const min = wallArea >= appConfig.WALL_MIN_AREA
            const max = wallArea <= appConfig.WALL_MAX_AREA

            if(!min)
                return setStatus(prev => `Wall ${i + 1} cannot be less than 1 square meter`)
            else if(!max)
                return setStatus(prev => `Wall ${i + 1} cannot be more than 15 square meter`)
            
            // Checks if a wall can have a door
            const heightWithDoor = appConfig.DOOR.HEIGHT + 0.3 <= walls.height
            const widthWithDoor = appConfig.DOOR.WIDTH <= walls.wall[i].width

            if(walls.wall[i].doors > 0 && !heightWithDoor)
                return setStatus(prev => `Wall height cannot have a door`)
            else if(walls.wall[i].doors > 0 && !widthWithDoor)
                return setStatus(prev => `Wall ${i + 1} width cannot have a door`)
            
            // Checks if a wall can have a window
            const heightWithWindow = appConfig.WINDOW.HEIGHT <= walls.height
            const widthWithWindow = appConfig.WINDOW.WIDTH <= walls.wall[i].width

            if(walls.wall[i].windows > 0 && !heightWithWindow)
                return setStatus(prev => `Wall height cannot have a window`)   
            else if(walls.wall[i].windows > 0 && !widthWithWindow)
                return setStatus(prev => `Wall ${i + 1} width cannot have a window`)         

            // Checks if doors and window consumes more than 50% of wall area
            const doorArea = (appConfig.DOOR.WIDTH * appConfig.DOOR.HEIGHT) * walls.wall[i].doors
            const windowArea = (appConfig.WINDOW.WIDTH * appConfig.WINDOW.HEIGHT) * walls.wall[i].windows
            setTotalDoorArea(prev => prev + doorArea)
            setTotalWindowArea(prev => prev + windowArea)

            if((doorArea + windowArea) > wallArea/2)
                return setStatus(prev => `Doors and window are using more than 50% of wall ${i + 1} area`)

            setStatus(`ok`)
        }
    }

    const [totalCans, setTotalCans] = useState("")
    let areaToPaint = totalWallArea - totalDoorArea - totalWindowArea

    function wallPaintCans(){

        // TO DO: move wallPaintCans to another files
        setTotalCans("")

        function calculateCans(liters, minimun){

            const areaPerCan = liters * 5
            if(areaToPaint/areaPerCan >= 1 && liters > minimun){
                const cans = Math.floor(areaToPaint/areaPerCan)
                areaToPaint = areaToPaint - areaPerCan * cans
                setTotalCans(prev => prev + `${liters}L = ${cans} \n`)

            } else if (areaToPaint/areaPerCan > 0 && liters === minimun){
                const cans = Math.ceil(areaToPaint/areaPerCan)
                areaToPaint = areaToPaint - areaPerCan * cans
                setTotalCans(prev => prev + `${liters}L = ${cans} \n`)
            }
        }

        calculateCans(18, 0.5)
        calculateCans(3.6, 0.5)
        calculateCans(2.4, 0.5)
        calculateCans(0.5, 0.5)
    }

    useEffect(()=>{
        rulesChecking()
        if(status === `ok`){
            wallPaintCans()
        }
    }, [
        walls, 
        status, 
        totalWallArea, 
        totalDoorArea, 
        totalWindowArea, 
        totalCans
    ])


    return (
        <div>
            <h2>Last Status: {status}</h2>
            <h2>total Wall Area: {totalWallArea}</h2>
            <h2>total Door Area: {totalDoorArea}</h2>
            <h2>total Window Area: {totalWindowArea}</h2>
            <h2><p>total Cans: {totalCans}</p></h2>
        </div>
    )
}