import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'

import feedbackUpdate from './Scripts/feedBackUpdate'

export default function Output() {

    const { walls } = useContext(AppContext)

    //feedback states
    const [status, setStatus] = useState(`Waiting for input data`)
    const [totalWallArea, setTotalWallArea] = useState(0)
    const [totalDoorArea, setTotalDoorArea] = useState(0)
    const [totalWindowArea, setTotalWindowArea] = useState(0)
    const [totalCans, setTotalCans] = useState("")
    let areaToPaint = totalWallArea - totalDoorArea - totalWindowArea

    const props = {
        walls,
        setTotalWallArea,
        setTotalDoorArea,
        setTotalWindowArea,
        setStatus,
        setTotalCans,
        areaToPaint
    }

    useEffect(() => {

        feedbackUpdate(props)

        console.log(status)
        console.log("aqui")

    }, [
        walls,
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
            <h2>total Cans: {totalCans}</h2>
        </div>
    )
}