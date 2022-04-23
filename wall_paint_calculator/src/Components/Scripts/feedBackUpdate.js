import resetFeedbackStates from "./resetFeedbackStates"
import outputCalculations from "./outputCalculations"
import rulesHandler from "./rulesHandler"

export default function feedbackUpdate(props) {
    
    resetFeedbackStates(props)
    rulesHandler(props)
    outputCalculations(props)
}