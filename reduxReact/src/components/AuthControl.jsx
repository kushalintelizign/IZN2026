import {useDispatch, useSelector} from "react-redux"
import { logout , login} from "../feature/auth/authSlice";

function AuthControl(){

    const dispatch = useDispatch();
    const {isLoggedIn, user} = useSelector((state)=>state.auth);

    const handleLogin = ()=>{
        const userData = {name : "vinayak", email : "kush@gmail.com"};
        dispatch(login(userData))
    }

    return(
        <>
        <h1>Authentication Control</h1>
        {
            isLoggedIn ? (
                <>
                <h2> Welcome : {user.name}</h2>
                <p>{user.email}</p>
                <button onClick={()=>dispatch(logout())}>Logout</button>
                </>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )
        }
        </>
    )
}

export default AuthControl