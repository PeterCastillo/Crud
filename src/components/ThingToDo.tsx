import { Description, Details, Done, Info, Thing } from "../style/thingsToDo"
import { ThingToDoProps } from "../types/props"
import { useDispatch } from "react-redux"
import { deleteTarea } from "../redux/actions/userTareasAction"


const ThingToDo = ({ infoTarea }: ThingToDoProps) => {

    const dispach = useDispatch()

    const deleteFromBd = async() => {
        if(infoTarea.idTarea){
            const id = infoTarea.idTarea
            const res = await fetch(`http://localhost:3000/${id}`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                tareaId: id
            })
        })
    }
}

    const Delete = () => {
        dispach(deleteTarea(infoTarea))
        deleteFromBd()
    }

    return (
        <Thing>
            <Info>
                <Details>
                    <span><strong>-{infoTarea.nombreTarea}</strong></span>
                </Details>
                <Description>{infoTarea.descripcionTarea}</Description>
            </Info>
            <Done onClick={Delete}>✓</Done>
        </Thing>
    )
}

export default ThingToDo