import axios from 'axios'
// axios.defaults.headers.common['Accept'] = "application/jsonm"  

    const authFetch = axios.create({
        // baseURL:"https://official-joke-api.appspot.com/jokes/random",
        baseURL:"http://localhost:3034/users",
        timeout:3000,
        headers:{
            Accept:"application/json",
    
        }
    })


authFetch.interceptors.request.use((req)=>{
    console.log("reqest has been send")
    return req

},(err)=>{
    return Promise.reject(err)
})
authFetch.interceptors.response.use((response)=>{
    console.log("your response has been recived")
    return response
},(err)=>{
    console.log(err)
})

export default authFetch
