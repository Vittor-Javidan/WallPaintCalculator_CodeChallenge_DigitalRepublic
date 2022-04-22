import { useContext } from "react"
import { AppContext } from "../../App"

export default function HeightInput(){

    const {walls, setWalls} = useContext(AppContext)

    function heightHandler(e){
        setWalls(prev => (
            {
                ...prev,
                height: Number(e.target.value)
            }
        ))
    }

    return (
        <>
            <label>Walls Height</label>
            <input
                type={'number'}
                value={walls.height}
                onChange={heightHandler}
            />
        </>
    )
}