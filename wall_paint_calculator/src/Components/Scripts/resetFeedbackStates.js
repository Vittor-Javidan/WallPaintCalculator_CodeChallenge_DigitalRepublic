export default function resetFeedbackStates(props){

    props.setTotalWallArea(0)
    props.setTotalDoorArea(0)
    props.setTotalWindowArea(0)
    props.setTotalCans("")
    props.setStatus(`ok`)
}