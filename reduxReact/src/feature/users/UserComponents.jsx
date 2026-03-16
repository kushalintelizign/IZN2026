
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./usersSlice"

function UserComponent (){

    const dispatch = useDispatch()
    const {users, loading, error} = useSelector((state) => state.users)


    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: &nbsp;{error}</div>

    return (
        <>
        <h1> User List:</h1>
        <ul>
            {
                users.map((user)=>(
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>))
            }
        </ul>
        </>
    )
}

export default UserComponent