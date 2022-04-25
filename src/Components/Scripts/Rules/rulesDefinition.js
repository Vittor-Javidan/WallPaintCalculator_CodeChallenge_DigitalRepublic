import WallMethods from 'Components/Scripts/CustomClasses/WallMethods.js'

function checkNegativeHeight(walls_State, setStatus, wall_Index) {

    if (WallMethods.getWallsHeight(walls_State) <= 0)
        return setStatus('AVISO: Altura das paredes possui valor 0 ou Negativo')

}

function checkLayersAmount(walls_State, setStatus, wall_Index) {

    if (WallMethods.getWallsInkLayers(walls_State) < 1)
        return setStatus('AVISO: valor de demãos é menor que 1')
}

function checkObjectsAmount(walls_State, setStatus, wall_Index) {

    if (WallMethods.getWallObjectsAmount(walls_State, wall_Index) < 0)
        return setStatus(`AVISO: Parede ${wall_Index + 1} possui uma quantidade negativa de objetos`)
}

function checkObjectsMinArea(walls_State, setStatus, wall_Index) {

    for (let i = 0; i < WallMethods.getWallObjectsAmount(walls_State, wall_Index); i++)
        if(WallMethods.getWallObjectHeight(walls_State, wall_Index, i) * WallMethods.getWallObjectWidth(walls_State, wall_Index, i) <= 0)
            setStatus(`AVISO: objeto ${i + 1} da Parede ${wall_Index + 1} não possui uma área válida`)
}

function checkMinWallArea(walls_State, setStatus, wall_Index) {

    if (WallMethods.getWallArea(walls_State, wall_Index) <= 0)
        return setStatus(`AVISO: Parede ${wall_Index + 1} não possui uma área válida`)
}

function checkWidthWallUsage(walls_State, setStatus, wall_Index) {

    if (WallMethods.getWallWidth(walls_State, wall_Index) < WallMethods.getWallTotalObjectsWidth(walls_State, wall_Index))
        return setStatus(`AVISO: largura da Parede ${wall_Index + 1} é menor que a soma das larguras de seus objetos`)

}

const rulesArray = [ // Last array indexes has priority in status message

    checkObjectsMinArea,
    checkObjectsAmount,
    checkLayersAmount,
    checkWidthWallUsage,
    checkMinWallArea,
    checkNegativeHeight
]

export default rulesArray