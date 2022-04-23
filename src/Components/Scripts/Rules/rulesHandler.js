import appConfig from "../../../AppConfig"
import rulesArray from "./rulesDefinition"

export default function rulesHandler(props) {
    
    for (let i = 0; i < appConfig.WALLS_AMMOUNT; i++) {
        
        rulesArray.forEach(element => {
            element(props, i)
        });
    }
}