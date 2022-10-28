import { UserTarea } from "./user";

export interface userTareasInitialStateProps {
    tareas: Array<UserTarea>
}
export interface actionProps {
    type: string
    payload: UserTarea
}