import { useDispatch, useSelector } from "react-redux"
import { addUser, updateEmail, updateName } from "../feature/user/userSlice"

const UserForm = () => {
    const dispatch = useDispatch()
    const {name, email, status} = useSelector((state)=> state.user)
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addUser({name, email}))
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input type="text"
                 placeholder="Enter your name"
                 value={name}
                 onChange={(e)=>dispatch(updateName(e.target.value))}
                 />
                <br/><br/>
                <input type="text" 
                 placeholder="Enter your email"
                 value={email}
                 onChange={(e)=>dispatch(updateEmail(e.target.value))}
                 />
                 <br/><br/>
                 <button type="submit">Login</button>

                 {status === 'loading' && <p> Submitting...... </p>}
                 {status === 'succeeded' && <p> User LoggedIn successfully..</p>}
                 {status === 'failed' && <p> Error while login</p>}
            </form>

        </>
    )
}

export default UserForm