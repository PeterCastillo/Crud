import { useEffect, useState } from "react"
import { User } from "../types/user"

export const getUsers = () => {
    const [ users , setUsers ] = useState<Array<User>>([])

    const fetchUsers = async() => {
        const data = await fetch("http://localhost:3000/users")
        const res = await data.json()
        setUsers(res)
    }

    useEffect(()=> {
        fetchUsers()
    },[])

    return { users } 
}