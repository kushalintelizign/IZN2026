import { useGetUserQuery } from "../feature/api/apiSlice"



const UserList = ()=>{
    const {data : users, isLoading, error} = useGetUserQuery();

    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>

    return(
        <ul>
            {users.map(user =>(
                <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </ul>
    )
}


export default UserList