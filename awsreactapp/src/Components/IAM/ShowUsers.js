import { useEffect, useState } from "react"
import IAMService from "../../Services/IAM/IAMServices";

const ShowUsers = () => {

    const [users,setUsersInfo] = useState([]);
    
    const getUsersInfo = () => {
        IAMService.getUsers().then((res) => {
            setUsersInfo(res.data.Users)
        })
    }

    useEffect(() => {
        getUsersInfo()
    },[])

    console.log(users)
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created at</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=> (
                        <tr key={user.UserId}>
                            <td>{user.UserName}</td>
                            <td>{user.CreateDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default ShowUsers;