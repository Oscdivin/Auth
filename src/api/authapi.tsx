import axios from "axios";

const  URL:string = "https://dirttoschool.onrender.com"

export const createAcc =async (data:any) => {
    try {
        return await axios.post(`${URL}/api/create`, data).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error); 
    }
}

export const SigninAcc =async (data:any) => {
    try {
        return await axios.post(`${URL}/api/sign-in`, data).then((res:any)=>{
            return res.data.data
        })
     
    } catch (error) {
        console.log(error); 
    }
}