export default function WidthInput({index, walls, setWalls}){

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