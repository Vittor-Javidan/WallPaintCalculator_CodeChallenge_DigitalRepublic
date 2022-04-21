import {useEffect, useState} from 'react'
import rulesChecking from './Scripts/rulesChecking'
import wallPaintCans from './Scripts/wallPaintCans'
import resetFeedbackStates from './Scripts/resetFeedbackStates'

export default function Output({walls}) {

    //feedback states
    const [status, setStatus] = useState(`Waiting for input data`)
    const [totalWallArea, setTotalWallArea] = useState(0)
    const [totalDoorArea, setTotalDoorArea] = useState(0)
    const [totalWindowArea, setTotalWindowArea] = useState(0)
    const [totalCans, setTotalCans] = useState("")
    let areaToPaint = totalWallArea - totalDoorArea - totalWindowArea

    let props = {
        walls,
        setTotalWallArea, 
        setTotalDoorArea, 
        setTotalWindowArea, 
        setStatus,
        setTotalCans,
        areaToPaint
    }

    useEffect(()=>{

        resetFeedbackStates(props)
        rulesChecking(props)
        console.log(status)

        if(status === `ok`){
            wallPaintCans(props)
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
            <h2>Status: {status}</h2>
            <h2>total Wall Area: {totalWallArea}</h2>
            <h2>total Door Area: {totalDoorArea}</h2>
            <h2>total Window Area: {totalWindowArea}</h2>
            <h2><p>total Cans: {totalCans}</p></h2>
        </div>
    )
}