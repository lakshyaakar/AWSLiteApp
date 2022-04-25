import { useEffect, useState } from "react"
import S3Service from "../../Services/S3/S3Services";

const ShowBuckets = () => {

    const [buckets,setBucketsInfo] = useState([]);
    
    const getBucketsInfo = () => {
        S3Service.getBuckets().then((res) => {
            setBucketsInfo(res.data.Buckets)
        })
    }

    useEffect(() => {
        getBucketsInfo()
    },[])


    const deleteBucketHandler = (bucket) => {
        S3Service.deleteBucket(bucket).then((res) => {
            console.log(res)
            getBucketsInfo()
        })
    }
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created at</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {buckets.map((bucket)=> (
                        <tr key={bucket.Name}>
                            <td>{bucket.Name}</td>
                            <td>{bucket.CreationDate}</td>
                            <td>
                                <button type="button" className="btn btn-danger m-1" onClick={() => deleteBucketHandler(bucket.Name)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default ShowBuckets;