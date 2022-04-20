export default function DoorsInput({index, walls, setWalls}){

    function doorsHandler(e){
        setWalls( prev => {

            const wallsArray = [...prev.wall]
            wallsArray[index] = {
                ...wallsArray[index],
                doors: Number(e.target.value)
            }

            return ({
                ...prev,
                wall: wallsArray
            })
        })
    }

    return (
        <>
            <label>Doors</label>
            <input 
                type={'number'}
                value={walls.wall[index].doors}
                onChange={doorsHandler}
            />
        </>
    )
}