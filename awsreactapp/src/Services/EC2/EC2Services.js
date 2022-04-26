import axios from 'axios'
const EC2_BASE_URL = 'http://localhost:5000/instance'

class EC2Service{
    getInstance(){
        return axios.get(EC2_BASE_URL+'/get')
    }
    createInstance(instance){
        return axios.post(EC2_BASE_URL+ '/create',instance)
    }   
    startInstance(ami){
        return axios.post(EC2_BASE_URL + "/start", ami)
    }
    stopInstance(ami){
        return axios.post(EC2_BASE_URL + "/stop", ami)
    }
    terminateInstance(ami){
        return axios.post(EC2_BASE_URL + "/terminate", ami)
    }   
}

export default new EC2Service();