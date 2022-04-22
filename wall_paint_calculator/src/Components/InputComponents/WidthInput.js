import { useContext } from "react";
import { AppContext } from "../../App";

export default function WidthInput({index}){

    const {walls, setWalls} = useContext(AppContext)

    function widthHandler(e){
        setWalls( prev => {

            const wallsArray = [...prev.wall]
            wallsArray[index] = {
                ...wallsArray[index],
                width: Number(e.target.value)
            }

            return ({
                ...prev,
                wall: wallsArray
            })
        })
    }

    return (
        <>
            <label>Width</label>
            <input 
                type={'number'}
                value={walls.wall[index].width}
                onChange={widthHandler}
            />
        </>
    )
}