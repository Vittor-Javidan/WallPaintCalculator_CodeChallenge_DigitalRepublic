export default function HeightInput({walls, setWalls}){

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
                value={walls.height | 0}
                onChange={heightHandler}
            />
        </>
    )
}