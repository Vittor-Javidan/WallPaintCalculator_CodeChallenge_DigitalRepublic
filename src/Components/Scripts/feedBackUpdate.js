import resetFeedbackStates from 'Components/Scripts/resetFeedbackStates.js'
import outputCalculations from 'Components/Scripts/outputCalculations.js'
import rulesHandler from 'Components/Scripts/Rules/rulesHandler.js'

export default function feedbackUpdate(props) {
    
    resetFeedbackStates(props)
    rulesHandler(props)
    outputCalculations(props)
}