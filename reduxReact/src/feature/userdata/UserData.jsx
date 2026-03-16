import { login,logout } from "./UserSlice";
import { useDispatch,useSelector } from "react-redux"

const UserData =()=>{
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const msg = useSelector( d => d.user.msg)
    const loggedIn = useSelector(state => state.user.loggedIn)
    const user1 = {
        name: "Kush",
        email: "test@gmail.com"
    }

    const handleLogin = ()=>{dispatch(login(user1))}
    const handleLogout=()=>{dispatch(logout())}
    

    return (
    <>
    <h2>User component:</h2>
    {
        loggedIn && user ? (
            <div>
                <p><b>{msg}</b></p>
                <p>Name : {user.name}</p>
                <p>Email: {user.email}</p>
                <button onClick = {handleLogout}>Logout</button>
            </div>
        ) : (<>
            <button onClick={handleLogin}>Login</button>
            <p><b>{msg}</b></p>
            </>
        )
    }
    </>
    )
}

export default UserData;




// UI → dispatch(actionCreator(data)) → action(payload)
// → reducer → state update → UI re-render