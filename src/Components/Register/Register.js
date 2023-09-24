import React,{useState} from "react";
import "./Register.css"

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterpassword: ""

    })
    const handleChange = e =>{
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }
    return(
        <div className="Register">
        {console.log("User", user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
        <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
        <input type="text" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
        <input type="text" name="reEnterpassword" value={user.reEnterpassword} placeholder="Re-enter Password" onChange={ handleChange }></input>

        <div className="button">Register</div>
        <div>or</div>
        <div className="button">Login</div>
        </div>
    )
}
export default Register;