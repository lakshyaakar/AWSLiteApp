import { useState } from "react"
import IAMService from "../../Services/IAM/IAMServices";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {

    const [username, setUserName] = useState('');
    const navigate = useNavigate();

    const usernameChangeHandler = (event) => {
        setUserName(event.target.value)
    }

    const createUserHandler = (event) => {
        event.preventDefault();
        IAMService.createUser({"UserName":username}).then((res)=>{
            console.log(res)         
        })
        navigate("/users/get")
    }

    return (
        <div className="container mt-3">

            <form onSubmit={createUserHandler}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name">Username</label>
                    <input 
                        type="text"  
                        name="username" 
                        id="username" 
                        className="form-control" 
                        placeholder="Enter username" 
                        onChange={usernameChangeHandler}
                    /> 
                </div>

                <button type="submit" className="btn btn-primary">
                    Create User
                </button>
            </form>
        </div>
    )    
}

export default CreateUser;