import resetFeedbackStates from "./resetFeedbackStates"
import outputCalculations from "./outputCalculations"
import rulesHandler from "./Rules/rulesHandler"

export default function feedbackUpdate(props) {
    
    resetFeedbackStates(props)
    rulesHandler(props)
    outputCalculations(props)
}