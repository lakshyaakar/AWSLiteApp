import axios from 'axios'
const IAM_BASE_URL = 'http://localhost:3000/users'

class IAMService{
    getUsers(){
        return axios.get(IAM_BASE_URL+'/get')
    }
    createUser(user){
        return axios.post(IAM_BASE_URL+ '/create',user)
    }
}

export default new IAMService();