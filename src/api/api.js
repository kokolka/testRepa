import axios from "axios";

let token = '';

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://135.181.35.61:2112/'
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`
    // }
})

export const getPageOrganization = (id) =>{
    return instance.get(`companies/${id}`);
}
export const getAuthorized = (username) =>{
    return instance.get(`auth?user=${username}`);
}