import rulesArray from 'Components/Scripts/Rules/rulesDefinition.js'

export default function rulesHandler(props) {

    const { walls } = props
    
    for (let i = 0; i < walls.wallsAmount; i++) {
        
        rulesArray.forEach(element => {
            element(props, i)
        });
    }
}