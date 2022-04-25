import EC2Service from "../../Services/EC2/EC2Services";
import { useEffect, useState } from "react"

const ShowInstance = () => {

    const [instances,setInstanceInfo] = useState([]);
    
    const getInstanceInfo = () => {
        EC2Service.getInstance().then((res) => {
            setInstanceInfo(res.data.Reservations)
        })
    }

    useEffect(() => {
        getInstanceInfo()
    },[])


    const startInstanceHandler = (instance) => {
        EC2Service.startInstance(instance.Instances[0].InstanceId).then((res) => {
            getInstanceInfo()
        })
    }

    const stopInstanceHandler = (instance) => {
        EC2Service.stopInstance(instance.Instances[0].InstanceId).then((res) => {
            getInstanceInfo()
        })
    }

    const terminateInstanceHandler = (instance) => {
        EC2Service.terminateInstance(instance.Instances[0].InstanceId).then((res) => {
            console.log(instance.Instances[0].InstanceId)
            getInstanceInfo()
        })
    }

    return(
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Created at</th>
                        <th>Image Id</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {
                    instances.map((instance)=> (
                        <tr key={instance.Instances[0].InstanceId}>
                            <td>{instance.Instances[0].LaunchTime}</td>
                            <td>{instance.Instances[0].ImageId}</td>
                            <td>{instance.Instances[0].State.Name}</td>
                            
                            <td>
                                <button type="button" className="btn btn-success m-1" onClick={() => startInstanceHandler(instance)}>Start</button>
                                <button type="button" className="btn btn-warning m-1" onClick={() => stopInstanceHandler(instance)}>Stop</button>
                                <button type="button" className="btn btn-danger m-1" onClick={() => terminateInstanceHandler(instance)}>Terminate</button>
                            </td>
                        </tr>
                    ))}
                </thead>
            </table>
        </div>
    )
}

export default ShowInstance; 