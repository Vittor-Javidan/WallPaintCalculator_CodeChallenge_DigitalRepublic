import { useContext, useEffect, useState } from 'react'
import { AppContext } from 'App'

import WallMethods from './Scripts/utilClasses/WallMethods.js'

export default function Output() {

    const { walls } = useContext(AppContext)
    const [status, setStatus] = useState('')

    useEffect(()=> {
        WallMethods.verifyConditions(walls, setStatus)
    }, [walls])

    return (
        <div className='Output-div'>
            <h2>Condição: {status}</h2>
            <h2>Área total de parede: {WallMethods.getTotalWallArea(walls)}</h2>
            <h2>Área somada dos objetos: {WallMethods.getTotalObjectArea(walls)}</h2>
            <h2>Área total a ser pintada: {WallMethods.getTotalAreaToPaint(walls)}</h2>
            <h2>Total de latas de tinta: {WallMethods.calculateCans(walls)}</h2>
        </div>
    )
}