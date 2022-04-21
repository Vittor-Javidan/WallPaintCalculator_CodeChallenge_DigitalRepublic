export default function resetFeedbackStates(props){

    const {
        setTotalWallArea,
        setTotalDoorArea,
        setTotalWindowArea,
        setTotalCans,
        setStatus
    } = props

    setTotalWallArea(0)
    setTotalDoorArea(0)
    setTotalWindowArea(0)
    setTotalCans("")
    setStatus(`ok`)
}