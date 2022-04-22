export default function ResetFeedbackStates(props){

    props.setTotalWallArea(0)
    props.setTotalDoorArea(0)
    props.setTotalWindowArea(0)
    props.setTotalCans("")
    props.setStatus(`ok`)
}