import { useContext, useState } from 'react'
import { AppContext } from '../App'

import feedbackUpdate from './Scripts/feedBackUpdate'

export default function Output() {

    const { walls } = useContext(AppContext)

    //feedback states
    const [status, setStatus] = useState('Click "Refresh" to calculate')
    const [totalWallArea, setTotalWallArea] = useState(0)
    const [totalDoorArea, setTotalDoorArea] = useState(0)
    const [totalWindowArea, setTotalWindowArea] = useState(0)
    const [neededCans, setTotalCans] = useState("")

    const props = {
        walls           ,
        status          , setStatus             ,
        totalWallArea   , setTotalWallArea      ,
        totalDoorArea   , setTotalDoorArea      ,
        totalWindowArea , setTotalWindowArea    ,
        neededCans      , setTotalCans
    }

    return (
        <div className='Output-div'>
            <h2>Status: {status}</h2>
            <h2>total Wall Area: {totalWallArea}</h2>
            <h2>total Door Area: {totalDoorArea}</h2>
            <h2>total Window Area: {totalWindowArea}</h2>
            <h2>total Cans: {neededCans}</h2>
            <button 
                className='Output-button'
                onClick={()=>{feedbackUpdate(props)}}
            >
                Refresh
            </button>
        </div>
    )
}