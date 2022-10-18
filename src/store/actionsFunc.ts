import { Actions } from "./reducer"

export const liquid=(id:number)=>{
    return{
        type:Actions.LIQUID,
        payload:id
    }
}

export const gas=(id:number)=>{
    return{
        type:Actions.GAS,
        payload:id
    }
}

export const solid=(id:number)=>{
    return {
        type:Actions.SOLID,
        payload:id
    }
}