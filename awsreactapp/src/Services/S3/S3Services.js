import axios from 'axios'
const S3_BASE_URL = 'http://localhost:5000/buckets'

class S3Service{
    getBuckets(){
        return axios.get(S3_BASE_URL+'/get')
    }
    createBucket(bucket){
        return axios.post(S3_BASE_URL+ '/create',bucket)
    }   
    deleteBucket(name){
        return axios.post(S3_BASE_URL + "/delete", name)
    }   
}

export default new S3Service();