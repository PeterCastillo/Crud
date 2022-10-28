import { useState } from "react";
import { UserTarea } from "../types/user";

export const useForm = ( initialState: UserTarea ): [ UserTarea , React.ChangeEventHandler , React.MouseEventHandler ] => {
    const [ inputs , setInputs ] = useState<UserTarea>(initialState)

    const handleChange = (e) => {
        
        const { name , value  , type } = e.target; 

        setInputs((old) => ({
            ...old,
            [ name ] : value 
        }))
    }

    const reset = () => {
        setInputs(initialState)
    }

    return[ inputs , handleChange , reset]
}