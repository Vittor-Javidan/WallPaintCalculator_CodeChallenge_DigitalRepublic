import resetFeedbackStates from "./resetFeedbackStates"
import areaCalculations from "./areaCalculations"
import rulesHandler from "./rulesHandler"

export default function feedbackUpdate(props) {
    
    resetFeedbackStates(props)
    rulesHandler(props)
    areaCalculations(props)
}