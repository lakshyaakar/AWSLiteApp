import { useState } from "react"
import S3Service from "../../Services/S3/S3Services";
import { useNavigate } from "react-router-dom";

const CreateBucket = () => {

    const [bucketName, setBucketName] = useState('');
    const navigate = useNavigate();

    const nameChangeHandler = (event) => {
        setBucketName(event.target.value)
    }

    const createHandler = (event) => {
        event.preventDefault();
        S3Service.createBucket({"Bucket":bucketName}).then((res)=>{
            console.log(res)         
        })
        navigate("/buckets/get");
    }

    return (
        <div className="container mt-3">

            <form onSubmit={createHandler}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"  
                        name="bucket" 
                        id="bucket" 
                        className="form-control" 
                        placeholder="Enter unique bucket name" 
                        onChange={nameChangeHandler}
                    /> 
                </div>

                <button type="submit" className="btn btn-primary">
                    Create Bucket
                </button>
            </form>
        </div>
    )    
}

export default CreateBucket;