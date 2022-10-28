import { UserTarea } from "../types/user"
import { useDispatch } from "react-redux"
import { addTareaUser, cleanTatras } from "../redux/actions/userTareasAction"
import { useEffect } from "react"

export const useTareas = (tarea:UserTarea , reset:React.MouseEventHandler ): [ React.MouseEventHandler ] => {

    const {userId } = tarea

    const dispach = useDispatch()

    const AddTarea = async() => {
        dispach(addTareaUser(tarea))
        const res = await fetch("http://localhost:3000/tarea",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "userId": tarea.userId,
                "nombreTarea": tarea.nombreTarea,
                "descripcionTarea": tarea.descripcionTarea
            })
        })
    }

    const setTareas = (tareas:Array<UserTarea>) => {
        dispach(cleanTatras())
        console.log(tareas)
        tareas.forEach(tarea => {
            dispach(addTareaUser(tarea))
        })
    }

    const getAllTareas = async(id:number) => {
        const data = await fetch(`http://localhost:3000/${id}`)
        const res = await data.json()
        setTareas(res)
    }

    useEffect(()=> {
        getAllTareas(tarea.userId)
    },[userId])

    return [ AddTarea ] 
}