
import { useState } from "react";
import { useAddUserMutation } from "../feature/api/apiSlice";


const UserForm = () => {
    const [formData, setFormData] = useState({
        name : "",
        email: ""
    })

    const [addUser] = useAddUserMutation()

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!formData.name || !formData.email) return

        await addUser(formData)
        setFormData({
             name : "",
        email: ""
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <input type="text"
                 placeholder="Enter your name"
                 value={formData.name}
                 name="name"
                 onChange={handleChange}
                 />
                <br/><br/>
                <input type="text" 
                 placeholder="Enter your email"
                 name="email"
                 value={formData.email}
                  onChange={handleChange}
                 />
                 <br/><br/>
                 <button type="submit">Login</button>

                
            </form>

        </>
    )
}

export default UserForm