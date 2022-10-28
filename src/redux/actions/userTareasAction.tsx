import { UserTarea } from "../../types/user";
import { ADD_TAREA, CLEAN_CART, DELETE_TAREA } from "../actionTypes/userTareasTypes";

export const addTareaUser = (tarea:UserTarea) => ({type: ADD_TAREA , payload: tarea})
export const cleanTatras = () => ({type:CLEAN_CART})
export const deleteTarea = (tarea:UserTarea) => ({type:DELETE_TAREA, payload: tarea})