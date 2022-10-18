
const arrState=['In Between','Watery','Like Vapor','Ice Ice']

export enum Actions{
    LIQUID="LIQUID",
    GAS="GAS",
    SOLID="SOLID"
}

type Liquid={
    type: Actions.LIQUID,
    payload:number
}

type Gas={
    type:Actions.GAS,
    payload:number
}

type Solid={
    type:Actions.SOLID,
    payload:number
}

type ActionFunc=Liquid|Gas|Solid


export const reducer = (state:any='',action:ActionFunc)=>{
    switch(action.type){
        case Actions.LIQUID:
            return state=arrState[action.payload]
        case Actions.GAS:
            return state=arrState[action.payload]
        case Actions.SOLID:
            return state=arrState[action.payload]
        default:
            return state=arrState[0]
    }
}