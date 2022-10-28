import { useState } from "react"
import { useForm } from "../hooks/useForm"
import { useTareas } from "../hooks/useTareas"
import { getUsers } from "../services/getUsers"
import { Btn, BtnVer, FormContainer, FormStyle, FormTarea, Input, Select, Tarea, TextArea } from "../style/form"

const Form = () => {
    const { users }  = getUsers()

    const [ nav , setNav ] = useState(false)

    const [ inputs , handleChange , reset] = useForm({
        userId: 0,
        nombreTarea: "",
        descripcionTarea: ""
    })

    const [ AddTarea ] = useTareas(inputs, reset)

    const { userId , nombreTarea , descripcionTarea } = inputs

    return (
        <FormContainer>
            <FormStyle>
                <FormTarea>
                    <Select 
                        name="userId"
                        value={userId}
                        onChange={handleChange}
                    >
                        {
                            users.length > 0 
                            ? users.map(user => (
                                <option key={user.userId} value={user.userId}>{user.userNombre}</option>
                            ))
                            : <></>
                        }
                    </Select>
                    <Tarea state={nav}>
                        <Input
                            type="text" 
                            name="nombreTarea"
                            value={nombreTarea}
                            onChange={handleChange}
                            placeholder="Ingrese nombre de la tarea"
                            state={nav}
                        />
                        <TextArea  
                            name="descripcionTarea"
                            value={descripcionTarea}
                            onChange={handleChange}
                            state={nav}
                            placeholder="Ingrese descripcion de la tarea"
                        ></TextArea>
                        <Btn  state={nav} onClick={AddTarea}>Agregar Tarea</Btn>
                        <BtnVer onClick={()=>(setNav(!nav))}>🠻</BtnVer>
                    </Tarea> 
                </FormTarea>
            </FormStyle>
        </FormContainer>
    )
}

export default Form