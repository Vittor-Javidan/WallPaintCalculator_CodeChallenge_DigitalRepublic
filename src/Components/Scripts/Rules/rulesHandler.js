import rulesArray from "./rulesDefinition"

export default function rulesHandler(props) {

    const { walls } = props
    
    for (let i = 0; i < walls.wallsAmount; i++) {
        
        rulesArray.forEach(element => {
            element(props, i)
        });
    }
}