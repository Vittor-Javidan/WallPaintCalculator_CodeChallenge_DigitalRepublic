import { useContext, useState } from 'react'
import { AppContext } from 'App'

import feedbackUpdate from 'Components/Scripts/feedBackUpdate'

export default function Output() {

    const { walls } = useContext(AppContext)

    const [status, setStatus] = useState('Click "Calculate Cans" to calculate')
    const [totalWallArea, setTotalWallArea] = useState(0)
    const [neededCans, setTotalCans] = useState('')

    const props = {
        walls           ,
        status          , setStatus             ,
        totalWallArea   , setTotalWallArea      ,
        neededCans      , setTotalCans
    }

    return (
        <div className='Output-div'>
            <h2>Status: {status}</h2>
            <h2>total Wall Area: {totalWallArea}</h2>
            <h2>total Cans: {neededCans}</h2>
            <button 
                className='Output-button'
                onClick={()=>{feedbackUpdate(props)}}
            >
                Calculate Cans
            </button>
        </div>
    )
}