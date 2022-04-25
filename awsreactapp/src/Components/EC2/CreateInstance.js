import { useState } from "react"
import EC2Service from "../../Services/EC2/EC2Services";
import { useNavigate } from "react-router-dom";

const CreateInstance = () => {

    const [ami, setAMI] = useState('');
    const [instance_type, setInstancetype] = useState('');
    const [maxval, setMaximumValue] = useState(1);
    const [minval, setMinimumValue] = useState(1);

    const navigate = useNavigate();

    const amiChangeHandler = (event) => {
        setAMI(event.target.value)
    }

    const typeChangeHandler = (event) => {
        setInstancetype(event.target.value)
    }

    const minCountChangeHandler = (event) => {
        setMinimumValue(event.target.value)
    }

    const maxCountChangeHandler = (event) => {
        setMaximumValue(event.target.value)
    }

    const createInstanceHandler = (event) => {
        event.preventDefault();    
        EC2Service.createInstance(
            {
                "ImageId":ami,
                "InstanceType":instance_type,
                "MinCount":minval,
                "MaxCount":maxval
            }).then((res)=>{
            console.log(res)
            navigate("/instance/get")         
        })
    }

    return (
        <div className="container mt-3">

            <form onSubmit={createInstanceHandler}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name">AMI ID</label>
                    <input 
                        type="text"  
                        name="ami_id" 
                        id="ami_id" 
                        className="form-control" 
                        placeholder="Enter Image ID" 
                        onChange={amiChangeHandler}
                    /> 
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="name">Instance Type</label>
                    <input 
                        type="text"  
                        name="type" 
                        id="type" 
                        className="form-control" 
                        placeholder="Enter Instance type" 
                        onChange={typeChangeHandler}
                    /> 
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="name">MinCount</label>
                    <input 
                        type="number"  
                        name="mincount" 
                        id="mincount" 
                        className="form-control" 
                        value={minval}
                        min="1"
                        onChange={minCountChangeHandler}
                    /> 
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="name">MaxCount</label>
                    <input 
                        type="number"  
                        name="maxcount" 
                        id="maxcount" 
                        className="form-control"
                        value={maxval} 
                        min="1"
                        onChange={maxCountChangeHandler}
                    /> 
                </div>

                <button type="submit" className="btn btn-primary">
                    Create Instance
                </button>
            </form>
        </div>
    )    
}

export default CreateInstance;