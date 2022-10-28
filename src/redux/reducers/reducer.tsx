import { combineReducers } from "redux"
import { userTareasReducer } from "./userTarea"

const reducer = combineReducers({
    user : userTareasReducer
})

export default reducer

export type RootState = ReturnType<typeof reducer>