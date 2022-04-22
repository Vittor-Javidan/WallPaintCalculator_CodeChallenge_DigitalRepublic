import { useContext } from "react"
import { AppContext } from "../../App"

export default function WindowsInput({index}){

    const {walls, setWalls} = useContext(AppContext)

    function windowsHandler(e){
        setWalls( prev => {

            const wallsArray = [...prev.wall]
            wallsArray[index] = {
                ...wallsArray[index],
                windows: Number(e.target.value)
            }

            return ({
                ...prev,
                wall: wallsArray
            })
        })
    }

    return (
        <>
            <label>Windows</label>
            <input 
                type={'number'}
                value={walls.wall[index].windows}
                onChange={windowsHandler}
            />
        </>

    )
}