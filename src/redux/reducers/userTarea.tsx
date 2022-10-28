import { actionProps, userTareasInitialStateProps } from "../../types/redux";
import { ADD_TAREA, CLEAN_CART, DELETE_TAREA } from "../actionTypes/userTareasTypes";

export const userTareasInitialState:userTareasInitialStateProps = {
    tareas: []
}



export function userTareasReducer( state = userTareasInitialState , action:actionProps ):userTareasInitialStateProps {
    switch(action.type){
        case(ADD_TAREA):{
            return {
                ...state,
                tareas: [...state.tareas , action.payload ]
            }
        }
        case(CLEAN_CART):{
            return {
                ...state,
                tareas:[]
            }
        }
        case(DELETE_TAREA):{
            const tareaToDelete = action.payload
            return {
                ...state,
                tareas: state.tareas.filter(item => item !== tareaToDelete )
            }
        }
        default:{
            return state
        }
    }
}