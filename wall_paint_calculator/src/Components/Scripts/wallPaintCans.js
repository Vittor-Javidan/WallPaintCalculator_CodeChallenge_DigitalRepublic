export default function wallPaintCans(props){

    let {
        totalWallArea,
        totalDoorArea,
        totalWindowArea,
        setTotalCans
    } = props

    let areaToPaint = totalWallArea - totalDoorArea - totalWindowArea

    function calculateCans(liters, minimun){

        const areaPerCan = liters * 5
        if(areaToPaint/areaPerCan >= 1 && liters > minimun){
            const cans = Math.floor(areaToPaint/areaPerCan)
            areaToPaint = areaToPaint - areaPerCan * cans
            setTotalCans(prev => prev + `${liters}L = ${cans}, `)

        } else if (areaToPaint/areaPerCan >= 0 && liters === minimun){
            const cans = Math.ceil(areaToPaint/areaPerCan)
            areaToPaint = areaToPaint - areaPerCan * cans
            setTotalCans(prev => prev + `${liters}L = ${cans}`)
        }
    }

    calculateCans(18, 0.5)
    calculateCans(3.6, 0.5)
    calculateCans(2.4, 0.5)
    calculateCans(0.5, 0.5)
}